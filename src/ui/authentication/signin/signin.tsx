import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';

import CustomTextField from '../component/custom_text';
import Cookies from 'universal-cookie';

const LoginPage = () => {
  const cookies = new Cookies();
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signIn = async () => {
    console.log('signing in...');

    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        email: currentEmail,
        password: currentPassword,
      })
      .then(async (res: any) => {
        console.log(res.data);
        console.log(res.data.accessToken);

        const accessToken = res.data.accessToken;

        cookies.set('accessToken', accessToken);
        setIsLoading(false);
      })
      .catch((res: any) => {
        console.log(res.response.data.message);
        setErrorMessage(res.response.data.message);
        setIsError(true);
        setIsLoading(false);
      });
  };
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <div className=" flex items-center justify-center">
          <img className="w-1/2 rounded-lg" src={'src/assets/images/app_icon.png'} alt="" />
        </div>
        <h2 className="text-4xl mt-5 text-white font-bold text-center">SIGN IN</h2>
        <CustomTextField
          label="Email"
          isPassword={false}
          value={currentEmail}
          setValue={setCurrentEmail}
        />

        <CustomTextField
          label="Password"
          isPassword={true}
          value={currentPassword}
          setValue={setCurrentPassword}
        />
        {isError ? <div className="text-red-600">{errorMessage}</div> : null}
        <div className="flex justify-between items-center text-gray-400 py-2">
          <p className="flex items-center ">
            <input className="mr-2 " type="checkbox" />
            Remember Me
          </p>
          <a target="_blank" href="forgot-password">
            Forgot Password
          </a>
        </div>

        <button
          onClick={signIn}
          className={clsx(
            'w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12',
            !currentEmail || !currentPassword ? 'cursor-not-allowed opacity-60' : 'cursor-pointer ',
          )}
        >
          {isLoading ? (
            <svg
              className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            <span>Sign In</span>
          )}
        </button>

        <div className="flex items-center justify-center">
          <span className="text-gray-400">Don't have an account?</span>
          <a className="text-white ml-2" href="sign-up">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
