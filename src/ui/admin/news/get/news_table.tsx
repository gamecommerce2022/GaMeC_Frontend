import { Fragment, useEffect, useState } from 'react';
import { News } from '../../../../model/news_model';
import * as NewsService from '../../../../services/news/news';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { PlusIcon } from '@heroicons/react/20/solid';
import { HomeIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { SearchComponent } from '../../component/search';
import { Listbox, Transition } from '@headlessui/react';
import { TableComponent } from '../../component/table';
import { Pagination } from '../../../global/component/pagination';
import { NewsItemComponent } from './news_item';

const filters = [
  { id: 1, name: 'A - Z', value: 1 },
  { id: 2, name: 'Z - A', value: 2 },
  { id: 3, name: 'Old - New', value: 3 },
  { id: 4, name: 'New - Old', value: 4 },  
];

const maxPerPages = [20, 30, 40];

export const NewsTableComponent = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [search, setSearch] = useState('');
  const [perPage, setPerPage] = useState(maxPerPages[1]);
  let navigate = useNavigate();
  useEffect(() => {
    try {
      getMaxPage();
      searchText();
    } catch (error) {
      console.log(error);
    }
  }, []);

  function searchText(
    page?: number,
    perPage?: number,
    filter?: number,
    query?: string,
  ) {
    setLoading(true);
    NewsService.get(page || 0, perPage || 30, filter, query).then(
      (response) => {
        setNewsList(response);
        console.log(`News: ${response}`)
        setLoading(false);
      },
    );
  }

  function getMaxPage(perPage?: number, query?: string) {
    NewsService.getTotalPage(perPage || 30, query).then((response) => {
      setTotalPage(response);
    });
  }

  return (
    <div className="">
      <BreadCrumbComponent
        key="bread-crumb-component-key"
        list={[
          { name: 'Dashboard', icon: <HomeIcon className="w-4 h-4" />, path: '/admin' },
          { name: 'News', icon: <NewspaperIcon className="w-4 h-4" /> },
        ]}
      />

      {/**Search Bar and Add Button */}
      <div className="grid grid-cols-6 relative my-2">
        <div className="col-span-2">
          <SearchComponent
            key="search-component-key"
            placeHolder="Search News...."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onClick={() => {
              getMaxPage(perPage, search);
              searchText(currentPage, perPage, selectedFilter.value,search);
            }}
          />
        </div>

        <div className="grid grid-cols-3 p-2 col-span-3 items-center px-20">
          <div className="flex flex-row">
            <span className="truncate font-bold mr-1">Sort by:</span>
            <Listbox
              value={selectedFilter}
              onChange={(value: { id: number; name: string; value: number }) => {
                setSelectedFilter(value);
                searchText(currentPage, perPage, value.value, search);
              }}
            >
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default bg-white text-left sm:text-sm">
                  <span className="inline-block truncate">{selectedFilter.name}</span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm w-[120px] z-10">
                    {filters.map((filter, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 ${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                          }`
                        }
                        value={filter}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {filter.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className="flex flex-row">
            <span className="truncate font-bold mr-1">Limit:</span>
            <Listbox
              value={perPage}
              onChange={(value: number) => {
                setPerPage(value);
                getMaxPage(value, search);
                searchText(currentPage, value, selectedFilter.value, search);
              }}
            >
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default bg-white text-left sm:text-sm">
                  <span className="inline-block truncate">{perPage}</span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm w-[60px] z-10">
                    {maxPerPages.map((perPage, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 px-4 ${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                          }`
                        }
                        value={perPage}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {perPage}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

        </div>

        <div className="relative">
          <button
            type="button"
            className="absolute right-0 flex items-center justify-around text-blue-500 bg-white hover:bg-gray-100 font-medium rounded-lg border border-gray-400 text-sm truncate px-4 py-2 focus:text-white focus:bg-blue-500"
            onClick={() => {
              navigate('/admin/news/add');
            }}
          >
            <PlusIcon className="w-4 h-4 inline-block lg:pr-2" />
            ADD NEW NEWS
          </button>
        </div>
      </div>

      {/** Table */}
      <TableComponent
        key="table-component-key"
        headerList={['ID', 'TITLE', 'AUTHOR', 'DATE', '']}
        bodyList={newsList.map((news, index) => {
          return <NewsItemComponent news={news} index={index + 1} key={`${index}-${news._id}`} />;
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
            searchText(selected.selected, perPage, selectedFilter.value,  search);
          }}
        />
      </div>
    </div>
  );
};
