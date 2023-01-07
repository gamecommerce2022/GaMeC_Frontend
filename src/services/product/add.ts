import axios from "axios";
import Cookies from "js-cookie";
import { Product } from "../../model/product_model";
import { productUrl } from "../url";

const token = Cookies.get('accessToken')
const config = {
 headers: { Authorization: `Bearer ${token}` }
};



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