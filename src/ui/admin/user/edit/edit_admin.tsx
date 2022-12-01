import { HomeIcon, PencilIcon, UserIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { BreadCrumbComponent } from '../../component/breadcrumb';

export const EditAdminComponent = () => {
  const { accountId } = useParams<{ accountId: string }>();
  return (
    <div>
      <div className="mb-1 shadow-sm">
        <BreadCrumbComponent
          key="bread-crumb-component-key"
          list={[
            { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
            {
              name: 'User',
              icon: <UserIcon className="w-4 h-4" />,
              path: '/admin/accounts',
            },
            { name: 'Edit Admin', icon: <PencilIcon className="w-4 h-4" /> },
          ]}
        />
      </div>
    </div>
  );
};
