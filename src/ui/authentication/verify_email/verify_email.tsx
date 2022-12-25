import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FreeSolidIcon from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const VerifyEmailPage = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  useEffect(() => {
    const verificationToken = async () => {
      const email = window.location.pathname.split('/')[2] as string;
      const token = window.location.pathname.split('/')[3] as string;
      console.log(email);
      console.log(token);
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/verify/${email}/${token}`)
        .then((response) => {
          console.log(response.data.status);
          if (response.data.status === 'okay') setIsSuccess(true);
          else {
            setIsSuccess(false);
          }
        });
    };
    verificationToken();
  }, []);

  return isSuccess ? <SuccessComponent /> : <FailedComponent />;
};

const SuccessComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-black min-w-screen">
      <div className="max-w-xl p-8 text-center text-white bg-gray-900 lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 className="text-2xl">SUCCESS</h3>
        <FontAwesomeIcon
          className="hover:animate-pulse"
          icon={FreeSolidIcon.faCheckCircle}
          color="#14E317"
          size="5x"
        />
        <p>Your account is now verified and ready to go</p>
        <div className="mt-4">You can now close this window</div>
      </div>
    </div>
  );
};

const FailedComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-black min-w-screen">
      <div className="max-w-xl p-8 text-center text-white bg-gray-900 lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 className="text-2xl">Error</h3>
        <FontAwesomeIcon
          className="hover:animate-pulse"
          icon={FreeSolidIcon.faCircleXmark}
          color="#FF0303"
          size="5x"
        />
        <p>The token is invalid or expired</p>
      </div>
    </div>
  );
};
