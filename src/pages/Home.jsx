import React, { useEffect, useState } from 'react'


import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

function Home({ searchValue }) {
    const [items, setitems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)


    const [sortType, setSortType] = useState({
        name: "популярности",
        sortProperty: "rating",
    })

    useEffect(() => {
        setIsLoading(true)
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(
            `https://654b7b775b38a59f28ef27f5.mockapi.io/items?${category}&sortBy=${sortType.sortProperty}&order=desc${search}`,

        )
            .then((res) => res.json())
            .then((items) => {
                setitems(items);
                setIsLoading(false);
            });

    }, [categoryId, sortType, searchValue])



    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
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
        </div>
    )
}

export default Home