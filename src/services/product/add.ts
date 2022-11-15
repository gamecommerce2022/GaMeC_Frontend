import axios from "axios";
import { Game } from "../../model/product_model";
import { productUrl } from "../url";

export const addGame : (game: Game) => Promise<boolean> = async (game: Game) => {
    let res = await axios.post(`${productUrl}`, game);
    let code = res.data.code;
    if(code === 200){
        return true;
    } else {
        return false;
    }
}