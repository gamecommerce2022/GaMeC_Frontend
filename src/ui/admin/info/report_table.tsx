/* eslint-disable react-hooks/exhaustive-deps */
import { ChatBubbleOvalLeftEllipsisIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { BreadCrumbComponent } from '../component/breadcrumb';
import { TableComponent } from '../component/table';
import { ReportItemComponent } from './report_item';
import * as ReportService from '../../../services/info/report';
import { ReportModel } from '../../../model/report_model';
import { Pagination } from '../../global/component/pagination/pagination';

export const ReportTableComponent = () => {
  const [reportList, setReportList] = useState<ReportModel[]>([]);
  const [totalPage, setTotalPage] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 30;
  useEffect(() => {
    try {
      setTimeout(async () => {
        getLength(perPage);
        getReportList(0, perPage);
      }, 0);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function getReportList(page: number, perPage: number) {
    ReportService.get(perPage || 30, page || 0).then((response) => {
      setReportList(response);
    });
  }

  function getLength(perPage: number) {
    ReportService.getLength(perPage || 30).then((response) => {
      setTotalPage(response);
    });
  }

  return (
    <div>
      <BreadCrumbComponent
        key="bread-crumb-component-key"
        list={[
          { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
          { name: 'Report', icon: <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4" /> },
        ]}
      />
      <div className="relative">
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

        {/** Pagging */}
        <div className="grid grid-cols-3 w-full overflow-hidden mt-2">
          <div className="truncate text-sm">
            {' '}
            <span className="font-bold">Show:</span> {currentPage * perPage + 1} -{' '}
            {currentPage === Math.floor(totalPage)
              ? totalPage * perPage
              : currentPage * perPage + perPage}{' '}
            / {Math.floor(totalPage * perPage)}
          </div>
          <Pagination
            className="place-items-center"
            pagesCount={totalPage}
            pageRangeDisplayed={5}
            initialPage={currentPage}
            onChange={(selected) => {
              setCurrentPage(selected.selected);
              getReportList(selected.selected, perPage);
            }}
          />
        </div>
      </div>
    </div>
  );
};
