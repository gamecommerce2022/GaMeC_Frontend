import axios from "axios";
import { Product } from "../../model/product_model";
import { config } from "../cofig";
import { productUrl } from "../url";


export const addGame : (game: Product) => Promise<string | null> = async (game: Product) => {
    let res = await axios.post(`${productUrl}`, game, config);
    console.log(res)
    let code = res.data.code;
    if(code === 200){
        return res.data.id;
    } else {
        return null;
    }
}