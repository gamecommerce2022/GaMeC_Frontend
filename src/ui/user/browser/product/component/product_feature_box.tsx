interface ProductFeatureBoxProps {
 title: string
 value: string
}

export const ProductFeatureBox = ({ title, value }: ProductFeatureBoxProps) => (
 <div className='p-3 text-gray-400'>
  <div className='font-bold text-gray-200'>{title}</div>
  <div>{value}</div>
 </div>
)