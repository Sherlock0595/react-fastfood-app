import React, { useState } from 'react'

function Categories() {
    const listCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const [activeIndex, setActiveIndex] = useState(0)

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                {listCategories.map((value, i) => (

                    <li
                        key={i}
                        onClick={() => onClickCategory(i)}
                        className={activeIndex === i ? 'active' : ''}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories