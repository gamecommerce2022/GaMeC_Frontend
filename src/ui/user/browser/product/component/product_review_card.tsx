import { getScoreColor } from "../../../../../utils/product_utils";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";

export interface IReviewCardProps {
  reviewScore: number;
  userName: string;
  date: string;
  review: string;
  approvalRate: number;
}

export const ReviewCard = ({
  reviewScore,
  userName,
  date,
  review,
  approvalRate,
}: IReviewCardProps) => (
  <div className="p-3 bg-[#404040] rounded-xl group">
    <div className="flex">
      <div
        className={`${getScoreColor(
          reviewScore
        )} rounded-full flex h-12 w-12 items-center justify-center text-gray-200`}
      >
        {reviewScore <= 100 ? reviewScore : 100}
      </div>
      <div className="flex flex-col ml-3">
        <div className="text-lg text-gray-300">{userName}</div>
        <div className="text-sm text-gray-200">{date}</div>
      </div>
    </div>
    <div className="max-w-md mt-2 text-gray-300">{review}</div>
    <div className="flex items-baseline justify-between my-2 text-xs text-gray-300">
      <div>{approvalRate}% helpful</div>
      <div className="opacity-0 group-hover:opacity-100">
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 mr-2 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20 border-none"
        >
          <HandThumbUpIcon />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20 border-none"
        >
          <HandThumbDownIcon />
        </button>
      </div>
    </div>
  </div>
);
