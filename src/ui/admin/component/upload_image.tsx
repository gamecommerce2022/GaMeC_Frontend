import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

export interface UploadImageProp {
  title: string;
  isMulitple: boolean;
  style?: string;
  image: string | null;
  onImage?: (image: string | null) => void;
}

export const UploadCardBig = (props: { onChange: (files: FileList | null) => void }) => {
  return (
    <label htmlFor="file-upload" className="w-[80%] h-[80%] space-y-1 text-center cursor-pointer">
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        className="sr-only"
        accept="image/png, image/jpeg"
        onChange={(event) => props.onChange(event?.target.files)}
      />
      <svg
        className="mx-auto h-[60%] w-[60%] text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex text-sm text-gray-600 items-center justify-center w-full">
        <span className="relative rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none hover:text-indigo-500 w-fit h-fit">
          <span>Upload a file</span>
        </span>
        <span className="pl-1 h-fit">or drag and drop</span>
      </div>
      <span className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</span>
    </label>
  );
};

export const ImageCardBig = (props: { image: string }) => {
  return (
    <div className="w-[80%] h-[80%] flex items-center justify-center mx-auto relative">
      <img
        src={props.image}
        alt={props.image}
        className="w-[80%] h-[80%] object-fill rounded-xl hover:opacity-90"
      />
    </div>
  );
};

export const UploadImageComponent: React.FC<UploadImageProp> = (props: UploadImageProp) => {
  return (
    <form>
      <div className={`${props.style}`}>
        <label className="block text-sm font-medium text-gray-700">{props.title}</label>
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
          <div className="text-center flex justify-center items-center">
            <div className="block" onClick={() => props.onImage!(null)}>
              {props.image !== null ? (
                <ImageCardBig image={props.image} />
              ) : (
                <UploadCardBig
                  onChange={(files) => {
                    if (files && files[0]) {
                      props.onImage!(URL.createObjectURL(files[0]));
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
