export const BillDetailedItemComponent = (props: { index: number; billDetailed: any }) => {
  return (
    <tr className="bg-white hover:bg-gray-50">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 ">
        {props.index}
      </th>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.billDetailed.title}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.billDetailed.total}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.billDetailed.price}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.billDetailed.discount}</td>
    </tr>
  );
};
