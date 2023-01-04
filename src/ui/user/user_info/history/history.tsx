import { useEffect, useState } from 'react';
import { User } from '../../../../model/user_model';
import { IBill } from '../../../admin/cart/get/cart_item';
import { TableComponent } from '../../../admin/component/table';
import { Pagination } from '../../../global/component/pagination/pagination';
import { BillItemComponent } from '../component';
import UserUtils from '../../../../utils/user_utils';
import { CheckoutUtils } from '../../../../utils/checkout_utils';
import { EmptyList } from '../../../global/component/emptylist/empty_list';
export const UserHistoryPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [defaultPage, setDefaultPage] = useState(0);
  const [bills, setBills] = useState<IBill[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  async function searchText(email: string, page: number, perPage: number, sort: number) {
    const response = await CheckoutUtils.getAllCheckoutSessions(email, page, perPage, sort);
    setBills(response);
  }
  async function getTotalPages(email: string) {
    const response = await CheckoutUtils.getAllCheckoutSessions(email, 0, 1000, 1);
    setTotalPage(response.length / 5);
  }
  useEffect(() => {
    const getBill = async () => {
      const user = await UserUtils.getCurrentUser();
      setCurrentUser(user);
      // const bills = await CheckoutUtils.getAllCheckoutSessions(user.email, 1, 10, 1);
      // setBills(bills);
      getTotalPages(user.email);
      searchText(user.email ?? '', currentPage, 5, 1);
    };
    getBill();
  }, []);

  if (bills.length === 0) {
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
      <div className="text-white text-2xl mt-16">PURCHASE HISTORY</div>
      <TableComponent
        key="table-component-key"
        headerList={['ID', 'DATE', 'TOTAL', 'PAYMENT STATUS']}
        bodyList={bills.map((bill, index) => {
          return <BillItemComponent bill={bill} index={index + 1} key={`${index}-${bill.id}`} />;
        })}
      />

      <Pagination
        pagesCount={totalPage}
        initialPage={currentPage}
        pageRangeDisplayed={5}
        onChange={(selected) => {
          console.log(selected);

          searchText(currentUser?.email || '', selected.selected, 5, 1);
        }}
      />
    </div>
  );
};
