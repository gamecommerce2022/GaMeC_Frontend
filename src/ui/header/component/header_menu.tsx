import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const HeaderMenu: React.FC = () => {
 return (<div className=''>
  <Menu as='div' className='w-56'>
   <Menu.Button className='inline-flex'>More <ChevronDownIcon
    className="ml-2 -mr-1 h-5 w-5 text-violet-500 hover:text-violet-100"
    aria-hidden="true"
   /></Menu.Button>
   <Menu.Items>
    <Menu.Item>
     {({ active }) => (
      <a
       className={`${active && 'bg-blue-500'}`}
       href="/account-settings"
      >
       Account settings
      </a>
     )}
    </Menu.Item>
    <Menu.Item>
     {({ active }) => (
      <a
       className={`${active && 'bg-blue-500'}`}
       href="/account-settings"
      >
       Documentation
      </a>
     )}
    </Menu.Item>
    <Menu.Item disabled>
     <span className="opacity-75">Invite a friend (coming soon!)</span>
    </Menu.Item>
   </Menu.Items>
  </Menu>
 </div>)
}

export default HeaderMenu;