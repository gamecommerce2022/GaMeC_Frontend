import { BriefcaseIcon, HomeIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom"
import { BreadCrumbComponent } from "../../component/breadcrumb";

export const ProductEditComponent = () => {
    const { productId } = useParams<{ productId: string }>();
    
    return (<div className="">
   <BreadCrumbComponent key="bread-crumb-component-key" list={[{name: "Dashboard", icon: <HomeIcon className='w-4 h-4'/>, path: "/admin"}, {name: "Products", icon: <BriefcaseIcon className="w-4 h-4" />, path: "/admin/products"}, {name: "Edit Product", icon: <PencilIcon className="w-4 h-4" />, }]}/>
</div>)
}