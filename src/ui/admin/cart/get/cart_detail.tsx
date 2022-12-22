import { HomeIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { BillDetailedItemComponent } from '../../../user/user_info/component';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { TableComponent } from '../../component/table';

export const CartDetailComponent = (props: any) => {
  const cartId = useParams<{ cartId: string }>();
  let billDetailedList: any[] = [];
  let date = '21/12/2022';
  let total = 10000000;
  let customerName = 'Nguyen Van A';
  let customerPhoneNumber = '012345678';
  let status = 'IN PROGRESS';
  return (
    <div className="relative">
      <div className="mb-1 shadow-sm">
        <BreadCrumbComponent
          key="bread-crumb-component-key"
          list={[
            { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
            {
              name: 'Carts',
              icon: <ShoppingCartIcon className="w-4 h-4" />,
              path: '/admin/carts',
            },
            { name: 'View Cart', icon: <TruckIcon className="w-4 h-4" /> },
          ]}
        />
      </div>

      <div className="text-white text-2xl mt-16 mb-8 mx-16">BILL IN {date}</div>
      <div className="text-white text-2xl mb-8 mt-8 mx-16">
        {customerName} - {customerPhoneNumber}
      </div>
      <div className="text-white text-2xl mb-16 mt-8 mx-16">Status: {status}</div>
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
