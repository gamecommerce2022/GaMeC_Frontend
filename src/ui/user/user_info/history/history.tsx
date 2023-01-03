import { useEffect, useState } from 'react';
import { User } from '../../../../model/user_model';
import { IBill } from '../../../admin/cart/get/cart_item';
import { TableComponent } from '../../../admin/component/table';
import { Pagination } from '../../../global/component/pagination/pagination';
import { BillItemComponent } from '../component';
import UserUtils from '../../../../utils/user_utils';
import { CheckoutUtils } from '../../../../utils/checkout_utils';
import axios from 'axios';
export const UserHistoryPage = () => {
  const [defaultPage, setDefaultPage] = useState(0);
  const [bills, setBills] = useState<IBill[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  function goToNextPage(page: number) {}

  // if (billList.length === 0) {
  //   return (
  //     <EmptyList
  //       title="Your history is empty"
  //       description="You haven't bought anything yet"
  //       buttonText="back to store"
  //       linkTo="/"
  //     />
  //   );
  // }
  useEffect(() => {
    const getBill = async () => {
      const user = await UserUtils.getCurrentUser();
      setCurrentUser(user);
      const bills = await CheckoutUtils.getAllCheckoutSessions(user.email, 0, 5, 1);

      setBills(bills);
    };
    getBill();
  }, []);

  return (
    <div className="flex flex-col mx-12 mt-12 lg:mx-40 md:mx-20">
      <div className="text-white text-2xl mt-16">HISTORY</div>
      <TableComponent
        key="table-component-key"
        headerList={['ID', 'DATE', 'TOTAL', 'PAYMENT STATUS']}
        bodyList={bills.map((bill, index) => {
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
