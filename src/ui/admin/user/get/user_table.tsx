import { useEffect, useState } from 'react';
import * as UserService from '../../../../services/user/user';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { PlusIcon } from '@heroicons/react/20/solid';
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { TableComponent } from '../../component/table';
import { User } from '../../../../model/user_model';
import { UserItemComponent } from './user_item';

export const UserTableComponent = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    try {
      searchText();
    } catch (error) {
      console.log(error);
    }
  }, []);

  function searchText() {
    setLoading(true);
    UserService.get().then((response) => {
      setUserList(response);
      setLoading(false);
    });
  }

  return (
    <div className="">
      <BreadCrumbComponent
        key="bread-crumb-component-key"
        list={[
          { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
          { name: 'User', icon: <UserIcon className="w-4 h-4" /> },
        ]}
      />

      {/** Table */}
      <TableComponent
        key="table-component-key"
        headerList={['ID', 'NAME', 'DISPLAY NAME', 'EMAIL', 'ADDRESS', 'IS VERIFIED', 'ROLE', '']}
        bodyList={userList.map((user, index) => {
          return <UserItemComponent user={user} index={index + 1} key={`${index}-${user.id}`} />;
        })}
      />
    </div>
  );
};
