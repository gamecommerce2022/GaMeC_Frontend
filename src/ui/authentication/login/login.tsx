import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import loginImg from '../../../assets/images/app_icon.png';
import CustomTextField from '../component/custom_text';

const LoginPage = () => {
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');

  const signIn=()=>{
    axios.post(`http://localhost:5000/api/auth/login`,
      {email:currentEmail,
      password:currentPassword})
      .then((res)=>{
      console.log(res.data)
    })
  }
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

        <div className="flex justify-between items-center text-gray-400 py-2">
          <p className="flex items-center ">
            <input className="mr-2 " type="checkbox" />
            Remember Me
          </p>
          <a target="_blank" href="forgot-password">
            Forgot Password
          </a>
        </div>

        {/* <button className="w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12 cursor-not-allowed opacity-60">
          Sign In
        </button> */}
        <button
          onClick={signIn}
          className={clsx(
            'w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12',
            !currentEmail || !currentPassword ? 'cursor-not-allowed opacity-60' : 'cursor-pointer ',
          )}
        >
          Sign In
        </button>

        <div className="flex items-center justify-center">
          <span className="text-gray-400">Don't have an account?</span>
          <a target="_blank" className="text-white ml-2" href="sign-up">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
