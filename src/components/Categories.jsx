import React, { useState } from 'react'
import { selectFilter, setCategoryId } from '../redux/features/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Categories() {
    const listCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const { categoryId } = useSelector(selectFilter)
    const dispath = useDispatch()

    const onChangeCategory = (id) => {
        dispath(setCategoryId(id));
    }


    return (
        <div className="categories">
            <ul>
                {listCategories.map((categoryName, i) => (

                    <li
                        key={i}
                        onClick={() => onChangeCategory(i)}
                        className={categoryId === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories