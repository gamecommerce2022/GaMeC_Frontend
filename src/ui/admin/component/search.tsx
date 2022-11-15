import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export interface SearchProp {
  placeHolder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const SearchComponent: React.FC<SearchProp> = (props: SearchProp) => {
  return (
    <div className="w-full overflow-auto">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
          placeholder={props.placeHolder}
          required
          onChange={props.onChange}
        />
        <button
          type="button"
          className="text-blue-500 absolute right-2.5 bottom-2.5 bg-white hover:bg-gray-100 font-medium rounded-lg border border-gray-400 text-sm px-4 py-2 focus:text-white focus:bg-blue-500"
          onClick={props.onClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};
