import React from "react"
import { Link, Navigate } from 'react-router-dom'
import { Facebook } from "@heroicons/react/24/outline"

export interface IGamePageFeatureBoxProps {
 title: string
 value: string
}

export const GamePageFeatureBox = ({ title, value }: IGamePageFeatureBoxProps) => (
 <div className='p-3'>
  <div className='text-gray-400'>{title}</div>
  <div>{value}</div>
 </div>
)

export interface ISpecificationsProps { }

const spec = {
 minimum: [
  { key: 'Windows OS', value: 'Windows 7 SP1+ (64bit)' },
  {
   key: 'Processor',
   value: 'Intel I3 4160 processor or equivalent Windows',
  },

  { key: 'RAM', value: 'Windows Memory 8 GB' },
  { key: 'Windows Storage', value: '20 GB available space' },
  { key: 'Graphics', value: 'NVIDIA GeForce GT 630 or equivalent Windows' },
 ],
 recommended: [
  { key: 'Windows OS', value: 'Windows 10 (64bit) Windows' },
  {
   key: 'Processor',
   value: 'Intel i7 4770 processor or equivalent Windows Memory 8 GB',
  },

  { key: 'RAM', value: 'Windows Memory 8 GB' },

  { key: 'Windows Storage', value: '20 GB available space' },

  {
   key: 'Graphics',
   value:
    'NVIDIA GeForce GTX 660 / Radeon HD 7850 or better Windows Other DX10 with Shader 4.0 support required',
  },
 ],
}

const Specifications = () => (
 <div className='grid grid-cols-2 gap-2 py-6'>
  <div>
   {spec.minimum.map((item) => (
    <div key={item.key} className='my-4'>
     <div className='text-gray-400'>{item.key}</div>
     <div className='mt-1 text-gray-100'>{item.value}</div>
    </div>
   ))}
  </div>
  <div>
   {spec.recommended.map((item) => (
    <div className='my-4' key={item.key}>
     <div className='text-gray-400'>{item.key}</div>
     <div className='mb-1 text-gray-100'>{item.value}</div>
    </div>
   ))}
  </div>
 </div>
)

export interface IReviewCardProps {
 reviewScore: number
 userName: string
 date: string
 review: string
 approvalRate: number
}

export const getScoreColor = (score: number) => {
 if (score > 90) return 'border-2 border-white'
 if (score > 80) return 'border-2 border-gray-200'
 if (score > 70) return 'border-2 border-gray-300 '
 if (score > 60) return 'border-2 border-gray-500 '
 if (score > 50) return 'border-2 border-gray-600 '
 return 'border-2 border-gray-700 '
 //   if (score > 20) return 'border-2 border-red-300'
}

const ReviewCard = ({
 reviewScore,
 userName,
 date,
 review,
 approvalRate,
}: IReviewCardProps) => (
 <div className='p-3 border border-gray-800 rounded-sm group'>
  <div className='flex'>
   <div
    className={`${getScoreColor(
     reviewScore
    )} shadow-lg rounded-full flex h-12 w-12 items-center justify-center`}
   >
    {reviewScore <= 100 ? reviewScore : 100}
   </div>
   <div className='flex flex-col ml-3'>
    <div className='text-lg'>{userName}</div>
    <div className='text-sm text-gray-200'>{date}</div>
   </div>
  </div>
  <div className='max-w-md mt-2'>{review}</div>
  <div className='flex items-baseline justify-between my-2 text-xs text-gray-300'>
   <div>{approvalRate}% helpful</div>
   <div className='opacity-0 group-hover:opacity-100'>
    <button
     type='button'
     className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20'
    >
    </button>
    <button
     type='button'
     className='inline-flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20'
    >
    </button>
   </div>
  </div>
 </div>
)

export const getRandomNumber = (min = 0, max = 100) => {
 const difference = max - min
 let rand = Math.random()
 rand = Math.floor(rand * difference)
 rand += min
 return rand
}

export interface IReviewSectionProps {
 averageRating: number
 count: number
 reviews: IReviewCardProps[]
}

const ReviewSection = ({
 averageRating,
 count,
 reviews,
}: IReviewSectionProps) => (
 <div className='my-6'>
  <div
   className={`items-baseline inline-block rounded-lg p-2 ${getScoreColor(
    averageRating
   )}`}
  >
   <span className='text-6xl font-light'>
    {averageRating <= 100 ? averageRating : 100}
   </span>
   <span className='text-lg text-gray-300'>/ 100</span>
  </div>

  <div className='mt-2 text-sm text-gray-400'>
   based on {count.toLocaleString()} reviews
  </div>
  <div className='mt-8 mb-2 text-xl'>Featured Reviews</div>
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


export interface IGamePageTemplateProps {
 game: any | null
 similarGames: []
}

const GamePageTemplate = ({ game, similarGames }: IGamePageTemplateProps) => {
 if (!game) <Navigate to='/404' />
 return (
  <div>
   {game && (
    <div>
     <div className='my-3 text-4xl'>{game.title}</div>
     <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
      <div className='order-2 md:col-span-2 md:order-1'>
       <div className='mt-6 bg-black aspect-w-16 aspect-h-9'>
        <img
         className='object-cover w-full h-full'
         src={game.imageUrl}
         alt=''
        />
       </div>
       <div className='my-4 text-lg'>{game.description}</div>
       <div className='grid grid-cols-2 my-4'>
        <GamePageFeatureBox
         title='Genres'
         value={game.tags.join(', ')}
        />
        <GamePageFeatureBox title='Features' value='-' />
        <GamePageFeatureBox
         title='Platforms'
         value={game.platform.join(', ')}
        />
       </div>
       <div className='my-6'>
        {game.longDesc?.map((item) => (
         <div
          key={item}
          className={`mb-2 ${item.length < 80
           ? 'mt-4 font-semibold'
           : 'text-gray-400 text-sm'
           }`}
         >
          {item}
         </div>
        ))}
       </div>
       <div className='my-6'>
        <div className='text-xl'>Specifications</div>
        <Specifications />
       </div>
       <div className='my-6'>
        <div className='text-xl font-semibold'>Reviews</div>
        <ReviewSection
         averageRating={getRandomNumber(0, 100)}
         count={getRandomNumber(3, 20000)}
         reviews={reviews}
        />
       </div>
      </div>
      <div className='order-1 col-span-1 md:order-2'>
       <div className='sticky top-24'>
        <GameCard05 game={game} />
       </div>
      </div>
     </div>
     <div className='my-6'>
      <div className='flex items-center gap-2'>
       <QuestionMarkCircleIcon className='w-5 h-5' />
       <a
        target='_blank'
        href='https://karthickragavendran.medium.com/a-quick-content-based-recommender-system-from-a-part-time-ml-guy-3ac37d4c2d5d'
        rel='noreferrer'
       >
        How do we calculate similarity?
       </a>
      </div>
      <GameCard01Section games={similarGames} heading='Similar Games' />
     </div>
    </>
   )}
  </div>
 )
}