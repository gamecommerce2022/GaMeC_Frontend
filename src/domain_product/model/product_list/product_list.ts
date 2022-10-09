export interface ProductPageList {
 count: number
 next: string
 previous: string
 results: Product[]
 seo_title: string
 seo_description: string
 seo_keywords: string
 description: string
}

export interface Product {
 id: number
 slug: string
 name: string
 released: string
 tba: boolean
 background_image: string
 rating: number
 rating_top: number
 ratings: Rating[]
 ratings_count: number
 reviews_text_count: number
 added: number
 added_by_status: AddedByStatus
 metacritic: number
 playtime: number
 suggestions_count: number
 updated: string
 reviews_count: number
 platforms: Platform[]
 genres: Genre[]
 stores: Store[]
 clip: any
 tags: Tag[]
 short_screenshots: ShortScreenshot[]
}

export interface Rating {
 id: number
 title: string
 count: number
 percent: number
}

export interface AddedByStatus {
 yet: number
 owned: number
 beaten: number
 toplay: number
 dropped: number
 playing: number
}

export interface Platform {
 platform: DetailPlatform
 released_at?: string
 requirements_en?: RequirementData
}

export interface DetailPlatform {
 id: number
 name: string
 slug: string
 image: any
 year_end: any
 year_start?: number
 games_count: number
 image_background: string
}

export interface RequirementData {
 minimum: string
 recommended?: string
}

export interface Genre {
 id: number
 name: string
 slug: string
 games_count: number
 image_background: string
}

export interface Store {
 id: number
 store: StoreDetail
}

export interface StoreDetail {
 id: number
 name: string
 slug: string
 domain: string
 games_count: number
 image_background: string
}

export interface Tag {
 id: number
 name: string
 slug: string
 language: string
 games_count: number
 image_background: string
}

export interface ShortScreenshot {
 id: number
 image: string
}
