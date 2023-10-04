import React from 'react'

import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'

function App() {

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
            <PizzaBlock title="Четыре сезона" price="400" />
            <PizzaBlock title="Пепперони" price="350" />
            <PizzaBlock title="Итальянская" price="400" />
            <PizzaBlock title="Мацератти" price="500" />
            <PizzaBlock title="Анчоусная" price="450" />
            <PizzaBlock title="Ананасовая" price="650" />
            <PizzaBlock title="Суши-Пицца" price="430" />
            <PizzaBlock title="Ассорти" price="470" />
            <PizzaBlock title="Баунти" price="870" />
            <PizzaBlock title="Сникерс" price="770" />
            <PizzaBlock title="Марс" price="777" />
            <PizzaBlock title="Четыре сыра" price="250" />
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
