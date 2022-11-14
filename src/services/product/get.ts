import axios from "axios";
import { Game } from "../../model/product_model";
import { productUrl } from "../url";

export const get : (page: number, perPage: number, filter?: string, order?: string, query?: string) => Promise<Game[]> = async (page: number, perPage: number, filter?: string, order?: string, query?:string) => {
    let rawProducts = [];
    let filterText= '';
    if(filter !== undefined && order !== undefined){
        filterText=`&sort=${filter}&order=${order}`;
    }
    let queryText = '';
    if(query !== undefined){
        queryText=`&q=${query}`;
    }

    let response: any = await axios.get(`${productUrl}?page=${page}&perPage=${perPage}${filterText}${queryText}`);
    rawProducts = response.data;
    let products : Game[] = []
    for(let i = 0; i < rawProducts.length; i++){
        let product: Game = {
            _id: rawProducts[i]._id,
            title: rawProducts[i].title,
            type: (rawProducts[i].type || "").split(','),
            releaseDate: rawProducts[i].release_date,
            platform: rawProducts[i].platform,
            total: rawProducts[i].total,
            priceDefault:parseFloat(rawProducts[i].price_before || "0"),
            priceOffical:parseFloat(rawProducts[i].price_after || "0"),
            imageDefault: rawProducts[i].short_image,
            description: rawProducts[i].description,
            maxPlayer:parseInt(rawProducts[i].max_player || "1"),
            priceDeposit:parseFloat(rawProducts[i].price_desposit || "0"),
            discount: parseFloat(rawProducts[i].discount || "0.0"),
            status: rawProducts[i].status,
            note: rawProducts[i].note,
            imageList: rawProducts[i].image_list,
            videoList: rawProducts[i].videos,
            shortDescription: rawProducts[i].short_description,
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
    rawProduct = response.data;
    let product: Game = {
        _id: rawProduct._id,
        title: rawProduct.title,
        type: (rawProduct.type || "").split(','),
        releaseDate: rawProduct.release_date,
        platform: rawProduct.platform,
        total: rawProduct.total || 0,
        priceDefault:parseFloat(rawProduct.price_before || "0"),
        priceOffical:parseFloat(rawProduct.price_after || "0"),
        imageDefault: rawProduct.short_image,
        description: rawProduct.description,
        maxPlayer:parseInt(rawProduct.max_player || "1"),
        priceDeposit:parseFloat(rawProduct.price_desposit || "0"),
        discount: parseFloat(rawProduct.discount || "0.0"),
        status: rawProduct.status,
        note: rawProduct.note,
        imageList: rawProduct.image_list,
        videoList: rawProduct.videos,
        shortDescription: rawProduct.short_description,
    };  
    return product;
}