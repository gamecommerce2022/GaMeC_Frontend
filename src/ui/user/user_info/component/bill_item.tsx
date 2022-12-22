import { useNavigate } from 'react-router-dom';

export const BillItemComponent = (props: { index: number; bill: any }) => {
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
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.bill.title}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.bill.total}</td>
    </tr>
  );
};
