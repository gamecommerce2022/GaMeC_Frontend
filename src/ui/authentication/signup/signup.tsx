import clsx from "clsx";
import { useState } from "react";
import appIcon from "../../../assets/images/app_icon.png";
import CustomTextField from "../component/custom_text";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [displayName, setDisplayName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <form
        className="w-auto mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        action=""
      >
        <div className=" flex items-center justify-center">
          <img className="w-1/2 rounded-lg" src={appIcon} alt="" />
        </div>
        <h2 className="text-4xl mt-5 text-white font-bold text-center">
          SIGN UP
        </h2>

        <div className="flex flex-row">
          <CustomTextField
            label="Email"
            isPassword={false}
            value={firstName}
            setValue={setFirstName}
          />
          <CustomTextField
            label="Password"
            isPassword
            value={lastName}
            setValue={setLastName}
            className="ml-2"
          />
        </div>
        <CustomTextField
          label="Display Name"
          isPassword
          value={displayName}
          setValue={setDisplayName}
        />
        <CustomTextField
          label="Email Address"
          isPassword
          value={email}
          setValue={setEmail}
        />
        <CustomTextField
          label="Password"
          isPassword
          value={password}
          setValue={setPassword}
        />

        <button
          className={clsx(
            "w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12",
            !email || !password || !displayName || !email || !password
              ? "cursor-not-allowed opacity-60"
              : "cursor-pointer "
          )}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;
