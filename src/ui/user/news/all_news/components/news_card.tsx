import { Link } from 'react-router-dom';

export interface INewsCard {
  id: string
  title: string
  mainImage: string
  shortDescription: string
  author: string
  date: string
  type: string
}
export const NewsCard = (props: INewsCard) => {
  return (
    <Link to={`/user/news/${props.id}`} className="container mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src={props.mainImage}
        alt={props.title}
      />

      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm text-blue-500 uppercase">{props.type}</p>

        <span className="block mt-4 text-2xl font-semibold hover:underline text-white md:text-3xl">
          {props.title}
        </span>

        <p className="mt-3 text-sm text-gray-300 md:text-sm">
        {props.shortDescription}
        </p>

        <span className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">
          Read more
        </span>

        <div className="flex items-center mt-6">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
          />

          <div className="mx-4">
            <h1 className="text-sm text-gray-200">{props.author}</h1>
            <p className="text-sm text-gray-400">{props.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
