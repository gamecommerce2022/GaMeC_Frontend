import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { News } from '../../../../model/news_model';
import * as NewsService from '../../../../services/news/news';

export const NewsItemComponent: React.FC<{ index: number; news: News }> = (props: {
  index: number;
  news: News;
}) => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const closeShow = () => setShow(false);
  return (
    <tr className="bg-white hover:bg-gray-50">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 ">
        {props.index}
      </th>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.news.title}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.news.author}</td>
      <td className="py-4 px-6 font-medium text-gray-900 ">{props.news.date.substring(0, 10)}</td>
      <td className="py-4 px-6">
        <div className="flex flex-row h-full items-center justify-around">
          <PencilIcon
            className="w-4 h-4 text-blue-500 hover:text-orange-500"
            onClick={() => {
              navigate(`/admin/news/${props.news._id}`);
            }}
          />

          <TrashIcon className="w-4 h-4 text-blue-500 hover:text-orange-500" onClick={handleShow} />

          <div
            id="popup-modal"
            className={`${
              show
                ? 'overflow-y-auto overflow-x-hidden fixed  z-50 md:inset-0 h-modal md:h-full bg-gray-500/50 rounded'
                : 'hidden'
            } `}
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto m-auto top-1/4 opacity-100">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={closeShow}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this news?
                  </h3>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    onClick={async () => {
                      if (props.news._id) {
                        let res = await NewsService.deleteNews(props.news._id);
                        if (res === true) {
                          navigate(0);
                        } else {
                          closeShow();
                          console.log('Delete Product Failed');
                        }
                      } else {
                        closeShow();
                        console.log('Delete Product Failed');
                      }
                    }}
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    onClick={closeShow}
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
