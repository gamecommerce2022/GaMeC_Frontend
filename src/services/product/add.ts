import axios from "axios";
import { Game } from "../../model/product_model";
import { productUrl } from "../url";

export const addGame : (game: Game) => Promise<string | null> = async (game: Game) => {
    let res = await axios.post(`${productUrl}`, game);
    console.log(res)
    let code = res.data.code;
    if(code === 200){
        return res.data.id;
    } else {
        return null;
    }
}