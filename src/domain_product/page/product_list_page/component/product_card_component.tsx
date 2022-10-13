import { Link } from "react-router-dom";
import { classNames } from "../../../../lib/Classnames";
import { ProductCardEntity } from "../../../entity/entity";



export const ProductCardComponent: React.FC<ProductCardEntity> = (props: ProductCardEntity) => {
 return (
  <div className={classNames("flex flex-col space-y-2.5 pb-2 bg-black rounded-lg border-t-0 border-x-2 border-b-2 border-gray-600")}>
   <img className="h-full w-full rounded-lg overflow-visible" src={props.url} alt={props.name} />

   <div className="flex flex-col space-y-1 mx-1.5">
    <div className="truncate text-sm font-bold text-white">
     {props.name}
    </div>
    <div className="truncate text-xs font-medium text-gray-400">
     {props.publisher}
    </div>
   </div>

   <div className="flex flex-row flex-nowrap overflow-x-clip space-x-1 mx-1.5">
    <div className="rounded-lg border border-gray-600 flex items-center justify-center text-gray-400 font-normal text-xs p-1">
     {props.platform[0]}
    </div>
   </div>

   <Link className="h-16 mx-1.5 flex justify-center items-center bg-blue-500 rounded-lg text-white font-bold text-xs group" to={`/products/${props.id}`} >
    <div className="inline-block group-hover:hidden">{props.price}</div>
    <div className="hidden group-hover:inline-block">Purchase</div>
   </Link>
  </div>)
}