import axios from "axios";
import { Product } from "../../model/product_model";
import { productUrl } from "../url";

export const get : (page: number, perPage: number) => Promise<Product[]> = async (page: number, perPage: number) => {
    let products : Product[] = [];
    let response: any = await axios.get(`${productUrl}?page=${page}&perPage=${perPage}`);
    products = response.data;
    return products;
}

export const getTotalPage: (perPage: number) => Promise<number> = async (perPage: number) => {
    let total = 0;
    let response: any = await axios.get(`${productUrl}/length`);
    total = response.data.length / perPage;
    return total;
}