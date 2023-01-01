import axios from "axios";
import { config } from "../config";
import Cookies from "universal-cookie";
import { productUrl } from "../url";

const cookies = new Cookies()
const token = cookies.get('accessToken')


export const deleteGame : (id: string) => Promise<boolean> = async (id: string) => {
    let res = await axios.delete(`${productUrl}/${id}`, config);
    let code = res.data.code;
    if(code === 200){
        return true;
    } else {
        return false;
    }
}