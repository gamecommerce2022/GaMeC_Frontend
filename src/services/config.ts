import Cookies from 'js-cookie';

export const token = Cookies.get('accessToken');

const getToken = () => Cookies.get('accessToken');
export const config = {
  headers: { Authorization: `Bearer ${getToken()}` },
};
