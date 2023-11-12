import React, { useEffect, useState } from 'react'

import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import Skeleton from './components/PizzaBlock/Skeleton'

function App() {
  const [items, setitems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   fetch('https://654b7b775b38a59f28ef27f5.mockapi.io/items')
  //     .then((res) => res.json())
  //     .then((items) => {
  //       setitems(items);
  //       setIsLoading(false);
  //     });

  // }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
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
        </div>
      </div>
    </div>

  )
}

export default App
