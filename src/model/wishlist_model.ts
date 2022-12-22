import { Product } from "./product_model"

export interface IWishlist {
    id: string
    product: Product
    date: string
}

export type WishlistState = {
    wishlists: IWishlist[]
}

export type WishlistAction = {
    type: string
    wishlist: IWishlist 
}

export type WishlistDispatchType = (args: WishlistAction) => WishlistAction