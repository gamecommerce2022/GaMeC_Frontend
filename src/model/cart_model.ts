import { Product } from "./product_model"

export interface ICart {
    id: string
    product: Product    
}

export type CartState = {    
    carts: ICart[]
    total: number
    shipping: number
}

export type CartAction = {
    type: string
    cart: ICart
}

export type CartDispatchType = (args: CartAction) => CartAction