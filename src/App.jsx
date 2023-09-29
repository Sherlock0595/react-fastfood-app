import React from 'react'

import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'

function App() {

  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Четыре сезона" price="400" />
            <PizzaBlock title="Пепперони" price="350" />
            <PizzaBlock title="Итальянская" price="400" />
            <PizzaBlock title="Мацератти" price="500" />
            <PizzaBlock title="Анчоусная" price="450" />
            <PizzaBlock title="Ананасовая" price="650" />
            <PizzaBlock title="Суши-Пицца" price="430" />
            <PizzaBlock title="Ассорти" price="470" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
