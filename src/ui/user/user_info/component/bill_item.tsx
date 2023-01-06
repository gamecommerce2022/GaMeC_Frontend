import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { getPaymentStatusColor } from '../../../../utils/product_utils';
import { IBill } from '../../../admin/cart/get/cart_item';
import { default as dayjs } from 'dayjs';

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
      <td className="py-4 px-6 font-medium text-gray-900 ">
        {dayjs(props.bill.date).format('DD-MM-YYYY HH:mm:ss')}
      </td>
      <td className="py-4 px-6 font-medium text-gray-900 ">
        {props.bill.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
      </td>
      <td
        className={clsx(
          `py-4 px-6 font-medium ${getPaymentStatusColor(props.bill.paymentStatus)} `,
        )}
      >
        {props.bill.paymentStatus.toUpperCase()}
      </td>
    </tr>
  );
};
