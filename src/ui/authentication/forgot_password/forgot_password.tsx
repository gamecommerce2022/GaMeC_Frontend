import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import appIcon from '../../../assets/images/app_icon.png';

import CustomTextField from '../component/custom_text';
import clsx from 'clsx';
import axios from 'axios';
import { CircularProgressIndicator } from '../../../utils/circular_progress_indicator';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sendForgotEmail = async () => {
    if(email === ''){
      toast.error("Email can't not empty.", { theme: 'dark' });
      return
    }
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if(!regex.test(email)){
      toast.error("Invalid Email", { theme: 'dark' });
      return
    }

    console.log('Sending email');
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, { email: email })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        toast.success('Email sent successfully', { theme: 'dark' });
      })
      .catch((err) => {
        console.log(err);
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
        <h2 className="text-4xl mt-5 text-white font-bold text-center">FORGOT PASSWORD</h2>
        <h1 className="text-base text-white ">
          Please enter your email address. You will receive a link guiding you how to create a new
          password via email
        </h1>
        <CustomTextField label="Your email" isPassword={false} value={email} setValue={setEmail} />

        <button
          onClick={sendForgotEmail}
          className={clsx(
            'w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12',
            !email ? 'cursor-not-allowed opacity-60' : 'cursor-pointer ',
          )}
        >
          {isLoading ? <CircularProgressIndicator /> : <span>Reset Password</span>}
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
