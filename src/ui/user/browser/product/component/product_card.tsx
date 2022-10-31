import { Link, useNavigate } from 'react-router-dom'
import { Product } from '../../../../../model/product';
import { Badge, Price } from '../../../../component/component'

export interface IProductCardProps {
 product: Product
}

const KeyValue = ({ label, value }: { label: string; value: string }) => (
 <div className='flex justify-between py-2'>
  <div className='text-gray-400'>{label}</div>
  <div className='text-gray-200'>{value}</div>
 </div>
)

export const ProductCard = ({ product }: IProductCardProps) => {
 const getDate = (date: string) => new Date(date).toLocaleDateString()

 const values = [
  { label: 'Developer', value: product?.developer || '' },
  { label: 'Publisher', value: product.publisherId || '' },
  { label: 'Release Date', value: getDate(product.releaseDate) || '' },
  { label: 'Platform', value: 'Windows' },
 ]

 // const { uid } = useAppSelector(selectUser)
 const history = useNavigate()

 return (
  <div>
   <div className='mt-6 bg-primary aspect-w-16 aspect-h-9 bg-opacity-10'>
    <img
     className='object-contain object-center w-full p-2'
     src={product.subImageUrl}
     alt=''
    />
   </div>

   <Badge className='mt-4'>Base product</Badge>
   {!product.purchased && (
    <Price price={product.price} discount={product.discount} classes='mt-2' />
   )}
   {product.purchased ? (
    <Link
     to='/library'
     className='flex justify-center w-full mt-4 bg-primary btn btn-xl'
    >
     In Library
    </Link>
   ) : (
    <>
     <button
      className='w-full py-2 mt-4 bg-blue-500 btn btn-xl text-gray-50 rounded text-base'
      type='button'
      onClick={() => { }
       // updateUserGames({
       //  uid: uid || '',
       //  gameId: product.id,
       //  status:
       //   product.status === 'IN_CART' ? 'REMOVED_FROM_CART' : 'IN_CART',
       //  history,
       // })
      }
     >
      {product.inCart ? 'In Cart' : 'Add to cart'}
     </button>

     <button
      className='w-full py-2 mt-4 bg-blue-500 btn btn-xl text-gray-50 rounded text-base'
      type='button'
      onClick={() => { }
       // updateUserGames({
       //  uid: uid || '',
       //  gameId: product.id,
       //  status: product.wishlisted
       //   ? 'REMOVED_FROM_WISHLIST'
       //   : 'WISHLISTED',
       //  history,
       // })
      }
     >
      {product.wishlisted ? 'In Wishlist' : 'Wishlist'}
     </button>
    </>
   )}
   <div className='mt-2 text-sm divide-y divide-gray-700'>
    {values.map(({ label, value }) => (
     <KeyValue key={label} label={label} value={value} />
    ))}
   </div>
  </div>
 )
}
