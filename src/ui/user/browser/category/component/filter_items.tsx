import { Disclosure, Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUrlLink, getUrlMapLink } from '../../../../../utils/nav_utils';

interface FilterItemProps {
  title: string;
  tag: string;
  filters: { id: number; name: string }[];
  selected: { id: number; name: string }[];
  setSelected: Dispatch<SetStateAction<{ id: number; name: string }[]>>;
}

export const FilterItems: React.FC<FilterItemProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Listbox
      value={props.selected}
      onChange={(value: { id: number; name: string }[]) => {
        let items: string[] = [];
        for (var item of value) {
          items.push(item.name);
        }
        console.log(window.location.href);
        let itemsPath = items.length >= 1 ? `${props.tag}=${items.join('|')}` : null;
        let urlPath = getUrlLink(props.tag, itemsPath);

        navigate(`/browse?${urlPath}`, { replace: true });
        props.setSelected(value);
      }}
      multiple
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full h-12 justify-between items-center rounded-lg bg-gray-900 px-4 py-2 group">
              <span className="text-left font-medium text-gray-600 group-hover:text-gray-300">
                {props.title}
              </span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-gray-600 group-hover:text-gray-300`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="text-sm text-gray-500">
              <Listbox.Options className="flex flex-col space-y-2 list-none px-2">
                {props.filters.map((item) => (
                  <Listbox.Option key={item.id} value={item}>
                    {({ selected }) => (
                      <div
                        className={`w-full h-12 rounded px-4 flex items-center justify-between ${
                          selected
                            ? 'bg-gray-600 opacity-75 border-2 border-white'
                            : 'bg-transparent'
                        }`}
                      >
                        <span
                          className={`block truncate ${
                            selected
                              ? 'font-medium text-white'
                              : 'font-normal text-gray-600 hover:text-white'
                          }`}
                        >
                          {item.name}
                        </span>
                        {selected ? <CheckIcon className="w-4 h-4 text-white block" /> : null}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Listbox>
  );
};
