import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { News } from '../../../../model/news_model';
import { TemplateNews } from './components';
import * as NewsService from '../../../../services/news/news';

export const DetailNewsPage = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const [news, setNews]: [News | undefined, (news: News) => void] = useState();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);

  useEffect(() => {
    if (newsId !== undefined) {
      NewsService.getNewsById(newsId).then((news) => {
        setNews(news);
        setLoading(false);
      });
    }
  }, [newsId]);
  return <div>{loading ? null : news ? <TemplateNews news={news} /> : null}</div>;
};
