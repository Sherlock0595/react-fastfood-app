import React, { useEffect, useState } from 'react'

import qs from 'qs'

import { useNavigate } from 'react-router-dom'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/PaginationBlock/Index'
import { setFilters } from '../redux/features/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { sortList } from '../components/Sort'

function Home() {

    // const isSearch = React.useRef(false)
    // const isMounted = React.useRef(false);

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const [items, setitems] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)

    const searchValue = useSelector((state) => state.filter.searchValue)
    const categoryId = useSelector((state) => state.filter.categoryId)
    const sort = useSelector((state) => state.filter.sort)
    const currentPage = useSelector((state) => state.filter.currentPage)

    const fetchPizzas = () => {
        setIsLoading(true)
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        axios
            .get(`https://654b7b775b38a59f28ef27f5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search}`,)
            .then((res) => {
                setitems(res.data);
                setIsLoading(false);
            });
    }
    //Проверка URL-параметров, если был первый рендер и сохраняем в Redux
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sortProperty = params.sortProperty || 'rating';
            const sort = sortList.find((obj) => obj.sortProperty === sortProperty)

            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );

            isSearch.current = false;
        }
    }, [])

    //Если был первый рендер, то запрашиваем пиццы
    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            fetchPizzas();
        }

        isSearch.current = false;
    }, [categoryId, sort, searchValue, currentPage]);

    //Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sort: sort.sortProperty,
                currentPage,
                categoryId
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
    }, [categoryId, sort.sortProperty, searchValue, currentPage])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoading ?
                    [...new Array(6)].map((_, index) => <Skeleton key={index} />) :
                    items.map((obj) => (
                        <PizzaBlock key={obj.id} {...obj}
                        />
                    ))
                }
            </div>
            <Pagination />
        </div>
    )
}

export default Home