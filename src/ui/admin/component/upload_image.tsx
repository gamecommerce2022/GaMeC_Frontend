import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";


export interface UploadImageProp {
    title: string;
    isMulitple: boolean;
    style?: string;
    image?: string;
    images?: string[];
}

export const UploadCardSmall = (props: { onChange: React.ChangeEventHandler<HTMLInputElement> }) => {
    return (<label htmlFor="file-upload" className='w-[80%] h-[80%] space-y-1 text-center cursor-pointer'>
    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/png, image/jpeg" onChange={props.onChange} />
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
        <span
            className="relative rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none hover:text-indigo-500 w-fit h-fit"
        >
            <span>Upload a file</span>

        </span>
        <span className="pl-1 h-fit">or drag and drop</span>
    </div>
    <span className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</span>
</label>)
}

export const ImageCardSmall = (props: {image: string}) => {
    return (<div className='w-[200px] h-[160px] p-2 flex items-center content-between gap-y-2'>
        <img src={props.image} alt={props.image} className="w-full h-full object-fill rounded" />
    </div>)
}

export const UploadCardBig = (props: { onChange: React.ChangeEventHandler<HTMLInputElement>; multiple?:boolean}) => {
    return (<label htmlFor="file-upload" className='w-[80%] h-[80%] space-y-1 text-center cursor-pointer'>
        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/png, image/jpeg" onChange={props.onChange} multiple={props.multiple}/>
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
            <span
                className="relative rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none hover:text-indigo-500 w-fit h-fit"
            >
                <span>Upload a file</span>

            </span>
            <span className="pl-1 h-fit">or drag and drop</span>
        </div>
        <span className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</span>
    </label>
    )
}

export const ImageCardBig = (props: { image: string, onClick: React.MouseEventHandler<HTMLImageElement> }) => {
    return (<div className='w-[80%] h-[80%] flex items-center justify-center mx-auto relative'>
        <img src={props.image} alt={props.image} className="w-[80%] h-[80%] object-fill rounded-xl hover:opacity-90" onClick={props.onClick} />
    </div>)
}

export const UploadImageComponent: React.FC<UploadImageProp> = (props: UploadImageProp) => {
    const [image, setImage] = useState(props.image || "")
    const [images, setImages] = useState<any[]>(props.images || [])

    return (<div className={`${props.style}`}>
        <label className="block text-sm font-medium text-gray-700">{props.title}</label>
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="text-center flex justify-center items-center">
                {props.isMulitple === true ?  <div className={`${images.length === 0 ? 'flex items-center justify-center' : 'grid grid-cols-6 gap-1'} `} onClick={() => { setImages([]) }}>
                        {images.length === 0 ? <UploadCardBig multiple={true} onChange={(event) => {
                            if(event.target.files){
                                console.log(event.target.files.length)
                                let strFiles: string[] = []
                                for(let i = 0; i < event.target.files.length; i++){
                                    if(event.target.files[i]){
                                        console.log(i)
                                        let strImg: string = URL.createObjectURL(event.target.files[i]) + " "   
                                        strFiles.push(strImg)
                                    }
                                }
                                setImages(strFiles)
                            }
                        }} /> : (images.map((item) => {
                            return <ImageCardSmall image={item}/>
                            
                        }))}
                    </div> :
                    <div className="block">
                        {image ? <ImageCardBig image={image} onClick={() => { setImage("") }} /> : <UploadCardBig onChange={(event) => {
                            if (event.target.files && event.target.files[0]) {

                                setImage(URL.createObjectURL(event.target.files[0]))
                            }
                        }} />}


                    </div>}
            </div>
        </div>
    </div>)
}