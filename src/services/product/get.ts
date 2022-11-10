import axios from "axios";
import { Product } from "../../model/product_model";
import { productUrl } from "../url";

export const get : (page: number, perPage: number, filter?: string, order?: string, query?: string) => Promise<Product[]> = async (page: number, perPage: number, filter?: string, order?: string, query?:string) => {
    let products : Product[] = [];
    let filterText= '';
    if(filter !== undefined && order !== undefined){
        filterText=`&sort=${filter}&order=${order}`;
    }
    let queryText = '';
    if(query !== undefined){
        queryText=`&q=${query}`;
    }

    let response: any = await axios.get(`${productUrl}?page=${page}&perPage=${perPage}${filterText}${queryText}`);
    products = response.data;
    return products;
}

export const getTotalPage: (perPage: number, query?: string) => Promise<number> = async (perPage: number, query?:string) => {
    let total = 0;
    let queryText = '';
    if(query !== undefined){
        queryText=`?q=${query}`;
    }

    let response: any = await axios.get(`${productUrl}/length${queryText}`);
    total = response.data.length / perPage;
    return total;
}