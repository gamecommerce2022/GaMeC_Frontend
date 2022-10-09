import { CheckCircleIcon } from "@heroicons/react/24/outline"

export interface ProductMediaTypeEntity {
 id: string;
 name: string;
}

export const ProductMediaTypeComponent: React.FC<ProductMediaTypeEntity> = (props: ProductMediaTypeEntity) => {
 return (
  <div className="active:bg-blue-500 flex flex-row justify-between w-full group active:py-2 rounded px-2 items-center">
   <p className=" text-white font-medium group-active:font-bold">{props.name}</p>
   <CheckCircleIcon className="w-6 h-6 hidden group-active:block" />
  </div>
 )
}