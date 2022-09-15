import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '../../../lib/Classnames'
import { DropdownProps, DropDownType } from '../../../application/header_type/drop_down_type'

const HeaderSelector: React.FC<DropdownProps> = (dropdownProps) => {
 const props = dropdownProps.list;
 const [selected, setselected] = useState<DropDownType>(props[0])

 return (
  <div>
   <Listbox value={selected} onChange={setselected}>
    <Listbox.Button className='relative w-full cursor-default bg-transparent text-left text-white flex flex-row text-sm items-center'>
     <span className='block pl-2'>{selected.name}</span>
     <span className='relative pointer-events-none'>
      <ChevronDownIcon
       className='h-4 w-4'
       aria-hidden='true'
      />
     </span></Listbox.Button>

    <Transition
     as={Fragment}
     leave='transition ease-in duration-100'
     leaveFrom='opacity-100'
     leaveTo='opacity-0'>
     <Listbox.Options className={classNames('absolute max-h-48 overflow-auto rounded-md bg-white py-1 text-sm shadow-lg')}>
      {props.map((language) => (
       <Listbox.Option
        key={language.id}
        value={language}
        className={({ active }) => classNames(active ? 'text-blue-500' : 'text-gray-900', 'relative cursor-default select-none py-2 px-2')}
       >
        {({ selected }) => (
         <span
          className={`block truncate ${selected ? 'font-medium text-blue-500' : 'font-normal'
           }`}
         >
          {language.name}
         </span>
        )}
       </Listbox.Option>
      ))}
     </Listbox.Options>
    </Transition>

   </Listbox>
  </div>

 )
}
export default HeaderSelector;