import { useState } from 'react';
import * as ReportService from '../../../services/info/report';

export const ContactPage = () => {
  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [errorUserName, setErrorUserName] = useState<string>();
  const [errorEmail, setErrorEmail] = useState<string>();
  const [errorDescription, setErrorDescription] = useState<string>();
  const [success, setSuccess] = useState(false);

  async function submit() {
    let count = 0;
    if (userName === '' || userName === undefined || userName === null) {
      setErrorUserName('Invalid Username');
      count++;
    }
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('Invalid Email');
      count++;
    }
    if (description === '' || description === undefined || description === null) {
      setErrorDescription('Invalid Description');
      count++;
    }
    if (count > 0) {
      return false;
    } else {
      setErrorUserName('');
      setErrorDescription('');
      setErrorEmail('');
      let res = await ReportService.create(userName!, description!, email!, phoneNumber, address);
      if (res) {
        return true;
      } else {
        return false;
      }
    }
  }
  return (
    <div className="w-full flex items-center justify-center my-12 bg-black">
      <div className="rounded lg:px-28 px-8 bg-black">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-100">
          Contact Us Here
        </p>
        <div className="md:flex items-center mt-12">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-200">Name</label>
            <input
              tabIndex={0}
              arial-label="Please input name"
              type="name"
              className="text-base leading-none text-gray-100 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-800 border rounded border-gray-700 placeholder-gray-300"
              placeholder="Please input  name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {errorUserName !== undefined && errorUserName !== '' ? (
              <p className="text-base leading-3 text-red-500 mt-4">{errorUserName}</p>
            ) : null}
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-100">
              Email Address
            </label>
            <input
              tabIndex={0}
              arial-label="Please input email address"
              type="name"
              className="text-base leading-none text-gray-100 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-800 border rounded border-gray-700 placeholder-gray-400"
              placeholder="Please input email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errorEmail !== undefined && errorEmail !== '' ? (
              <p className="text-base leading-3 text-red-500 mt-4">{errorEmail}</p>
            ) : null}
          </div>
        </div>
        <div className="md:flex items-center mt-8">
          <div className="md:w-72 flex flex-col">
            <label className="text-base font-semibold leading-none text-gray-100">Address</label>
            <input
              tabIndex={0}
              arial-label="Please input company name"
              type="name"
              className="text-base leading-none text-gray-100 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-800 border rounded border-gray-700 placeholder-gray-300 "
              placeholder="Please input address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="text-base font-semibold leading-none text-gray-100">
              Phone Number
            </label>
            <input
              tabIndex={0}
              arial-label="Please input country name"
              type="name"
              className="text-base leading-none text-gray-100 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-800 border rounded border-gray-700 placeholder-gray-400"
              placeholder="Please input phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-100">Message</label>
            <textarea
              tabIndex={0}
              aria-label="leave a message"
              className="h-36 text-base leading-none text-gray-100 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-800 border rounded border-gray-700 placeholder-gray-300 resize-none"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            {errorDescription !== undefined && errorDescription !== '' ? (
              <p className="text-base leading-3 text-red-500 mt-4">{errorDescription}</p>
            ) : null}
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
            onClick={async () => {
              let res = await submit();
              if (res === true) {
                setSuccess(true);
              }
            }}
          >
            SUBMIT
          </button>
        </div>
        {success === true ? (
          <p className="text-xs leading-3 text-green-500 mt-4">
            Thanks for contact with us about your experince
          </p>
        ) : null}
      </div>
    </div>
  );
};
