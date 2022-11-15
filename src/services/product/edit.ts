import axios from "axios";
import { Game } from "../../model/product_model";
import { productUrl } from "../url";

export const editGame : (game: Game) => Promise<boolean> = async (game: Game) => {
    let res = await axios.put(`${productUrl}/${game._id}`, game);
    let code = res.data.code;
    if(code === 200){
        return true;
    } else {
        return false;
    }
}