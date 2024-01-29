import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ICartItem, addItem, selectCartItemById } from "../../redux/features/cartSlice"
import { IPizzaItem } from "../../redux/features/pizzaSlice"

const typesNames = ["тонкое", "традиционное"]

// type IpizzaBlock = {
//     id: string,
//     title: string,
//     price: number,
//     imageUrl: string,
//     types: number[],
//     sizes: number[],
// }

const PizzaBlock: React.FC<IPizzaItem> = ({ id, title, price, imageUrl, types, sizes }) => {

    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItemById(id))
    const addedCount = cartItem ? cartItem.count : 0;
    const [activeType, setActiveType] = useState(0)
    const [sizeChange, setSizeChange] = useState(0)

    const onClickTypes = (index: number) => {
        setActiveType(index)
    }

    const onClickSizes = (index: number) => {
        setSizeChange(index)
    }

    const onClickAdd = () => {
        const item: ICartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typesNames[activeType],
            size: sizes[sizeChange],
            count: 0
        }
        dispatch(addItem(item))
    }

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {types.map((typeId) => (
                            <li
                                key={typeId}
                                onClick={() => onClickTypes(typeId)}
                                className={activeType === typeId ? 'active' : ""}>
                                {typesNames[typeId]}

                            </li>
                        ))}
                    </ul>
                    <ul>
                        {sizes.map((size, i) => (
                            <li
                                key={i}
                                onClick={() => onClickSizes(i)}
                                className={sizeChange === i ? 'active' : ""}>{size} см.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {price} ₽</div>
                    <button
                        onClick={onClickAdd}
                        className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PizzaBlock