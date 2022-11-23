import { BriefcaseIcon, HomeIcon, PencilIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Game } from '../../../../model/product_model';
import * as ProductService from '../../../../services/product/product';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { InputComponent } from '../../component/input';
import { UploadImageComponent } from '../../component/upload_image';
import { UploadListImageComponent } from '../../component/upload_list_image';

export const ProductEditComponent = () => {
  const { productId } = useParams<{ productId: string }>();
  const [title, setTitle] = useState("")
  const [type, setType] = useState<string[]>([])
  const [releaseDate, setReleaseDate] = useState("")
  const [platform, setPlatform] = useState("")
  const [maxPlayer, setMaxPlayer] = useState(0)
  const [total, setTotal] = useState(0)
  const [tags, setTags] = useState<string[]>([])
  const [status, setStatus] = useState("CÓ SẴN")
  const [defaultPrice, setDefaultPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [officalPrice, setOfficalPrice] = useState(0)
  const [shortDescription, setShortDescription] = useState("")
  const [note, setNote] = useState("")
  const [listImage, setListImage] = useState<string[]>([])
  const [description, setDescription] = useState<string>("")
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    try {
      ProductService.getProductById(productId || '').then((response) => {
        setTitle(response.title)
        setType(response.type)
        setReleaseDate(response.releaseDate)
        setPlatform(response.platform)
        setMaxPlayer(response.maxPlayer ?? maxPlayer)
        setTotal(response.total)
        setTags(response.tags ?? tags)
        setStatus(response.status ?? status)      
        setDefaultPrice(response.priceDefault)
        setDiscount(response.discount ?? discount)
        setOfficalPrice(response.priceOffical)
        setShortDescription(response.shortDescription ?? shortDescription)
        setNote(response.note ?? note)
        setDescription(response.description.join('\n'))
        setListImage(response.imageList || listImage);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
            { name: 'Edit Product', icon: <PencilIcon className="w-4 h-4" /> },
          ]}
        />
      </div>

      <div className="overflow-auto h-[820px]">
      <div className="mx-10 md:mx-20 shadow-lg rounded-lg p-8 mt-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin sản phẩm</h3>
        <div className="grid lg:grid-cols-2 gap-x-2">
          <div className="grid md:grid-rows-4 gap-y-3">
            <InputComponent title="Tên sản phẩm" placeHolder="Pokemon" value={title} onChange={setTitle} styleProps="w-full" />
            <div className="grid lg:grid-cols-2 gap-x-4">
              <InputComponent title="Hệ điều hành" placeHolder="Nintendo Switch" value={platform} onChange={setPlatform} styleProps="w-full lg:w-[90%]" />
              <InputComponent title="Số người chơi" placeHolder="1" value={maxPlayer.toString()} onChange={(value) => setMaxPlayer(parseInt(value ? value : "0"))} styleProps="w-full lg:w-[90%]" />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-4">
              <InputComponent title="Giá mặc định" placeHolder="10000000" value={defaultPrice.toString()} onChange={(value) => setDefaultPrice(parseFloat(value ? value : "0"))} styleProps="w-full lg:w-[90%]" />
              <InputComponent title="Trạng thái" placeHolder="CÓ SẴN" value={status} onChange={setStatus} styleProps="w-full lg:w-[90%]" />
            </div>
            <InputComponent title="Miêu tả ngắn gọn" placeHolder="Một trò chơi thư giản với gia đình" value={shortDescription} onChange={setShortDescription} styleProps="w-full" />

          </div>
          <div className="grid md:grid-rows-4 gap-y-3">
            <div className="grid lg:grid-cols-2 gap-x-4">
              <InputComponent title="Thể loại" placeHolder="Phiêu lưu,Hành động" value={type.join(',')} onChange={(value) => setType(value.split(","))} styleProps="w-full lg:w-[90%]" />
              <InputComponent title="Ngày phát hình" placeHolder="20/11/2022" value={releaseDate} onChange={setReleaseDate} styleProps="w-full lg:w-[90%]" />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-4">
              <InputComponent title="Số lượng sản phẩm" placeHolder="10" value={total.toString()} onChange={(value) => setTotal(parseInt(value ? value : "0"))} styleProps="w-full lg:w-[90%]" />
              <InputComponent title="Từ khóa" placeHolder="game,hot2022" value={tags.join(',')} onChange={(value) => setTags(value.split(","))} styleProps="w-full lg:w-[90%]" />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-4">
              <InputComponent title="Giảm giá" placeHolder="0.5" value={discount.toString()} onChange={(value) => setDiscount(parseInt(value ? value : "0"))} styleProps="w-full lg:w-[90%]" />
              <InputComponent title="Giá chính thức" placeHolder="10000000" value={officalPrice.toString()} onChange={(value) => setOfficalPrice(parseFloat(value ? value : "0"))} styleProps="w-full lg:w-[90%]" />
            </div>

            <InputComponent title="Lưu ý" placeHolder="Những thông tin cần thông báo cho khách hàng" value={note} onChange={setNote} styleProps="w-full" />
          </div>
        </div>

      </div>


      <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Danh sách hình ảnh</h3>
        <UploadListImageComponent images={listImage} onImages={setListImage} key="upload-multiple-image" styleProps="w-[100%]" />
      </div>

      <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Miêu tả chi tiết</h3>
        <textarea id="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-none border-gray-300 focus: focus:border-none focus:ring-0" placeholder="Chi tiết...." value={description} onChange={(event) => {setDescription(event.target.value)}}></textarea>
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
          className="py-2.5 px-5 m-2 w-1/4 text-base font-medium text-white bg-blue-700 rounded-lg border drop-shadow-sm hover:bg-blue-800 focus:ring-0 focus:bg-white focus:text-blue-700 focus:border-none focus:z-10 focus:drop-shadow-lg" onClick={async () => {
            let descriptions = description.split('\n')
            let res = await editGame({title: title, type: type, releaseDate: releaseDate,platform: platform,maxPlayer: maxPlayer,total: total,status: status,priceDefault: defaultPrice,priceOffical: officalPrice,shortDescription: shortDescription,discount: discount,note: note,tags: tags, imageList: listImage,description: descriptions, id: productId})
            if(res === true){
              navigate(-1)
            } else {
              console.log('Edit Product Failed')
            }
          }}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

const editGame = async (props: {title: string;
  type: string[];
  releaseDate: string;
  platform: string;
  maxPlayer?: number;
  total: number;
  status: string;
  priceDefault: number;
  priceOffical: number;
  shortDescription: string;
  discount?: number;
  note?: string;
  tags?: string[];
  imageList?: string[];
  description: string[];
  videoList?: string[];
  id?: string;}) => {
    let game: Game = {
      _id: props.id,
      title: props.title,
      type: props.type,
      releaseDate: props.releaseDate,
      platform: props.platform,
      total: props.total,
      priceDefault: props.priceDefault,
      priceOffical: props.priceOffical,
      description: props.description,
      videoList: props.videoList,
      shortDescription: props.shortDescription,
      discount: props.discount,
      maxPlayer: props.maxPlayer,
      note: props.note,
      tags: props.tags,
      imageList: props.imageList,
    }

    let response = await ProductService.editGame(game);
    return response;
}
