import { BriefcaseIcon, HomeIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Game } from "../../../../model/product_model";
import * as ProductService from '../../../../services/product/product';
import { BreadCrumbComponent } from "../../component/breadcrumb";
import { InputComponent } from "../../component/input";
import { UploadListImageComponent } from "../../component/upload_list_image";

export const ProductEditComponent = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Game>()
    const [listImage, setListImage] = useState<string[]>([])
    const [loading, setLoading] = useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        try{
            ProductService.getProductById(productId || "").then((response) => {
                setProduct(response);
                setListImage(response.imageList || [])
                setLoading(false)
            })            
        } catch(error) {
            console.log(error);
        }
    }, [productId]);

    return (<div className="relative">

   <div className="mb-1 shadow-sm">
   <BreadCrumbComponent key="bread-crumb-component-key" list={[{name: "Dashboard", icon: <HomeIcon className='w-4 h-4'/>, path: "/admin"}, {name: "Products", icon: <BriefcaseIcon className="w-4 h-4" />, path: "/admin/products"}, {name: "Edit Product", icon: <PencilIcon className="w-4 h-4" />, }]}/>
    </div>
    

<div className="overflow-auto h-[820px]">
<div className="mx-10 md:mx-20 shadow-lg rounded-lg p-8 mt-4">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin sản phẩm</h3>
      <div className="grid lg:grid-cols-2 gap-x-2">
        <div className="grid md:grid-rows-4 gap-y-3">
          <InputComponent title="Tên sản phẩm" placeHolder="Pokemon" onChange={(e) => { }} styleProps="w-full" value={product?.title} />
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Hệ điều hành" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.platform}/>
          <InputComponent title="Số người chơi" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.maxPlayer?.toString()} />
          </div>
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Giá mặc định" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.priceDefault.toString()}/>
          <InputComponent title="Giá đặt cọc" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.priceDeposit?.toString()}/>
          </div>
          <InputComponent title="Miêu tả ngắn gọn" placeHolder="Pokemon" onChange={(e) => { }} styleProps="w-full" value={product?.shortDescription} />
          
        </div>
        <div className="grid md:grid-rows-4 gap-y-3">
        <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Thể loại" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.type.join(',')}/>
          <InputComponent title="Ngày phát hình" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.releaseDate}/>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Số lượng sản phẩm" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.total.toString()}/>
          <InputComponent title="Trạng thái" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.status}/>
          </div>        
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Giảm giá" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" />
          <InputComponent title="Giá chính thức" placeHolder="10000000" onChange={(e) => { }} styleProps="w-full lg:w-[90%]" value={product?.priceOffical.toString()}/>
          </div>  

          <InputComponent title="Lưu ý" placeHolder="Pokemon" onChange={(e) => { }} styleProps="w-full" value={product?.note}/>
        </div>   
      </div>

    </div>


    <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
    <h3 className="text-lg font-medium leading-6 text-gray-900">Danh sách hình ảnh</h3>
    <UploadListImageComponent images={listImage} onImages={setListImage} key="upload-multiple-image" styleProps="w-[100%]"/>
    </div>

    <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
    <h3 className="text-lg font-medium leading-6 text-gray-900">Miêu tả chi tiết</h3>
    <textarea id="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-none border-gray-300 focus: focus:border-none focus:ring-0" placeholder="Chi tiết...."></textarea>
    </div>    
</div>

<div className="w-full flex justify-center">
    <button type="button" className="py-2.5 px-5 m-2 w-1/4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border shadow-sm border-gray-200 hover:bg-gray-100 hover:text-blue-300 focus:z-10 focus:ring-0 focus:bg-blue-600 focus:text-white" onClick={() => navigate(-1)}>Quay lại</button>
    <button type="button" className="py-2.5 px-5 m-2 w-1/4 text-base font-medium text-white bg-blue-700 rounded-lg border drop-shadow-sm hover:bg-blue-800 focus:ring-0 focus:bg-white focus:text-blue-700 focus:border-none focus:z-10 focus:drop-shadow-lg">Lưu</button>
    </div>
</div>)
}