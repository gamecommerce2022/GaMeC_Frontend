import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { Game } from '../../../../model/product_model';

export const ProductItemComponent: React.FC<{ index: number, product: Game }> = (props: { index: number, product: Game }) => {
  let navigate = useNavigate()
return <tr className="bg-white hover:bg-gray-50">
  <th scope="row" className="py-4 px-6 font-medium text-gray-900 ">
  {props.index}
  </th>
  <td className="py-4 px-6 font-medium text-gray-900 ">
  {props.product.title}
  </td>
  <td className="py-4 px-6 font-medium text-gray-900 ">
  {props.product.platform}
  </td>  
  <td className="py-4 px-6">
  <div className="flex items-center">
      <img className="object-contain max-h-[8rem] max-w-[8rem]" src={props.product.imageDefault} alt={props.product.title} />
      </div>
  </td>
  <td className="py-4 px-6 font-medium text-gray-900 ">
  {props.product.priceDefault}
  </td>
  <td className="py-4 px-6 font-medium text-gray-900 ">
  {props.product.priceOffical}
  </td>
  <td className="py-4 px-6">
  <div className="flex flex-row h-full items-center justify-around">
        <PencilIcon className="w-4 h-4 text-blue-500 hover:text-orange-500" onClick={() => {          
          navigate(`/admin/products/${props.product._id}`)
         }} />
        <TrashIcon className="w-4 h-4 text-blue-500 hover:text-orange-500" onClick={() => { }} />
      </div>
  </td>
</tr>  
}