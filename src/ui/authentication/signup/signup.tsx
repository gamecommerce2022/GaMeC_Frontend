import clsx from 'clsx';
import { useState } from 'react';
import appIcon from '../../../assets/images/app_icon.png';
import CustomTextField from '../component/custom_text';
import axios from 'axios';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const signUp = () => {
    axios
      .post(`http://localhost:5000/api/auth/register`, {
        firstName: firstName,
        lastName: lastName,
        displayName: displayName,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <div className="w-auto mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={signUp}>
        <div className=" flex items-center justify-center">
          <img className="w-1/2 rounded-lg" src={appIcon} alt="" />
        </div>
        <h2 className="text-4xl mt-5 text-white font-bold text-center">SIGN UP</h2>

        <div className="flex flex-row">
          <CustomTextField
            label="First name"
            isPassword={false}
            value={firstName}
            setValue={setFirstName}
          />
          <CustomTextField
            label="Last name"
            value={lastName}
            setValue={setLastName}
            className="ml-2"
          />
        </div>
        <CustomTextField label="Display Name" value={displayName} setValue={setDisplayName} />
        <CustomTextField label="Email Address" value={email} setValue={setEmail} />
        <CustomTextField label="Password" isPassword value={password} setValue={setPassword} />
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            onChange={(e) => {
              setIsAgreed(e.target.checked);
            }}
            value={isAgreed ? 'true' : 'false'}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-white dark:text-gray-300">
            I agree with the{' '}
            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          className={clsx(
            'w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12',
            !email || !password || !displayName || !email || !password || !isAgreed
              ? 'cursor-not-allowed opacity-60'
              : 'cursor-pointer ',
          )}
          onClick={signUp}
          type="submit"
        >
          Sign Up
        </button>

        <div className="flex items-center justify-center">
          <span className="text-gray-400">Already have account?</span>
          <a className="text-white ml-2" href="login">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
