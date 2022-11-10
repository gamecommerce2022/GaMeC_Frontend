import clsx from "clsx";
import { useState } from "react";
import loginImg from "../../../assets/images/app_icon.png";
const LoginPage = () => {
  const [currentEmail, setCurrentEmail] = useState<string>();
  const [currentPassword, setCurrentPassword] = useState<string>();
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <form
        className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        action=""
      >
        <div className=" flex items-center justify-center">
          <img className="w-1/2 rounded-lg" src={loginImg} alt="" />
        </div>
        <h2 className="text-4xl mt-5 text-white font-bold text-center">
          SIGN IN
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => {
              setCurrentEmail(e.target.value);
            }}
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="email"
            value={currentEmail}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
            className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="password"
            value={currentPassword}
          />
        </div>

        <div className="flex justify-between text-gray-400 py-2">
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
          className={clsx(
            "w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12",
            !currentEmail || !currentPassword
              ? "cursor-not-allowed opacity-60"
              : "cursor-pointer "
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
      </form>
    </div>
  );
};

export default LoginPage;
