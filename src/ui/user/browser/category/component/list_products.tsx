import { useEffect, useState } from 'react'
import { Pagination } from '../../../../global/component/pagination'
import { ProductItem } from '../component'

import GenreImage from '../../../../../assets/games/CyberPunk2077.png'
import { Product } from '../../../../../model/product_model'
import axios from 'axios'

const categoriesSort = [
 { id: 1, name: 'All' },
 { id: 2, name: 'New Release' },
 { id: 3, name: 'Comming soon' },
 { id: 4, name: 'Alphabetical' },
 { id: 5, name: 'Price: High to Low' },
 { id: 6, name: 'Price: Low to High' },
]

export const ListProducts = () => {
 const [selectedCategorySort, setSelectedCategorySort] = useState(
  categoriesSort[0],
 )
 const defaultProducts: Product[] = []
 const [defaultPage, setDefaultPage]: [
  number,
  (defaultPage: number) => void,
 ] = useState(0)
 const [products, setProducts]: [
  Product[],
  (products: Product[]) => void,
 ] = useState(defaultProducts)
 const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<
  boolean
 >(true)
 const [error, setError]: [string, (error: string) => void] = useState('')

 useEffect(() => {
  // TODO - get products
  console.log('CALL EFFECT')
  axios
   .get('http://localhost:5000/api/v1/product/getLength/')
   .then((response) => {
    const totalPage = response.data.length / 30
    setDefaultPage(totalPage)
   })
  axios
   .get(`http://localhost:5000/api/v1/product/get/?p=0`, {
    headers: {
     'Content-Type': 'application/json',
    },
   })
   .then((response) => {
    setProducts(response.data.products)
    setLoading(false)
   })
   .catch((ex) => {
    const error =
     ex.response.status === 404
      ? 'Resoucre Not Found'
      : 'An unexpected error has occurred'
    setError(error)
    setLoading(false)
   })
 }, [])

 function goToNextPage(page: number) {
  console.log(`GO TO PAGE ${page}`)
  setLoading(true)
  axios
   .get(`http://localhost:5000/api/v1/product/get/?p=${page}`, {
    headers: {
     'Content-Type': 'application/json',
    },
   })
   .then((response) => {
    setProducts(response.data.products)
    setLoading(false)
   })
   .catch((ex) => {
    const error =
     ex.response.status === 404
      ? 'Resoucre Not Found'
      : 'An unexpected error has occurred'
    setError(error)
    setLoading(false)
   })
 }

 return (
  <div className="flex flex-col space-y-4">
   {loading ? null : (
    <div>
     {/** Product List */}
     <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:grid gap-x-8 gap-y-8">
      {Array.isArray(products)
       ? products.map((product) => {
        let discount = 0;
        let price = parseInt(product.price_before);
        if (product.price_before >= product.price_after) {
         discount = parseFloat(
          (
           1 -
           parseFloat(product.price_after) /
           parseFloat(product.price_before)
          ).toFixed(2),
         );
        } else {
         discount = 0;
         price = parseInt(product.price_after);
        }
        return (
         <ProductItem
          id={product._id}
          name={product.title}
          img={product.short_image}
          price={price}
          type={product.platform}
          discount={discount}
         />
        )
       })
       : null}
     </div>
    </div>
   )}

   {/** Pagging */}
   <div className="flex justify-center items-center w-full">
    <Pagination
     pagesCount={defaultPage}
     pageRangeDisplayed={5}
     onChange={(selected) => {
      goToNextPage(selected.selected)
     }}
    />
   </div>
  </div>
 )
}
