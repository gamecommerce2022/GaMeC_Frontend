/* eslint-disable react-hooks/exhaustive-deps */
import { HomeIcon, NewspaperIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { InputComponent } from '../../component/input';
import * as NewsService from '../../../../services/news/news';
import { UploadListImageComponent } from '../../component/upload_list_image';
import { News } from '../../../../model/news_model';

export const NewsEditComponent: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const [title, setTitle] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [shortDescription, setShortDescription] = useState<string>('');
  const [listImage, setListImage] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');
  const [errorTitle, setErrorTitle] = useState<string>();
  const [errorType, setErrorType] = useState<string>();
  const [errorShortDescription, setErrorShortDescription] = useState<string>();
  const [, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    try {
      NewsService.getNewsById(newsId || '').then((response) => {
        let images: string[] = [];
        console.log(response);
        images.push(response.mainImage);
        let descriptions = response.description !== null ? response.description.join('\n') : '';
        setTitle(response.title);
        setType(response.category);
        setShortDescription(response.shortDescription);
        setListImage(images);
        setDescription(descriptions);
        setAuthor(response.author ?? 'Unknown');
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function editNews() {
    let errorCount = 0;
    if (title === null || title === undefined || title === '') {
      setErrorTitle('T??n kh??ng ???????c ????? tr???ng');
      errorCount++;
    }
    if (type === null || type === undefined || type.length === 0) {
      setErrorType('Th??? lo???i kh??ng ???????c ????? tr???ng');
      errorCount++;
    }
    if (shortDescription === null || shortDescription === undefined || shortDescription === '') {
      setErrorShortDescription('Mi??u t??? s???n ph???m kh??ng ???????c ????? tr???ng');
      errorCount++;
    }
    if (description === null || description === undefined || description === '') {
      console.log('Error in Description');
      errorCount++;
    }
    if (listImage === null || listImage === undefined || listImage.length === 0) {
      console.log('Error in Image');
      errorCount++;
    }
    if (errorCount === 0) {
      let resImages = [];
      for (let i = 0; i < listImage.length; i++) {
        if (listImage[i].includes('game-ecomemerce.appspot.com')) {
          resImages.push(listImage[i]);
        } else {
          const image = await uploadImage({ image: listImage[i] });
          resImages.push(image);
        }
      }
      let descriptions = description!.split('\n');
      let news: News = {
        _id: newsId,
        title: title,
        category: type,
        date: Date.now().toString(),
        author: author,
        description: descriptions,
        shortDescription: shortDescription,
        mainImage: resImages[0],
      };

      let response = await NewsService.editNews(news);
      return response;
    }
  }

  return (
    <div className="relative">
      <div className="mb-1 shadow-sm">
        <BreadCrumbComponent
          key="bread-crumb-component-key"
          list={[
            { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
            {
              name: 'News',
              icon: <NewspaperIcon className="w-4 h-4" />,
              path: '/admin/news',
            },
            { name: 'Edit News', icon: <PlusIcon className="w-4 h-4" /> },
          ]}
        />
      </div>

      <div className="overflow-auto h-[820px]">
        <div className="mx-10 md:mx-20 shadow-lg rounded-lg p-8 mt-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Th??ng tin b??i b??o</h3>
          <div className="grid grid-rows-3 gap-y-3">
            <InputComponent
              title="Ti??u ????? b??i b??o"
              placeHolder="Ti??u ?????...."
              value={title}
              error={errorTitle}
              onChange={setTitle}
              styleProps="w-full"
            />
            <InputComponent
              title="Th??? lo???i"
              placeHolder="Th??? lo???i...."
              value={type}
              error={errorType}
              onChange={setType}
              styleProps="w-full"
            />
            <InputComponent
              title="T??c gi???"
              placeHolder="T??c gi???...."
              value={author}
              onChange={setAuthor}
              styleProps="w-full"
            />
            <InputComponent
              title="Mi??u t??? ng???n"
              placeHolder="Mi??u t???...."
              value={shortDescription}
              onChange={setShortDescription}
              error={errorShortDescription}
              styleProps="w-full"
            />
          </div>
        </div>

        <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Danh s??ch h??nh ???nh</h3>
          <h4 className="text-sm text-red-500 italic">
            *C???n c?? ??t nh???t 1 ???nh l??m ???nh ?????i di???n tin t???c
          </h4>
          <UploadListImageComponent
            images={listImage}
            onImages={setListImage}
            multiple={false}
            key="upload-multiple-image"
            styleProps="w-[100%]"
          />
        </div>

        <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Mi??u t??? chi ti???t</h3>
          <textarea
            id="message"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-none border-gray-300 focus: focus:border-none focus:ring-0"
            placeholder="Chi ti???t...."
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          type="button"
          className="py-2.5 px-5 m-2 w-1/4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border shadow-sm border-gray-200 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-0 focus:bg-blue-600 focus:text-white"
          onClick={() => navigate(-1)}
        >
          Quay l???i
        </button>
        <button
          type="button"
          className="py-2.5 px-5 m-2 w-1/4 text-base font-medium text-white bg-blue-700 rounded-lg border drop-shadow-sm hover:bg-blue-800 focus:ring-0 focus:bg-white focus:text-blue-700 focus:border-none focus:z-10 focus:drop-shadow-lg"
          onClick={async () => {
            let res = await editNews();
            if (res) {
              navigate(-1);
            } else {
              console.log('Add News Failed');
            }
          }}
        >
          L??u
        </button>
      </div>
    </div>
  );
};

const uploadImage = async (props: { image: string }) => {
  let response = await fetch(props.image);
  let data = await response.blob();
  let metadata = {
    type: 'image/jpeg',
  };
  let file = new File([data], `${props.image}.jpeg`, metadata);
  return await NewsService.editImage({ image: file });
};
