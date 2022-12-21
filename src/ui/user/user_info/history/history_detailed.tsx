import { useParams } from 'react-router-dom';
import { TableComponent } from '../../../admin/component/table';
import { BillDetailedItemComponent } from '../component';

export const HistoryDetailPage = () => {
  const billId = useParams<{ billId: string }>();
  let billDetailedList: any[] = [];
  let date = '21/12/2022';
  let total = 10000000;
  return (
    <div className="mx-12 mt-12 lg:mx-40 md:mx-20">
      <div className="text-white text-2xl m-16">BILL IN {date}</div>
      <TableComponent
        key="table-component-key"
        headerList={['ID', 'TITLE', 'TOTAL', 'PRICE', 'DISCOUNT']}
        bodyList={billDetailedList.map((billDetailed, index) => {
          return (
            <BillDetailedItemComponent
              billDetailed={billDetailed}
              index={index + 1}
              key={`${index}-${billDetailed.id}`}
            />
          );
        })}
      />
      <div className="text-white text-2xl m-16">TOTAL: {total}</div>
    </div>
  );
};
