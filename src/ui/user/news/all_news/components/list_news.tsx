import { NewsCard } from './news_card';

export const ListNews = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="px-6 py-10 mx-auto">
      <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white">From the blog</h1>
      {news.map((value) => (
        <NewsCard />
      ))}
    </div>
  );
};
