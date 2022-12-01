import { HomeIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';
import { BreadCrumbComponent } from '../../component/breadcrumb';

export const AddAdminComponent = () => {
  return (
    <div>
      <div className="mb-1 shadow-sm">
        <BreadCrumbComponent
          key="bread-crumb-component-key"
          list={[
            { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
            {
              name: 'Accounts',
              icon: <UserIcon className="w-4 h-4" />,
              path: '/admin/accounts',
            },
            { name: 'Add New Admin', icon: <PlusIcon className="w-4 h-4" /> },
          ]}
        />
      </div>
    </div>
  );
};
