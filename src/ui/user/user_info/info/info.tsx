import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonComponent, TextFieldComponent } from '../component';
import * as UserService from '../../../../services/user/user';
import { toast, ToastContainer } from 'react-toastify';

export const UserInfoPage = () => {
  const [isUpdatingInfo, setIsUpdatingInfo] = useState<boolean>(false);
  const [firstName, setFirstName] = useState('Nguyen Van');
  const [lastName, setLastName] = useState('A');
  const [email, setEmail] = useState('abc@gmail.com');
  const [displayName, setDisplayName] = useState('abc123');
  const [id, setId] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      UserService.getCurrentUser(navigate).then((user) => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setDisplayName(user.displayName);
        setId(user._id);
      });
    }, 0);
  }, []);

  async function updateUser() {
    const result = await UserService.updateUser(firstName, lastName, displayName);
    console.log(result);
    if (result.statusCode === 200) {
      toast.success(result.message, { theme: 'dark' });
    } else {
      toast.error(result.message, { theme: 'dark' });
    }
  }

  async function logOut() {
    UserService.logOut();
  }

  return (
    <div className="flex flex-col items-center justify-center my-36">
      <ToastContainer />
      <div className="text-white text-2xl mb-16">USER PROFILE</div>
      <div className="grid grid-cols-2 gap-12 mb-16">
        <TextFieldComponent
          id="firstName"
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e: any) => {
            setFirstName(e.target.value);
          }}
        />
        <TextFieldComponent
          id="lastName"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
        />
        <TextFieldComponent
          id="displayName"
          label="Display Name"
          type="text"
          value={displayName}
          onChange={(e: any) => {
            setDisplayName(e.target.value);
          }}
        />
        <TextFieldComponent
          id="email"
          label="Email"
          type="email"
          value={email}
          disabled
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row gap-x-4">
        <ButtonComponent
          id="history"
          title="History"
          className="bg-orange-500 active:bg-orange-700"
          onClick={() => {
            navigate('/user/history');
          }}
        />
        <ButtonComponent
          id="update"
          title="Update"
          isLoading={isUpdatingInfo}
          className="bg-blue-500 active:bg-blue-700"
          onClick={async () => {
            setIsUpdatingInfo(true);
            updateUser();
            setIsUpdatingInfo(false);
          }}
        />
        <ButtonComponent
          id="log-out"
          title="Log Out"
          className="bg-red-500 active:bg-red-700"
          onClick={async () => {
            await logOut();
            navigate('/signin', { replace: true });
          }}
        />
      </div>
    </div>
  );
};
