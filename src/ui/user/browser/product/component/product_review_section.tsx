import { Comment } from '../../../../../model/comment';
import { ReviewCard } from './product_review_card';

export interface IReviewSectionProps {
  count: number;
  reviews: Comment[];
}

export const ProductReviewSection = ({ count, reviews }: IReviewSectionProps) => (
  <div className="mb-6 mt-2">

    <div className="mt-2 text-base text-gray-400">based on {count.toLocaleString()} reviews</div>
    <div className="mt-8 mb-2 text-xl text-gray-200">Featured Reviews</div>
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      {reviews.map((item) => (
        <ReviewCard
          key={item.authorId}
          authorName={item.authorName}
          authorId={item.authorId}
          content={item.content}
          date={item.date}
          idProduct={item.idProduct}
        />
      ))}
    </div>
  </div>
);
