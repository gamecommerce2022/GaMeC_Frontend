import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import appIcon from '../../../assets/images/app_icon.png';

import CustomTextField from '../component/custom_text';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { CircularProgressIndicator } from '../../../utils/circular_progress_indicator';
import UserUtils from '../../../utils/user_utils';

const LoginPage = () => {
  useEffect(() => {
    const getCurrentUser = async () => {
      const userRole = await UserUtils.getUserRole();
      //user is logged in
      if (userRole !== null) {
        navigate(`/${userRole}`);
      }
    };
    getCurrentUser();
  }, []);

  const cookies = new Cookies();
  const navigate = useNavigate();
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signIn = async () => {
    if (currentPassword === '' || currentEmail === '') {
      toast.error("Email or Password can't not empty.", { theme: 'dark' });
      return;
    }
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!regex.test(currentEmail)) {
      toast.error('Invalid Email', { theme: 'dark' });
      return;
    }

    console.log('signing in...');

    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        email: currentEmail,
        password: currentPassword,
      })
      .then(async (res: any) => {
        console.log(res);

        const user = res.data.data.user;
        const accessToken = res.data.accessToken;
        cookies.set('accessToken', accessToken);
        toast.success(res.data.message, { theme: 'dark' });
        if (user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/user', { replace: true });
        }
        setIsLoading(false);
      })
      .catch((res: any) => {
        console.log(res.response.data.message);
        toast.error(errorMessage, { theme: 'dark' });
        setErrorMessage(res.response.data.message);
        setIsLoading(false);
      });
  };
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <div className=" flex items-center justify-center">
          <img className="w-1/2 rounded-lg" src={appIcon} alt="" />
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
          {isLoading ? <CircularProgressIndicator /> : <span>Sign In</span>}
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
