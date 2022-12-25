import axios from 'axios';
import clsx from 'clsx';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import appIcon from '../../../assets/images/app_icon.png';

import CustomTextField from '../component/custom_text';
import Cookies from 'universal-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgressIndicator } from '../../../utils/circular_progress_indicator';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
const ResetPasswordPage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const resetPassword = () => {
    setIsLoading(true);
    const resetToken = window.location.pathname.split('/')[2];
    if (newPassword !== confirmPassword) {
      toast.error('Password does not match');
      return;
    }
    axios
      .patch(`${process.env.REACT_APP_API_URL}/api/auth/reset-password/${resetToken}`, {
        password: newPassword,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message, { theme: 'dark' });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, { theme: 'dark' });

        setIsLoading(false);
      });
    console.log('done');
  };
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <ToastContainer />
      <div className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
        <div className=" flex items-center justify-center">
          <img className="w-1/2 rounded-lg" src={appIcon} alt="" />
        </div>
        <h2 className="text-4xl mt-5 text-white font-bold text-center">RESET PASSWORD</h2>
        <CustomTextField
          label="New password"
          isPassword={true}
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomTextField
          label="Confirm your new password"
          isPassword={true}
          value={confirmPassword}
          setValue={setConfirmPassword}
        />

        <button
          onClick={resetPassword}
          className={clsx(
            'w-full my-5 py-2 bg-blue-600 shadow-lg text-white font-semibold rounded-lg h-12',
            !newPassword || !confirmPassword ? 'cursor-not-allowed opacity-60' : 'cursor-pointer ',
          )}
        >
          {isLoading ? <CircularProgressIndicator /> : <span>Reset password</span>}
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
