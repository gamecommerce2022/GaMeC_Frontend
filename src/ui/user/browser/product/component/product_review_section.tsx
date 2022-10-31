import { getScoreColor } from "../../../../../utils/product_utils"
import { IReviewCardProps, ReviewCard } from "../component"

export interface IReviewSectionProps {
 averageRating: number
 count: number
 reviews: IReviewCardProps[]
}

export const ProductReviewSection = ({
 averageRating,
 count,
 reviews,
}: IReviewSectionProps) => (
 <div className='my-6 '>
  <div
   className={`items-baseline inline-block rounded-lg p-2 border-gray-200 ${getScoreColor(
    averageRating
   )}`}
  >
   <span className='text-6xl font-light text-gray-200'>
    {averageRating <= 100 ? averageRating : 100}
   </span>
   <span className='text-lg text-gray-300'>/ 100</span>
  </div>

  <div className='mt-2 text-sm text-gray-400'>
   based on {count.toLocaleString()} reviews
  </div>
  <div className='mt-8 mb-2 text-xl text-gray-200'>Featured Reviews</div>
  <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
   {reviews.map((item) => (
    <ReviewCard
     key={item.userName}
     reviewScore={item.reviewScore}
     date={item.date}
     userName={item.userName}
     review={item.review}
     approvalRate={item.approvalRate}
    />
   ))}
  </div>
 </div>
)
