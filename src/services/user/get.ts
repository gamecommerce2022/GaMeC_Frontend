import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { User } from '../../model/user_model';
import { config, token } from '../config';
import { userUrl } from '../url';

export const get: (
  page: number,
  perPage: number,
  filter?: string | null,
  order?: string | null,
  query?: string | null,
) => Promise<User[]> = async (
  page: number,
  perPage: number,
  filter?: string | null,
  order?: string | null,
  query?: string | null,
) => {
  let rawUsers = [];
  let filterText = '';
  if (filter !== undefined && order !== undefined) {
    filterText = `&sort=${filter}&order=${order}`;
  }
  let queryText = '';
  if (query !== undefined) {
    queryText = `&q=${query}`;
  }

  let response: any = await axios.get(
    `${userUrl}?page=${page}&perPage=${perPage}${filterText}${queryText}`,
  );
  rawUsers = response.data.users;
  let users: User[] = [];
  for (let i = 0; i < rawUsers.length; i++) {
    let user: User = {
      id: rawUsers[i]._id,
      address: rawUsers[i].address,
      firstName: rawUsers[i].name,
      lastName: rawUsers[i].lastName,
      displayName: rawUsers[i].displayName,
      favorites: rawUsers[i].favorites,
      email: rawUsers[i].email,
    };
    users.push(user);
  }
  return users;
};

export const getTotalPage: (perPage: number, query?: string) => Promise<number> = async (
  perPage: number,
  query?: string,
) => {
  let total = 0;
  let queryText = '';
  if (query !== undefined) {
    queryText = `?q=${query}`;
  }

  let response: any = await axios.get(`${userUrl}/length${queryText}`);
  total = response.data.length / perPage;
  return total;
};

export const getProductById: (id: string) => Promise<User> = async (id: string) => {
  let rawUser;
  let response: any = await axios.get(`${userUrl}/get/${id}`);
  rawUser = response.data.user;
  let user: User = {
    id: rawUser._id,
    address: rawUser.address,
    firstName: rawUser.name,
    lastName: rawUser.lastName,
    displayName: rawUser.displayName,
    favorites: rawUser.favorites,
    email: rawUser.email,
  };
  return user;
};

export const getCurrentUser = async (navigation: NavigateFunction) => {
  if (token === undefined) {
    navigation('/signin')
    return
  } 
  let res = await axios.get(`${userUrl}/get-current-user`, config)
  console.log(res.data.user)
  return res.data.user
}
