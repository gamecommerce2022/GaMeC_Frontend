import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { classNames } from "../../../../../utils/Classnames";
import { getProductPrice } from "../../../../../utils/product_utils";

interface ProductItemProps {
 id: string;
 name: string;
 img: string;
 price: number;
 type: string;
 discount: number;
}
export const ProductItem: React.FC<ProductItemProps> = (props) => {
 const navigate = useNavigate();
 return (
  <div
   className="w-full h-max flex flex-col"
   onClick={() => {
    navigate(`/p/${props.id}`);
   }}
  >
   <img
    className="w-full h-64 object-fill rounded"
    src={props.img}
    alt={props.name}
   />
   <div className="text-gray-500 mt-2">{props.type}</div>
   <div>
    <h1 className="text-white text-xl">{props.name}</h1>
   </div>
   <div className="flex-grow"></div>
   <div className="flex flex-row justify-between items-center">
    {props.discount > 0 && (
     <span className="text-white bg-blue-700 rounded-lg">
      <p className="m-2 text-base">-{props.discount * 100}%</p>
     </span>
    )}
    <div>
     <div
      className={classNames(
       "text-base",
       props.discount > 0
        ? "line-through text-gray-400 font-medium"
        : "text-gray-500 font-bold"
      )}
     >
      {props.price > 0 ? `₫ ${getProductPrice(props.price)}` : "Free"}
     </div>
     {props.discount > 0 && (
      <h3 className="text-white text-base font-bold">
       ₫ {getProductPrice(props.price * (1 - props.discount))}
      </h3>
     )}
    </div>
   </div>
  </div>
 );
};
