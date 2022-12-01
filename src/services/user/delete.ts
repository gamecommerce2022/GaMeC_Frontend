import axios from "axios";
import { userUrl } from "../url";

export const deleteUser : (id: string) => Promise<boolean> = async (id: string) => {
    let res = await axios.delete(`${userUrl}/${id}`);
    let code = res.data.code;
    if(code === 200){
        return true;
    } else {
        return false;
    }
}