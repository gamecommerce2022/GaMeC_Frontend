import axios from "axios";
import { Game } from "../../model/product_model";
import { productUrl } from "../url";

export const get : (page: number, perPage: number, filter?: number|null,  query?: string|null) => Promise<Game[]> = async (page: number, perPage: number, filter?: number|null, query?:string|null) => {
    let rawProducts = [];
    let filterText= '';
    if(filter !== undefined ){
        filterText=`&sort=${filter}`;
    }
    let queryText = '';
    if(query !== undefined){
        queryText=`&q=${query}`;
    }

    let response: any = await axios.get(`${productUrl}?page=${page}&perPage=${perPage}${filterText}${queryText}`);
    rawProducts = response.data.products;
    let products : Game[] = []
    for(let i = 0; i < rawProducts.length; i++){
        let product: Game = {
            _id: rawProducts[i]._id,
            title: rawProducts[i].title,
            type: (rawProducts[i].type ?? []),
            releaseDate: rawProducts[i].releaseDate,
            platform: rawProducts[i].platform,
            total: rawProducts[i].total,
            price:parseFloat(rawProducts[i].price ?? "0"),
            description: rawProducts[i].description,
            maxPlayer:parseInt(rawProducts[i].maxPlayer ?? "0"),
            discount: parseFloat(rawProducts[i].discount ?? "0.0"),
            status: rawProducts[i].status,
            tags: (rawProducts[i].tags ?? []),
            note: rawProducts[i].note,
            imageList: rawProducts[i].imageList,
            videoList: rawProducts[i].videoList,
            shortDescription: rawProducts[i].shortDescription,
        };  
        products.push(product);
    }
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

export const getProductById: (id: string) => Promise<Game> = async (id: string) => {
    let rawProduct;
    let response: any = await axios.get(`${productUrl}/get/${id}`);
    rawProduct = response.data.product;
    let product: Game = {
        _id: rawProduct._id,
            title: rawProduct.title,
            type: (rawProduct.type ?? []),
            releaseDate: rawProduct.releaseDate,
            platform: rawProduct.platform,
            total: rawProduct.total,
            price:parseFloat(rawProduct.price ?? "0"),
            description: rawProduct.description,
            maxPlayer:parseInt(rawProduct.maxPlayer ?? "0"),
            discount: parseFloat(rawProduct.discount ?? "0.0"),
            status: rawProduct.status,
            tags: (rawProduct.tags ?? []),
            note: rawProduct.note,
            imageList: rawProduct.imageList,
            videoList: rawProduct.videoList,
            shortDescription: rawProduct.shortDescription,
    };  
    return product;
}