import React, { useState } from 'react'

function Categories({value, onClickCategory}) {
    const listCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
   

    return (
        <div className="categories">
            <ul>
                {listCategories.map((categoryName, i) => (

                    <li
                        key={i}
                        onClick={() => onClickCategory(i)}
                        className={value === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories