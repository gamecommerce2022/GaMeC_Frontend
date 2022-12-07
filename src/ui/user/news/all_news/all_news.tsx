import { ListNews, NewsSortList, SearchItem } from './components';

export const AllNewsPage = () => {
  return (
    <div className="flex flex-col mx-12 mt-12">
      <div className="flex items-center space-x-20 mt-2 mb-2 lg:mx-40 md:mx-20">
        <SearchItem />
        <NewsSortList />
      </div>
      <ListNews />
    </div>
  );
};
