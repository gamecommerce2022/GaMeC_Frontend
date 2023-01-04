import { Product } from '../../../../model/product_model';

export const ProductDetailedItemComponent = (props: { index: number; product: Product }) => {
  return (
    <tr className="bg-transparent hover:bg-gray-50">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 ">
        {props.index}
      </th>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.product.title}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">
        {props.product.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
      </td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.product.discount}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">
        {props.product.price * (1 - (props.product.discount ?? 0))}
      </td>
    </tr>
  );
};
