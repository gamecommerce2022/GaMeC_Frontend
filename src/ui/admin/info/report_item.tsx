export const ReportItemComponent = (props: { index: number; report: any }) => {
  return (
    <tr className="bg-white hover:bg-gray-50">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 ">
        {props.index}
      </th>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.report.userName}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.report.email}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.report.address || 'None'}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.report.phoneNumber}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.report.description}</td>
    </tr>
  );
};
