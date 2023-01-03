import axios from 'axios';
import Cookies from 'universal-cookie';
import { config } from '../config';

export const logOut = async () => {
  const cookies = new Cookies();
  cookies.remove('accessToken');
};

export const updateUser = async (firstName: string, lastName: string, displayName: string) => {
  let message;
  let statusCode;
  console.log(firstName, lastName, displayName);

  await axios
    .patch(
      `${process.env.REACT_APP_API_URL}/api/user/update-me`,
      {
        firstName: firstName,
        lastName: lastName,
        displayName: displayName,
      },
      config,
    )
    .then((res) => {
      message = res.data.message;
      statusCode = res.data.statusCode;
    })
    .catch((err) => {
      console.log(err);

      message = err.response.data.message;
      statusCode = err.response.data.statusCode;
    });
  return { message, statusCode };
};
