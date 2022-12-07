import { BriefcaseIcon, HomeIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Game } from '../../../../model/product_model';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { InputComponent } from '../../component/input';
import * as ProductService from '../../../../services/product/product';
import { UploadListImageComponent } from '../../component/upload_list_image';
import { discountCalc, withCurrency } from '../../../../utils/product_utils';

export const ProductAddComponent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState<string[]>([]);
  const [releaseDate, setReleaseDate] = useState('');
  const [platform, setPlatform] = useState('');
  const [maxPlayer, setMaxPlayer] = useState(0);
  const [total, setTotal] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState('CÓ SẴN');
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState<string>('');
  const [shortDescription, setShortDescription] = useState('');
  const [note, setNote] = useState('');
  const [listImage, setListImage] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');
  const [errorTitle, setErrorTitle] = useState<string>();
  const [errorType, setErrorType] = useState<string>();
  const [errorPlatform, setErrorPlatform] = useState<string>();
  const [errorDiscount, setErrorDiscount] = useState<string>();
  const [errorTotal, setErrorTotal] = useState<string>();
  const [errorDefaultPrice, setErrorDefaultPrice] = useState<string>();
  const [errorShortDescription, setErrorShortDescription] = useState<string>();
  let navigate = useNavigate();

  async function addProduct() {
    let errorCount = 0;
    if (title === null || title === undefined || title === '') {
      setErrorTitle('Tên không được để trống');
      errorCount++;
    }

    if (platform === null || platform === undefined || platform === '') {
      setErrorPlatform('Hệ điều hành không được để trống');
      errorCount++;
    }

    if (type === null || type === undefined || type.length === 0) {
      setErrorType('Thể loại không được để trống');
      errorCount++;
    }

    if (total === null || total === undefined || total === 0) {
      setErrorTotal('Số lượng không được để trống');
      errorCount++;
    }

    if (price === null || price === undefined || price === 0) {
      setErrorDefaultPrice('Giá ban đầu không được để trống');
      errorCount++;
    }

    if (discount !== undefined && (parseFloat(discount) > 1 || parseFloat(discount) < 0)) {
      setErrorDiscount('Giảm giá không hợp lệ');
      errorCount++;
    }

    if (shortDescription === null || shortDescription === undefined || shortDescription === '') {
      setErrorShortDescription('Miêu tả sản phẩm không được để trống');
      errorCount++;
    }

    if (listImage === null || listImage === undefined || listImage.length === 0) {
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
      let game: Game = {
        title: title,
        type: type,
        releaseDate: releaseDate,
        platform: platform,
        total: total,
        price: price,
        description: description,
        shortDescription: shortDescription,
        discount: parseFloat(discount),
        maxPlayer: maxPlayer,
        note: note,
        tags: tags,
        imageList: resImages,
      };

      let response = await ProductService.addGame(game);
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
              name: 'Products',
              icon: <BriefcaseIcon className="w-4 h-4" />,
              path: '/admin/products',
            },
            { name: 'Add New Product', icon: <PlusIcon className="w-4 h-4" /> },
          ]}
        />
      </div>

      <div className="overflow-auto h-[820px]">
        <div className="mx-10 md:mx-20 shadow-lg rounded-lg p-8 mt-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin sản phẩm</h3>
          <div className="grid lg:grid-cols-2 gap-x-2">
            <div className="grid md:grid-rows-4 gap-y-3">
              <InputComponent
                title="Tên sản phẩm"
                placeHolder="Pokemon"
                value={title}
                error={errorTitle}
                onChange={setTitle}
                styleProps="w-full"
              />
              <div className="grid lg:grid-cols-2 gap-x-4">
                <InputComponent
                  title="Hệ điều hành"
                  placeHolder="Nintendo Switch"
                  value={platform}
                  error={errorPlatform}
                  onChange={setPlatform}
                  styleProps="w-full lg:w-[90%]"
                />
                <InputComponent
                  title="Số người chơi"
                  placeHolder="1"
                  value={maxPlayer.toString()}
                  onChange={(value) => setMaxPlayer(parseInt(value ? value : '0'))}
                  styleProps="w-full lg:w-[90%]"
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                <InputComponent
                  title="Giá mặc định"
                  placeHolder="10000000"
                  value={price.toString()}
                  error={errorDefaultPrice}
                  onChange={(value) => setPrice(parseFloat(value ? value : '0'))}
                  styleProps="w-full lg:w-[90%]"
                />
                <InputComponent
                  title="Trạng thái"
                  placeHolder="CÓ SẴN"
                  value={status}
                  onChange={setStatus}
                  styleProps="w-full lg:w-[90%]"
                />
              </div>
              <InputComponent
                title="Miêu tả ngắn gọn"
                placeHolder="Một trò chơi thư giản với gia đình"
                value={shortDescription}
                onChange={setShortDescription}
                error={errorShortDescription}
                styleProps="w-full"
              />
            </div>
            <div className="grid md:grid-rows-4 gap-y-3">
              <div className="grid lg:grid-cols-2 gap-x-4">
                <InputComponent
                  title="Thể loại"
                  placeHolder="Phiêu lưu,Hành động"
                  value={type.join(',')}
                  error={errorType}
                  onChange={(value) => setType(value.split(','))}
                  styleProps="w-full lg:w-[90%]"
                />
                <InputComponent
                  title="Ngày phát hành"
                  placeHolder="20/11/2022"
                  value={releaseDate}
                  onChange={setReleaseDate}
                  styleProps="w-full lg:w-[90%]"
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                <InputComponent
                  title="Số lượng sản phẩm"
                  placeHolder="10"
                  value={total.toString()}
                  error={errorTotal}
                  onChange={(value) => setTotal(parseInt(value ? value : '0'))}
                  styleProps="w-full lg:w-[90%]"
                />
                <InputComponent
                  title="Từ khóa"
                  placeHolder="game,hot2022"
                  value={tags.join(',')}
                  onChange={(value) => setTags(value.split(','))}
                  styleProps="w-full lg:w-[90%]"
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-x-4">
                <InputComponent
                  title="Giảm giá"
                  placeHolder="0.5"
                  value={discount.toString()}
                  onChange={(value) => setDiscount(value)}
                  error={errorDiscount}
                  styleProps="w-full lg:w-[90%]"
                />
                <InputComponent
                  title="Giá chính thức"
                  placeHolder="0"
                  value={withCurrency(discountCalc(parseFloat(discount), price))}
                  disable={true}
                  styleProps="w-full lg:w-[90%]"
                />
              </div>

              <InputComponent
                title="Lưu ý"
                placeHolder="Những thông tin cần thông báo cho khách hàng"
                value={note}
                onChange={setNote}
                styleProps="w-full"
              />
            </div>
          </div>
        </div>

        <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Danh sách hình ảnh</h3>
          <h4 className="text-sm text-red-500 italic">
            *Cần có ít nhất 1 ảnh làm ảnh đại diện sản phẩm
          </h4>
          <UploadListImageComponent
            images={listImage}
            onImages={setListImage}
            key="upload-multiple-image"
            styleProps="w-[100%]"
          />
        </div>

        <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Miêu tả chi tiết</h3>
          <textarea
            id="message"
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-none border-gray-300 focus: focus:border-none focus:ring-0"
            placeholder="Chi tiết...."
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
          Quay lại
        </button>
        <button
          type="button"
          className="py-2.5 px-5 m-2 w-1/4 text-base font-medium text-white bg-blue-700 rounded-lg border drop-shadow-sm hover:bg-blue-800 focus:ring-0 focus:bg-white focus:text-blue-700 focus:border-none focus:z-10 focus:drop-shadow-lg"
          onClick={async () => {
            let res = await addProduct();
            if (res !== null) {
              navigate(-1);
            } else {
              console.log('Add Product Failed');
            }
          }}
        >
          Lưu
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
  return await ProductService.editImage({ image: file });
};
