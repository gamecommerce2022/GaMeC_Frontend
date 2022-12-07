import { News } from "../../../../../model/news_model";

export const TemplateNews = (props: {news: News}) => {
  return (
    <div className="my-20 mx-auto container">
      <div className="text-white text-2xl lg:text-4xl font-bold capitalize flex justify-center items-center">
        {props.news.title}
      </div>
      <div className="text-white text-sm sm:text-base flex items-center justify-center mt-2">
        {props.news.category}
      </div>
      <div className="text-white text-sm font-normal flex justify-center items-center mt-2">
        {props.news.shortDescription}
      </div>

      <div className="w-1/2 h-[120px] md:h-[360px] mx-auto my-8">
        <img
          className="object-cover w-full rounded-xl h-full"
          src={props.news.mainImage}
          alt={props.news.title}
        />
      </div>

      <div>
        {props.news.description.map((value) => (
          <div className="text-white text-sm lg:text-base">
            {value}
          </div>
        ))}
        <div className="text-white text-sm sm:text-base flex flex-cols items-center mt-4 space-x-2">
          <span>Bởi </span> <span className="font-bold">{props.news.author}</span>, lúc {' '}
          <div className="font-bold">{props.news.date}</div>
        </div>
      </div>
    </div>
  );
};
