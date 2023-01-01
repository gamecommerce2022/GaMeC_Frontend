import axios from 'axios';
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
}
