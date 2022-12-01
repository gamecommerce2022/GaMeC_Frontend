import axios from "axios";
import { News } from "../../model/news_model";
import { newsUrl } from "../url";

export const add : (news: News) => Promise<string | null> = async (news: News) => {
    let res = await axios.post(`${newsUrl}`, news);
    console.log(res)
    let code = res.data.code;
    if(code === 200){
        return res.data.id;
    } else {
        return null;
    }
}