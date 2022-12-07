export type News = {
    _id?:string
    title: string
    shortDescription: string
    category: string
    author?: string
    date: string
    description: string[]
    mainImage: string
}