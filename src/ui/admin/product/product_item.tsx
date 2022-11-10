import { Table } from 'flowbite-react';
import { Product } from '../../../model/product_model';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export const ProductItem: React.FC<{ index: number, product: Product }> = (props: { index: number, product: Product }) => {
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
      <img className="object-contain max-h-[8rem] max-w-[8rem]" src={props.product.short_image} alt={props.product.title} />
      </div>
  </td>
  <td className="py-4 px-6 font-medium text-gray-900 ">
  {props.product.price_before}
  </td>
  <td className="py-4 px-6 font-medium text-gray-900 ">
  {props.product.price_after}
  </td>
  <td className="py-4 px-6">
  <div className="flex flex-row h-full items-center justify-around">
        <PencilIcon className="w-4 h-4 text-blue-500 hover:text-orange-500" onClick={() => { }} />
        <TrashIcon className="w-4 h-4 text-blue-500 hover:text-orange-500" onClick={() => { }} />
      </div>
  </td>
</tr>  
}