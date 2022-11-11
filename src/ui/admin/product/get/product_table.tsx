import { Listbox, Switch, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Product } from '../../../../model/product_model';
import * as ProductService from '../../../../services/product/product';
import { Pagination } from '../../../global/component/pagination';
import { ProductItemComponent } from './product_item';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Breadcrumb } from 'flowbite-react';
import { BriefcaseIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { BreadCrumbComponent } from '../../component/breadcrumb';
import { SearchComponent } from '../../component/search';
import { TableComponent } from '../../component/table';

const filters = [
  { id: 1, name: "ID", value: "_id" },
  { id: 2, name: 'Title', value: "title" },
  { id: 3, name: 'Platform', value: "platform" },
  { id: 4, name: 'Price Before', value: "price_before" },
  { id: 5, name: 'Price After', value: "price_after" },
]

const maxPerPages = [20, 30, 40]



export const ProductTableComponent = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState(filters[0])
  const [isDES, setIsDES] = useState(false)
  const [search, setSearch] = useState("")
  const [perPage, setPerPage] = useState(maxPerPages[1])
  let navigate = useNavigate()
  useEffect(() => {
    try {
      getMaxPage()
      searchText()
    } catch (error) {
      console.log(error);
    }
  }, []);


  function searchText(page?: number, perPage?: number, filter?: string, isDES?: boolean, query?: string) {
    setLoading(true)
    ProductService.get(page || 0, perPage || 30, filter, isDES ? "DES" : "ASC", query).then((response) => {
      setProducts(response)
      setLoading(false)
    })
  }

  function getMaxPage(perPage?: number, query?: string) {
    ProductService.getTotalPage(perPage || 30, query).then(
      (response) => {
        setTotalPage(response)
      }
    )
  }


  return (<div className="">
    <BreadCrumbComponent key="bread-crumb-component-key" list={[{name: "Dashboard", icon: <HomeIcon className='w-4 h-4'/>, path: "/admin"}, {name: "Products", icon: <BriefcaseIcon className="w-4 h-4" />}]}/>  

    {/**Search Bar and Add Button */}
    <div className="grid grid-cols-6 relative my-2">
      <div className="col-span-2">
        <SearchComponent key="search-component-key" placeHolder='Search Product....' onChange={(e) => {          
            setSearch(e.target.value)
          }} onClick={() => {
            getMaxPage(perPage, search)
            searchText(currentPage, perPage, selectedFilter.value, isDES, search)
          }} />
      </div>

      <div className="grid grid-cols-3 p-2 col-span-3 items-center px-20">
        <div className='flex flex-row'>
          <span className="truncate font-bold mr-1">Sort by:</span>
          <Listbox value={selectedFilter} onChange={((value: { id: number, name: string, value: string }) => {
            setSelectedFilter(value)
            searchText(currentPage, perPage, value.value, isDES, search)
          })}>
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
                        `relative cursor-default select-none py-2 px-4 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                        }`
                      }
                      value={filter}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
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
        <div className='flex flex-row'>
          <span className="truncate font-bold mr-1">Limit:</span>
          <Listbox value={perPage} onChange={((value: number) => {
            setPerPage(value)
            getMaxPage(value, search)
            searchText(currentPage, value, selectedFilter.value, isDES, search)
          })}>
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
                        `relative cursor-default select-none py-2 px-4 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                        }`
                      }
                      value={perPage}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
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

        <div className='flex flex-row'>
          <span className={`truncate ml-3 mr-2 ${isDES ? 'font-medium text-gray-500' : 'font-bold text-gray-900'}`}>ASC</span>
          <Switch
            checked={isDES}
            onChange={((value: boolean) => {
              setIsDES(value)
              searchText(currentPage, perPage, selectedFilter.value, value, search)
            })}
            className={`${isDES ? 'bg-gray-700' : 'bg-gray-300'}
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Order</span>
            <span
              aria-hidden="true"
              className={`${isDES ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span className={`truncate mr-3 ml-2 ${isDES ? 'font-bold text-gray-900' : 'font-medium text-gray-500'}`}>DES</span>
        </div>


      </div>

      <div className="relative">
        <button type="button" className="absolute right-0 flex items-center justify-around text-blue-500 bg-white hover:bg-gray-100 font-medium rounded-lg border border-gray-400 text-sm truncate px-4 py-2 focus:text-white focus:bg-blue-500" onClick={() => {
          navigate('/admin/products/add')
        }}>
          <PlusIcon className='w-4 h-4 inline-block lg:pr-2' />
          ADD NEW PRODUCT</button>
      </div>



    </div>

    {/** Table */}   
    <TableComponent key="table-component-key" headerList={["ID", "TITLE", "PLATFORM", "IMAGE", "PRICE BEFORE", "PRICE AFTER", ""]} bodyList= {
            products.map((product, index) => {
              return <ProductItemComponent product={product} index={index + 1} key={`${index}-${product._id}`}  />
            })
          } />

    {/** Pagging */}
    <div className="grid grid-cols-3 w-full overflow-hidden mt-2">
      <div className="truncate text-sm"> <span className='font-bold'>Show:</span> {currentPage * perPage + 1} - {currentPage === Math.floor(totalPage) ? totalPage * perPage : currentPage * perPage + perPage} / {Math.floor(totalPage * perPage)}</div>
      <Pagination
        className='place-items-center'
        pagesCount={totalPage}
        pageRangeDisplayed={5}
        initialPage={currentPage}
        onChange={(selected) => {
          setCurrentPage(selected.selected)
          searchText(selected.selected, perPage, selectedFilter.value, isDES, search)
        }}
      />

    </div>

  </div>)
}