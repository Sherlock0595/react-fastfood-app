import React, { useEffect, useState } from 'react'


import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/PaginationBlock/Index'
import { SearchContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
    const { searchValue, setSearchValue } = React.useContext(SearchContext)

    const [items, setitems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const categoryId = useSelector((state) => state.filter.categoryId)
    const sort = useSelector((state) => state.filter.sort)

    useEffect(() => {
        setIsLoading(true)
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(
            `https://654b7b775b38a59f28ef27f5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search}`,

        )
            .then((res) => res.json())
            .then((items) => {
                setitems(items);
                setIsLoading(false);
            });

    }, [categoryId, sort, searchValue, currentPage])


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
            <Pagination onChangePage={(number => setCurrentPage(number))} />
        </div>
    )
}

export default Home