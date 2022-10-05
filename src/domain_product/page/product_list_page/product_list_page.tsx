import { Link } from "react-router-dom"

const ProductListPage = () => {
 return (
  <div className="max-w-5xl py-4 flex flex-col">
   <Link to='/product/1000'>
    <div className="w-full px-2 py-1 h-40 bg-blue-gray-50">
     <h1>Product A</h1>
    </div>
   </Link>

   <Link to='/product/500'>
    <div className="w-full px-2 py-1 h-40 bg-blue-gray-100">
     <h1>Product B</h1>
    </div>
   </Link>

   <Link to='/product/700'>
    <div className="w-full px-2 py-1 h-40 bg-blue-gray-200">
     <h1>Product C</h1>
    </div>
   </Link>

   <Link to='/product/53454'>
    <div className="w-full px-2 py-1 h-40 bg-blue-400">
     <h1>Product D</h1>
    </div>
   </Link>

   <Link to='/product/104300'>
    <div className="w-full px-2 py-1 h-40 bg-blue-700">
     <h1>Product E</h1>
    </div>
   </Link>
  </div>
 )
}

export default ProductListPage;