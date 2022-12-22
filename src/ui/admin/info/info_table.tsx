import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { BreadCrumbComponent } from '../component/breadcrumb';
import { TableComponent } from '../component/table';
import { ReportItemComponent } from './report_item';

export const InfoTableComponent = () => {
  const [slogan, setSlogan] = useState('');
  const [description, setDescription] = useState('');
  let reportList: any[] = [];
  return (
    <div>
      <BreadCrumbComponent
        key="bread-crumb-component-key"
        list={[
          { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
          { name: 'Info', icon: <UserIcon className="w-4 h-4" /> },
        ]}
      />
      <div>
        <div className="flex gap-4 my-16">
          <div className="text-black text-xl">Slogan</div>
          <input
            type="text"
            value={slogan}
            onChange={(e) => {
              setSlogan(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-4 my-16">
          <div className="text-black text-xl">Description</div>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <TableComponent
          key="table-component-key"
          headerList={['ID', 'NAME', 'EMAIL', 'ADDRESS', 'PHONE NUMNBER', 'MESSAGE']}
          bodyList={reportList.map((report, index) => {
            return (
              <ReportItemComponent
                report={report}
                index={index + 1}
                key={`${index}-${report.id}`}
              />
            );
          })}
        />
      </div>
    </div>
  );
};
