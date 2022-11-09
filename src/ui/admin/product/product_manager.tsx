import { useEffect, useState } from 'react';
import { Product } from '../../../model/product_model';
import * as ProductService from '../../../services/product/product';
import { Pagination } from '../../global/component/pagination';
import { ProductItem } from './product_item';

export const ProductManager = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    try {
      ProductService.getTotalPage(30).then(
        (response) => {
          setTotalPage(response)
        }
      )
      ProductService.get(0, 30).then(
        (response) => {
          setProducts(response);
          setLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  function goToNextPage(page: number) {
    console.log(`GO TO PAGE ${page}`)
    setLoading(true)
    ProductService.get(page, 30).then((response) => {
      setProducts(response)
      setCurrentPage(page)
      setLoading(false)
    })
   }


  return (<div className="bg-white">
    Product Manager
    
<div className="overflow-x-auto relative shadow-md sm:rounded-lg h-[700px]">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
                <th scope="col" className="py-3 px-6">
                    ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Title
                </th>
                <th scope="col" className="py-3 px-6">
                    Platform
                </th>
                <th scope="col" className="py-3 px-6">
                    Image
                </th>
                <th scope="col" className="py-3 px-6">
                    Price Before
                </th>
                <th scope="col" className="py-3 px-6">
                    Price After
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
           {
            products.map((product, index) => {
              return <ProductItem product={product} index={index + 1} />
            })
           }
        </tbody>
    </table>
</div>

  {/** Pagging */}
  <div className="flex justify-center items-center w-full overflow-hidden">
    <Pagination
     pagesCount={totalPage}
     pageRangeDisplayed={5}
     initialPage={currentPage}
     onChange={(selected) => {
      goToNextPage(selected.selected)
     }}
    />
    
   </div>

  </div>)
}