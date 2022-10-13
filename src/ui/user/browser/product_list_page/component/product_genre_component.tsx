import { CheckCircleIcon } from "@heroicons/react/24/outline";


export interface ProductGenreEntity {
 id: string;
 name: string;
}

export const ProductGenreComponent: React.FC<ProductGenreEntity> = (props: ProductGenreEntity) => {
 return (
  <div className="active:bg-blue-500 flex flex-row justify-between w-full group active:py-2 rounded px-2 items-center">
   <p className=" text-white font-medium group-active:font-bold">{props.name}</p>
   <CheckCircleIcon className="w-6 h-6 hidden group-active:block" />
  </div>
 )
}