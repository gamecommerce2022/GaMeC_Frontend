import clsx from 'clsx';
import { useState } from 'react';
import appIcon from '../../../assets/images/app_icon.png';
import { ToastContainer, toast } from 'react-toastify';
import CustomTextField from '../component/custom_text';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { CircularProgressIndicator } from '../../../utils/circular_progress_indicator';

const SignUpPage = () => {
  const navigate = useNavigate();
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
        console.log(res);
        toast.success(res.data.message, { theme: 'dark' });

        const accessToken = res.data.accessToken;
        new Cookies().set('accessToken', accessToken);
        setIsLoading(false);
        navigate('/');
      })
      .catch((res: any) => {
        console.log(res.response.data.message);
        toast.error(res.response.data.message, { theme: 'dark' });
        setIsLoading(false);
      });
  };
  return (
    <div className="bg-black h-full  flex flex-col justify-center items-center">
      <ToastContainer />
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
          {isLoading ? <CircularProgressIndicator /> : <span>Sign Up</span>}
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
