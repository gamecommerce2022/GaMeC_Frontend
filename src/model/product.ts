export type Product = {
 id: string
 title: string
 tags: string[]
 price: number
 discount: number
 imageUrl: string
 subImageUrl: string
 developer: string
 languages: string
 platform: string[]
 publisherId: string
 description: string
 longDesc: string[]
 releaseDate: string
 notes?: ProductNotes[]
 items?: { id: number; s: number }[]

 status?: ProductStatus
 similarity?: number
 wishlisted?: boolean
 inCart?: boolean
 purchased?: boolean
}

export type ProductNotes = 'HIGHEST_DISCOUNT' | 'TOP_SELLER' | 'RECENTLY_UPDATED'

export type SortKey = 'releaseDate' | 'price' | 'title' | 'discount'

export type ProductStatus =
 | 'WISHLISTED'
 | 'IN_CART'
 | 'PURCHASED'
 | 'REMOVED_FROM_CART'
 | 'REMOVED_FROM_WISHLIST'