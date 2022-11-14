import { BriefcaseIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BreadCrumbComponent } from "../../component/breadcrumb"
import { InputComponent } from "../../component/input"
import { UploadImageComponent } from "../../component/upload_image"
import { UploadListImageComponent } from "../../component/upload_list_image"

export const ProductAddComponent: React.FC = () => {
    const [shortImage, setShortImage] = useState<string | null>(null)
    const [listImage, setListImage] = useState<string[]>([])
    let navigate = useNavigate()
  return (<div className="relative">
    <div className="mb-1 shadow-sm">
    <BreadCrumbComponent key="bread-crumb-component-key" list={[{ name: "Dashboard", icon: <HomeIcon className='w-4 h-4' />, path: "/admin" }, { name: "Products", icon: <BriefcaseIcon className="w-4 h-4" />, path: "/admin/products" }, { name: "Add New Product", icon: <PlusIcon className="w-4 h-4" />, }]} />
    </div>
    

<div className="overflow-auto h-[820px]">
<div className="mx-10 md:mx-20 shadow-lg rounded-lg p-8 mt-4">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin sản phẩm</h3>
      <div className="grid lg:grid-cols-2 gap-x-2">
        <div className="grid md:grid-rows-4 gap-y-3">
          <InputComponent title="Tên sản phẩm" placeHolder="Pokemon" onChange={(e) => { }} style="w-full" />
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Hệ điều hành" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          <InputComponent title="Số người chơi" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Giá mặc định" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          <InputComponent title="Giá đặt cọc" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          </div>
          <InputComponent title="Miêu tả ngắn gọn" placeHolder="Pokemon" onChange={(e) => { }} style="w-full" />
          
        </div>
        <div className="grid md:grid-rows-4 gap-y-3">
        <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Thể loại" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          <InputComponent title="Ngày phát hình" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Số lượng sản phẩm" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          <InputComponent title="Trạng thái" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          </div>        
          <div className="grid lg:grid-cols-2 gap-x-4">
          <InputComponent title="Giảm giá" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          <InputComponent title="Giá chính thức" placeHolder="10000000" onChange={(e) => { }} style="w-full lg:w-[90%]" />
          </div>  

          <InputComponent title="Lưu ý" placeHolder="Pokemon" onChange={(e) => { }} style="w-full" />
        </div>   
      </div>

    </div>


    <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
    <h3 className="text-lg font-medium leading-6 text-gray-900">Danh sách hình ảnh</h3>
    <UploadListImageComponent images={listImage} onImages={setListImage} key="upload-multiple-image" style="w-[100%]"/>
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