import axios from "axios";
import { newsUrl } from "../url";

export const deleteNews : (id: string) => Promise<boolean> = async (id: string) => {
    let res = await axios.delete(`${newsUrl}/${id}`);
    let code = res.data.code;
    if(code === 200){
        return true;
    } else {
        return false;
    }
}