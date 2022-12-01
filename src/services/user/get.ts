import axios from "axios";
import { User } from "../../model/user_model";
import { userUrl } from "../url";

export const get : (page: number, perPage: number, filter?: string|null, order?: string|null, query?: string|null) => Promise<User[]> = async (page: number, perPage: number, filter?: string|null, order?: string|null, query?:string|null) => {
    let rawUsers= [];
    let filterText= '';
    if(filter !== undefined && order !== undefined){
        filterText=`&sort=${filter}&order=${order}`;
    }
    let queryText = '';
    if(query !== undefined){
        queryText=`&q=${query}`;
    }

    let response: any = await axios.get(`${userUrl}?page=${page}&perPage=${perPage}${filterText}${queryText}`);
    rawUsers = response.data.users;
    let users : User[] = []
    for(let i = 0; i < rawUsers.length; i++){
        let user: User = {
            _id: rawUsers[i]._id,
            address: rawUsers[i].address,
            name: rawUsers[i].name,
            email: rawUsers[i].email,            
        };  
        users.push(user);
    }
    return users;
}

export const getTotalPage: (perPage: number, query?: string) => Promise<number> = async (perPage: number, query?:string) => {
    let total = 0;
    let queryText = '';
    if(query !== undefined){
        queryText=`?q=${query}`;
    }

    let response: any = await axios.get(`${userUrl}/length${queryText}`);
    total = response.data.length / perPage;
    return total;
}

export const getProductById: (id: string) => Promise<User> = async (id: string) => {
    let rawUser;
    let response: any = await axios.get(`${userUrl}/get/${id}`);
    rawUser = response.data.user;
    let user: User = {
        _id: rawUser._id,
        address: rawUser.address,
        name: rawUser.name,
        email: rawUser.email, 
           
    };  
    return user;
}