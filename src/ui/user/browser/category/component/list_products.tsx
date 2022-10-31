import { Listbox } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Pagination } from "../../../../global/component/pagination"
import { ProductItem } from "../component"

import GenreImage from '../../../../../assets/games/CyberPunk2077.png';

const categoriesSort = [
 { id: 1, name: 'All' },
 { id: 2, name: 'New Release' },
 { id: 3, name: 'Comming soon' },
 { id: 4, name: 'Alphabetical' },
 { id: 5, name: 'Price: High to Low' },
 { id: 6, name: 'Price: Low to High' }
]

export const ListProducts = () => {
 const [selectedCategorySort, setSelectedCategorySort] = useState(categoriesSort[0])
 return (<div className='flex flex-col space-y-4'>
  {/** Show Category Sort */}
  <div className='w-max mb-8'>
   <Listbox value={selectedCategorySort} onChange={setSelectedCategorySort}>
    <Listbox.Button className='relative cursor-default rounded-lg bg-transparent py-2 pl-3 pr-10 text-left shadow-md tracking-wide'>
     <span className="truncate text-gray-400 mr-2">Show:</span>
     <span className="truncate text-gray-200">{selectedCategorySort.name}</span>
     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
      <ChevronDownIcon
       className="h-4 w-4 text-gray-400"
       aria-hidden="true"
      />
     </span>
    </Listbox.Button>
    <Listbox.Options className="absolute list-outside list-none py-2 px-6 mt-1 max-h-64 w-max overflow-auto rounded bg-gray-700 text-sm shadow-lg z-10">
     {categoriesSort.map((sortType, sortTypeId) => (
      <Listbox.Option
       key={sortTypeId}
       className={({ active }) =>
        `relative cursor-default select-none py-1 ${active ? 'text-gray-200' : 'text-gray-500'
        }`
       }
       value={sortType}
      >
       {({ selected }) => (
        <span
         className={`block truncate font-medium  ${selected ? 'underline underline-offset-4 text-gray-200' : 'hover:underline hover:underline-offset-4 hover:text-gray-300'
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

  {/** Product List */}
  <div className='grid grid-cols-4 grid-rows-10 gap-6'>
   {Array(100).fill(1).map((item) => {
    return <ProductItem id={"1"} name={"Evil Nun The Broken Mask"} img={GenreImage} price={100000} type={"Laptop/PC"} discount={0.1} />
   })}
  </div>

  {/** Pagging */}
  <div className='flex justify-center items-center w-full'>
   <Pagination pagesCount={43} pageRangeDisplayed={5} onChange={(selected) => { console.log(selected) }} />
  </div>


 </div>)
}