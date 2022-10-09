export interface ProductInformation {
 id: number
 slug: string
 name: string
 name_original: string
 description: string
 metacritic: number
 released: string
 tba: boolean
 updated: string
 background_image: string
 background_image_additional: string
 website: string
 rating: number
 rating_top: number
 ratings: Rating[]
 playtime: number
 screenshots_count: number
 movies_count: number
 creators_count: number
 achievements_count: number
 parent_achievements_count: number
 reddit_url: string
 reddit_name: string
 reddit_description: string
 reddit_logo: string
 reddit_count: number
 twitch_count: number
 youtube_count: number
 reviews_text_count: number
 ratings_count: number
 suggestions_count: number
 alternative_names: string[]
 metacritic_url: string
 parents_count: number
 additions_count: number
 game_series_count: number
 user_game: any
 reviews_count: number
 saturated_color: string
 dominant_color: string
 platforms: Platform[]
 stores: Store[]
 developers: Developer[]
 genres: Genre[]
 tags: Tag[]
 publishers: Publisher[]
 clip: any
 description_raw: string
}

export interface Rating {
 id: number
 title: string
 count: number
 percent: number
}

export interface Platform {
 platform: PlatformDetail
 released_at: string
 requirements: Requirements
}

export interface PlatformDetail {
 id: number
 name: string
 slug: string
 image: any
 year_end: any
 year_start?: number
 games_count: number
 image_background: string
}

export interface Requirements {
 minimum?: string
 recommended?: string
}

export interface Store {
 id: number
 url: string
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

export interface Developer {
 id: number
 name: string
 slug: string
 games_count: number
 image_background: string
}

export interface Genre {
 id: number
 name: string
 slug: string
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

export interface Publisher {
 id: number
 name: string
 slug: string
 games_count: number
 image_background: string
}
