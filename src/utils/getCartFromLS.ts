import { culcTotalPrice } from "./culcTotalPrice"

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = culcTotalPrice(items)

    return {
        items,
        totalPrice,
    }
}