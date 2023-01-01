export const CommentItemComponent = (props: { index: number; comment: any }) => {
  return (
    <tr className="bg-white hover:bg-gray-50">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 ">
        {props.index}
      </th>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.comment.authorName}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.comment.content}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">
        {(props.comment.date as string).substring(0, 10)}
      </td>
    </tr>
  );
};
