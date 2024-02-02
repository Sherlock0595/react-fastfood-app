import { ICartItem } from "../redux/features/cartSlice";

export const culcTotalPrice = (items: ICartItem[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
}