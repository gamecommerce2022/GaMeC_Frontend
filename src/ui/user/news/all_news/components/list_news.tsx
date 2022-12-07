import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { News } from '../../../../../model/news_model';
import { Pagination } from '../../../../global/component/pagination';
import { NewsCard } from './news_card';
import * as NewsSerivce from '../../../../../services/news/news';

export const ListNews = () => {
  const [searchParams] = useSearchParams();
  const defaultNewsList: News[] = [];
  const [defaultPage, setDefaultPage]: [number, (defaultPage: number) => void] = useState(0);
  const [newsList, setNewsList]: [News[], (news: News[]) => void] = useState(defaultNewsList);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [query, setQuery] = useState<string>();
  const [sortBy, setSortBy] = useState<number | null>();

  useEffect(() => {
    // TODO - get products
    const strSortBy = searchParams.get('sortBy') as string;
    const query = searchParams.get('q') || '';
    setSortBy(parseInt(strSortBy));
    setQuery(query === null ? '' : query);
    NewsSerivce.getTotalPage(30, query).then((length) => {
      setDefaultPage(length);
    });
    NewsSerivce.get(0, 30, sortBy, query).then((products) => {
      setNewsList(products);
      setLoading(false);
    });
  }, [searchParams]);

  function goToNextPage(page: number) {
    setLoading(true);
    NewsSerivce.get(page, 30, sortBy, query).then((products) => {
      setNewsList(products);
      setLoading(false);
    });
  }

  return (
    <div className="px-6 py-10 mx-auto">
      {loading ? null : (
        <div>
          {/** Product List */}
          <div className="text-3xl font-semibold capitalize lg:text-4xl text-white">
            {Array.isArray(newsList)
              ? newsList.map((news) => {
                  return (
                    <NewsCard
                      id={news._id || '1234567'}
                      title={news.title}
                      type={news.category}
                      author={news.author || ''}
                      date={news.date}
                      shortDescription={news.shortDescription}
                      mainImage={news.mainImage}
                    />
                  );
                })
              : null}
          </div>
        </div>
      )}

      {/** Pagging */}
      <div className="flex justify-center items-center w-full">
        <Pagination
          pagesCount={defaultPage}
          pageRangeDisplayed={5}
          onChange={(selected) => {
            goToNextPage(selected.selected);
          }}
        />
      </div>
    </div>
  );
};
