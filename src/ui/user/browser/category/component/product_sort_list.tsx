import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const categoriesSort = [
  { id: 1, name: 'All', tag: 'all' },
  { id: 2, name: 'Alphabetical', tag: 'alphabetical' },
  { id: 3, name: 'Price: High to Low', tag: 'priceHighLow' },
  { id: 4, name: 'Price: Low to High', tag: 'priceLowHigh' },
];

export const ProductSortList = () => {
  const [selectedCategorySort, setSelectedCategorySort] = useState(categoriesSort[0]);
  const [searchParams] = useSearchParams()
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Listbox 
        value={selectedCategorySort}
        onChange={(value: { id: number; name: string; tag: string }) => {
          let query = searchParams.get('q')
          navigate(`?sortBy=${value.tag}&q=${query}`, { replace: true });
          setSelectedCategorySort(value);
        }}
      >
        <Listbox.Button className="relative cursor-default rounded-lg bg-transparent py-2 pl-3 pr-10 text-left tracking-wide">
          <span className="truncate text-gray-400 mr-2">Show:</span>
          <span className="truncate text-gray-200">{selectedCategorySort.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute list-outside list-none py-2 px-6 mt-1 max-h-64 w-max overflow-auto rounded bg-gray-700 text-sm shadow-lg z-10">
          {categoriesSort.map((sortType, sortTypeId) => (
            <Listbox.Option
              key={sortTypeId}
              className={({ active }) =>
                `relative cursor-default select-none py-1 ${
                  active ? 'text-gray-200' : 'text-gray-500'
                }`
              }
              value={sortType}
            >
              {({ selected }) => (
                <span
                  className={`block truncate font-medium  ${
                    selected
                      ? 'underline underline-offset-4 text-gray-200'
                      : 'hover:underline hover:underline-offset-4 hover:text-gray-300'
                  }`}
                >
                  {sortType.name}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
      
  );
};
