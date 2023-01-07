import axios from 'axios';
import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';
import { User } from '../../model/user_model';
import { config, token } from '../config';
import { userUrl } from '../url';

export const get: () => Promise<User[]> = async () => {
  let rawUsers = [];

  let response: any = await axios.get(`${userUrl}/get`, config);
  rawUsers = response.data.users;
  let users: User[] = [];
  for (let i = 0; i < rawUsers.length; i++) {
    let user: User = {
      id: rawUsers[i]._id,
      firstName: rawUsers[i].firstName,
      lastName: rawUsers[i].lastName,
      displayName: rawUsers[i].displayName,
      favorites: rawUsers[i].favorites,
      email: rawUsers[i].email,
      isVerified: rawUsers[i].isVerified,
      role: rawUsers[i].role,
    };
    users.push(user);
  }
  return users;
};
export const getUserById = async (id: string) => {
  let response = await axios.get(`${userUrl}/get/${id}`, config);

  let rawUser = response.data.user;

  let user: User = {
    id: rawUser._id,
    firstName: rawUser.firstName,
    lastName: rawUser.lastName,
    displayName: rawUser.displayName,
    email: rawUser.email,
    role: rawUser.role,
    isVerified: rawUser.isVerified,
  };
  return user;
};
export const getProductById: (id: string) => Promise<User> = async (id: string) => {
  let rawUser;
  let response: any = await axios.get(`${userUrl}/get/${id}`);
  rawUser = response.data.user;
  let user: User = {
    id: rawUser._id,
    firstName: rawUser.firstName,
    lastName: rawUser.lastName,
    displayName: rawUser.displayName,
    favorites: rawUser.favorites,
    email: rawUser.email,
    isVerified: rawUser.isVerified,
    role: rawUser.role,
  };
  return user;
};

export const getCurrentUser = async (navigation: NavigateFunction) => {
  const token = Cookies.get('accessToken');
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  if (token === undefined) {
    navigation('/signin');
    return;
  }
  let res = await axios.post(`${userUrl}/get-current-user`, {}, config);
  console.log(res.data.user);
  return res.data.user;
};
