
export interface TableProps {
    headerList: string[];
    bodyList: JSX.Element[];
}

export const TableComponent: React.FC<TableProps> = (props: TableProps) => {
    return (<div className="overflow-x-auto relative shadow-md sm:rounded-lg h-[700px] scroll-smooth">
      <table className="w-full text-sm text-left text-gray-500 rounded-xl">
        <thead className="text-base text-gray-700 uppercase bg-gray-50 sticky top-0">           
          <tr>
          {props.headerList.map((item)=> {
                return  <th scope="col" className="py-3 px-6">
                {item}
              </th>
            })}
          </tr>
        </thead>
        <tbody>
            {props.bodyList}          
        </tbody>
      </table>
    </div>)
}