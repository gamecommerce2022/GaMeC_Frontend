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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signUp = async () => {
    setIsLoading(true);
    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        firstName: firstName,
        lastName: lastName,
        displayName: displayName,
        email: email,
        password: password,
      })
      .then((res: any) => {
        console.log(res.data);
      });
    setIsLoading(false);
  };
  return (
    <div className="bg-black h-full  flex flex-col justify-center items-center">
      <div className="w-auto mx-auto mt-5 mb-5 bg-gray-900 p-8 px-8 rounded-lg" onSubmit={signUp}>
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
            <span>Sign Up</span>
          )}
        </button>

        <div className="flex items-center justify-center">
          <span className="text-gray-400">Already have account?</span>
          <a className="text-white ml-2" href="signin">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
