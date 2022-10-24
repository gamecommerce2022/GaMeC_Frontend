import { Card, CardBody, CardHeader, Tooltip } from "@material-tailwind/react"
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../../../../utils/Classnames";
import { getProductPrice } from "../../../../../utils/product_utils";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
 id: string;
 name: string;
 img: string;
 price: number;
 type: string;
 discount: number;
}
export const ProductItem: React.FC<ProductItemProps> = (props) => {
 let navigate = useNavigate();
 const navigateProductPage = () => {
  let path = `products/${props.id}`;
  navigate(path);
 }
 return (<Card key={props.id} className=" bg-transparent md:w-32 lg:w-56" onClick={navigateProductPage}>
  <CardHeader floated={true} className="relative lg:h-64 md:h-32 group">
   <img
    src={props.img}
    alt="img-blur-shadow"
    className="h-full w-full"
   />
   <Tooltip content="Add to Wishlist">
    <PlusCircleIcon className='absolute top-2 right-2 w-8 h-8 text-gray-200 group-hover:block group-hover:cursor-pointer hidden' onClick={() => { console.log('Click') }} />
   </Tooltip>


  </CardHeader>
  <CardBody className=" text-white p-4 flex flex-col space-y-2">
   <div className="font-medium text-sm text-gray-400">
    {props.type}
   </div>
   <div className="font-medium text-sm">
    {props.name}
   </div>
   <div className='flex flex-row space-x-2 items-center justify-items-center text-xs'>
    {props.discount > 0 && <span className='bg-indigo-400 text-center rounded p-1 w-max text-sm'>-{props.discount * 100}%</span>}
    <span className={classNames("font-medium self-center w-max", props.discount > 0 ? 'line-through text-xs text-gray-400' : 'text-sm')}>
     {props.price > 0 ? `đ ${getProductPrice(props.price)}` : 'Free'}
    </span>
    {props.discount > 0 && <span className='w-max text-sm'>đ {getProductPrice(props.price * (1 - props.discount))}</span>}
   </div>

  </CardBody>
 </Card>)
}