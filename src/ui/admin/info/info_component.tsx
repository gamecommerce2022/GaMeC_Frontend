/* eslint-disable react-hooks/exhaustive-deps */
import { HomeIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import { BreadCrumbComponent } from '../component/breadcrumb';
import * as ProfileService from '../../../services/info/profile';
import { useEffect, useState } from 'react';

export const InfoComponent = () => {
  const [slogan, setSlogan] = useState('');
  const [description, setDescription] = useState('');
  let beforeSlogan: string;
  let beforeDescription: string;
  const [id, setId] = useState('');

  useEffect(() => {
    try {
      setTimeout(async () => {
        getProfile();
      }, 0);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function getProfile() {
    ProfileService.get().then((response) => {
      beforeSlogan = response.slogan || '';
      beforeDescription = response.description || '';
      setSlogan(response.slogan || '');
      setDescription(response.description || '');
      setId(response.id || '');
    });
  }

  async function updateProfile() {
    let res = await ProfileService.update(id, slogan, description);
    return res;
  }

  return (
    <div>
      <BreadCrumbComponent
        key="bread-crumb-component-key"
        list={[
          { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
          { name: 'About', icon: <HomeModernIcon className="w-4 h-4" /> },
        ]}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-4 mt-8 flex-col">
          <div className="text-black text-xl">Slogan</div>
          <input
            type="text"
            className="rounded w-[700px]"
            value={slogan}
            onChange={(e) => {
              setSlogan(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-4 mt-8 flex-col">
          <div className="text-black text-xl">Description</div>
          <textarea
            className="rounded w-[700px] h-[300px]"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row gap-4 mt-8">
          <button
            className="w-max h-max bg-blue-500 text-white text-xl rounded p-4 hover:bg-blue-300 active:bg-blue-700"
            onClick={() => {
              setDescription(beforeDescription);
              setSlogan(beforeSlogan);
            }}
          >
            Cancel
          </button>
          <button
            className="w-max h-max bg-red-500 text-white text-xl rounded p-4 hover:bg-red-300 active:bg-red-700"
            onClick={() => {
              beforeDescription = description;
              beforeSlogan = slogan;
              updateProfile();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
