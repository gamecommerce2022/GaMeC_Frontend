import { Comment } from "../../../../../model/comment";




export const ReviewCard = ({
  authorName, content, date
}: Comment) => (
  <div className="p-3 bg-[#404040] rounded-xl group">
    <div className="flex">
      <div className="flex flex-col ml-3">
        <div className="text-lg text-gray-300">{authorName}</div>
        <div className="text-sm text-gray-200">{(date!.substring(0,10))}</div>
      </div>
    </div>
    <div className="max-w-md mt-2 text-gray-300">{content}</div>
    {/* <div className="flex items-baseline justify-between my-2 text-xs text-gray-300">
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
    </div> */}
  </div>
);
