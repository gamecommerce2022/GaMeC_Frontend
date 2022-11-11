import { BriefcaseIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/outline"
import { BreadCrumbComponent } from "../../component/breadcrumb"
import { InputComponent } from "../../component/input"
import { UploadImageComponent } from "../../component/upload_image"

export const ProductAddComponent = () => {
  return (<div className="relative">
    <div className="mb-1 shadow-sm">
    <BreadCrumbComponent key="bread-crumb-component-key" list={[{ name: "Dashboard", icon: <HomeIcon className='w-4 h-4' />, path: "/admin" }, { name: "Products", icon: <BriefcaseIcon className="w-4 h-4" />, path: "/admin/products" }, { name: "Add New Product", icon: <PlusIcon className="w-4 h-4" />, }]} />
    </div>
    

<div className="overflow-auto h-[860px]">
<div className="mx-10 md:mx-20 shadow-lg rounded-lg p-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Thông tin sản phẩm</h3>
      <div className="grid lg:grid-cols-3 gap-x-2">
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
        <div className='flex justify-center'>
        <UploadImageComponent title="Hình ảnh sản phẩm" isMulitple={false} style="w-[80%]"/>
        </div>     
      </div>

    </div>


    <div className="mx-10 mt-4 md:mx-20 shadow-lg rounded-lg p-8">
    <UploadImageComponent title="Danh sách hình ảnh" isMulitple={true} style="w-[100%]"/>
    </div>

    <div className="h-[5000px]"></div>
</div>
    

  </div>)
}