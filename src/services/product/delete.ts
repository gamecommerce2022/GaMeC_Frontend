import axios from "axios";
import { productUrl } from "../url";

export const deleteGame : (id: string) => Promise<boolean> = async (id: string) => {
    let res = await axios.delete(`${productUrl}/${id}`);
    let code = res.data.code;
    if(code === 200){
        return true;
    } else {
        return false;
    }
}