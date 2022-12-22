import { useState } from 'react';

export const ContactPage = () => {
  return (
    <div className="w-full flex items-center justify-center my-12 bg-black">
      <div className="rounded py-12 lg:px-28 px-8 bg-black">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-100">
          Let’s chat and get a quote!
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
            />
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
            />
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
              defaultValue={''}
            />
          </div>
        </div>
        <p className="text-xs leading-3 text-gray-600 mt-4">
          By clicking submit you agree to our terms of service, privacy policy and how we use data
          as stated
        </p>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
