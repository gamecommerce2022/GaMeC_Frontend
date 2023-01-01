import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { Comment } from "../../model/comment";
import { commentUrl } from "../url";

export const addComment = async (idProduct: string, authorId: string, authorName: string, content: string, navigate: NavigateFunction) => {
    try {
        let response = await axios.post(`${commentUrl}`,{idProduct, authorId, authorName, content});
        if(response){
            return navigate(0)
        } else {
            return 
        }

    } catch(error) {
        console.log(error)
    }
}

export const getCommentByUserId = async (userId: string) => {
    try {
        let response : any = await axios.get(`${commentUrl}/getUser/${userId}`);
        if(response){
            let rawComments = response.data.comments;     
            let comments = []
            for(let i = 0; i < rawComments.length; i++){
                let comment : Comment = {
                    idProduct: rawComments[i].idProduct,
                    authorId: rawComments[i].authorId,
                    authorName: rawComments[i].authorName,
                    content: rawComments[i].content,
                    date: rawComments[i].date,
                }
                comments.push(comment)
            }
            return comments
        }
        else {        
            return []
        }
    } catch (error) {
        console.log(error)
    }
}

export const getCommentByProduct = async (productId: string) => {
    try {
        let response : any = await axios.get(`${commentUrl}/getProduct/${productId}`);
        if(response){
            let rawComments = response.data.comments;     
            let comments = []
            for(let i = 0; i < rawComments.length; i++){
                let comment : Comment = {
                    idProduct: rawComments[i].idProduct,
                    authorId: rawComments[i].authorId,
                    authorName: rawComments[i].authorName,
                    content: rawComments[i].content,
                    date: rawComments[i].date,
                }
                comments.push(comment)
            }
            return comments
        }
        else {        
            return []
        }
    } catch (error) {
        console.log(error)
    }
}