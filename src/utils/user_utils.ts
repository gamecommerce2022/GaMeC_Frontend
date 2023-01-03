import axios from 'axios';
import { User } from '../model/user_model';
import { config } from '../services/config';

export default class UserUtils {
  static getUserRole = async () => {
    let user: any = null;
    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/get-current-user`, {}, config)
      .then((response) => {
        console.log(response.data);

        user = response.data.user;
      });
    if (user === undefined) {
      return null;
    }
    return user!.role;
  };
  static getCurrentUser = async () => {
    let user: User;
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/user/get-current-user`,
      {},
      config,
    );
    const rawUser = data.user;
    user = {
      id: rawUser._id,
      displayName: rawUser.displayName,
      email: rawUser.email,
      firstName: rawUser.firstName,
      lastName: rawUser.lastName,
      isVerified: rawUser.isVerified,
      role: rawUser.role,
      favorites: rawUser.favorites,
    };
    return user;
  };
}
