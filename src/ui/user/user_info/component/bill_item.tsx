import { useNavigate } from 'react-router-dom';
import { IBill } from '../../../admin/cart/get/cart_item';

export const BillItemComponent = (props: { index: number; bill: IBill }) => {
  let navigate = useNavigate();

  return (
    <tr
      className="bg-white hover:bg-gray-50"
      onClick={() => {
        navigate(`/user/history/${props.bill.id}`);
      }}
    >
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 ">
        {props.index}
      </th>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.bill.date}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.bill.total}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.bill.paymentStatus}</td>
    </tr>
  );
};
