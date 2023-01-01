import Cookies from "universal-cookie";

const cookies = new Cookies()
export const token = cookies.get('accessToken')
export const config = {
    headers: { Authorization: `Bearer ${token}` }
};

