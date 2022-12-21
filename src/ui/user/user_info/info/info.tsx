import { useState } from 'react';
import { ButtonComponent, TextFieldComponent } from '../component';

export const UserInfoPage = () => {
  const [firstName, setFirstName] = useState('Nguyen Van');
  const [lastName, setLastName] = useState('A');
  const [email, setEmail] = useState('abc@gmail.com');
  const [displayName, setDisplayName] = useState('abc123');

  function updateUser() {}
  return (
    <div className="flex flex-col items-center justify-center my-36">
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
      <ButtonComponent
        id="update"
        title="Update"
        className="bg-blue-500 active:bg-blue-700"
        onClick={() => {
          updateUser();
        }}
      />
    </div>
  );
};
