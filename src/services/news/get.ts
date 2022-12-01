import axios from "axios"
import { News } from "../../model/news_model";
import { newsUrl } from "../url"

export const get : (page: number, perPage: number, filter?: string|null, order?: string|null, query?: string|null) => Promise<News[]> = async (page: number, perPage: number, filter?: string|null, order?: string|null, query?:string|null) => {
    let rawNews = [];
    let filterText= '';
    if(filter !== undefined && order !== undefined){
        filterText=`&sort=${filter}&order=${order}`;
    }
    let queryText = '';
    if(query !== undefined){
        queryText=`&q=${query}`;
    }

    let response: any = await axios.get(`${newsUrl}?page=${page}&perPage=${perPage}${filterText}${queryText}`);
    rawNews = response.data.listNews;
    let newsList : News[] = []
    for(let i = 0; i < rawNews.length; i++){
        let news: News = {
            _id: rawNews[i]._id,
            title: rawNews[i].title,
            type: rawNews[i].type,
            date: rawNews[i].date,
            description: rawNews[i].description,
            shortDescription: rawNews[i].shortDescription,
            author: rawNews[i].author,
            image:rawNews[i].image,
        };  
        newsList.push(news);
    }
    return newsList;
}

export const getTotalPage: (perPage: number, query?: string) => Promise<number> = async (perPage: number, query?:string) => {
    let total = 0;
    let queryText = '';
    if(query !== undefined){
        queryText=`?q=${query}`;
    }

    let response: any = await axios.get(`${newsUrl}/length${queryText}`);
    total = response.data.length / perPage;
    return total;
}

export const getNewsById: (id: string) => Promise<News> = async (id: string) => {
    let rawNews;
    let response: any = await axios.get(`${newsUrl}/get/${id}`);
    rawNews = response.data.news;
    let news: News = {
        _id: rawNews._id,
            title: rawNews.title,
            type: rawNews.type,
            date: rawNews.date,
            description: rawNews.description,
            shortDescription: rawNews.shortDescription,
            author: rawNews.author,
            image:rawNews.image,
    };  
    return news;
}