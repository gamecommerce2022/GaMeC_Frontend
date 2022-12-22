import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TableComponent } from '../../../admin/component/table';
import { EmptyList } from '../../../global/component/emptylist/empty_list';
import { Pagination } from '../../../global/component/pagination/pagination';
import { BillItemComponent } from '../component';

export const UserHistoryPage = () => {
  const billList: any[] = [];
  const [defaultPage, setDefaultPage] = useState(0);

  function goToNextPage(page: number) {}

  if (billList.length === 0) {
    return (
      <EmptyList
        title="Your history is empty"
        description="You haven't bought anything yet"
        buttonText="back to store"
        linkTo="/"
      />
    );
  }

  return (
    <div className="flex flex-col mx-12 mt-12 lg:mx-40 md:mx-20">
      <Helmet>
        <title>History</title>
        <meta
          name="description"
          content={`The history bills appear here. There are currently ${billList.length} bills in this page now.`}
        />
      </Helmet>
      <div className="text-white text-2xl m-16">HISTORY</div>
      <TableComponent
        key="table-component-key"
        headerList={['ID', 'TITLE', 'TOTAL']}
        bodyList={billList.map((bill, index) => {
          return <BillItemComponent bill={bill} index={index + 1} key={`${index}-${bill.id}`} />;
        })}
      />

      <Pagination
        pagesCount={defaultPage}
        pageRangeDisplayed={5}
        onChange={(selected) => {
          goToNextPage(selected.selected);
        }}
      />
    </div>
  );
};
