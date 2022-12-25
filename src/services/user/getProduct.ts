import { UserProductStatus } from "../../data/status"
import { Product } from "../../model/product_model"
import { NavigateFunction  } from 'react-router-dom'
import { config, token } from "../cofig"
import { shoppingUrl } from "../url"
import axios from "axios"
import { getProductById } from "../product/get"


export const updateUserProduct = async ({
  produtId,
    status,
    navigation,
  }: {
    produtId: string
    status: UserProductStatus
    navigation: NavigateFunction
  }) => {    
    if (token === undefined) {
      navigation('/signin')
      return
    } 
    else {
      if(status === 'IN_WISHLIST'){
        let res = await axios.post(`${shoppingUrl}/add-to-favorites`,{"productId": produtId}, config)
        if(res.data.statusCode === 200){
          return navigation('/user/wishlist')
        } else {
          return false
        }
      }
      else if (status === 'REMOVED_FROM_WISHLIST') {
        let res = await axios.post(`${shoppingUrl}/remove-from-favorites`,{"productId": produtId}, config)
        if(res.data.statusCode === 200){
          return navigation(0)
        } else {
          return false
        }
      }
      else if (status === 'IN_CART'){
        let res = await axios.post(`${shoppingUrl}/add-to-carts`,{"productId": produtId}, config)
        if(res.data.statusCode === 200){
          return navigation('/user/cart')
        } else {
          return false
        }
      }
      else if (status === 'REMOVED_FROM_CART'){
        let res = await axios.post(`${shoppingUrl}/remove-from-carts`,{"productId": produtId}, config)
        if(res.data.statusCode === 200){
          return navigation(0)
        } else {
          return false
        }
      }
    }
  
    // Update User Product         
    return true
  }

  export const getWishlist = async (navigation: NavigateFunction) => {
    if (token === undefined) {
      navigation('/signin')
      console.log('Call token null')
      return []
    } 
    else {
      let res = await axios.get(`${shoppingUrl}/get-favorites`, config)
      let productIdList = res.data.data
      if(productIdList === undefined){
        console.log('Call List Null')
        return []
      } else {
        let productList : Product[] = []
        for(let i = 0; i<productIdList.length; i++){
          let product: Product = await getProductById(productIdList[i])
          productList.push(product)
        }
        console.log(productList)
        return productList
      }
    }
  }

  export const getCarts = async (navigation: NavigateFunction) => {
    if (token === undefined) {
      navigation('/signin')
      console.log('Call token null')
      return []
    } 
    else {
      let res = await axios.get(`${shoppingUrl}/get-carts`, config)
      let productIdList = res.data.data
      if(productIdList === undefined){
        console.log('Call List Null')
        return []
      } else {
        let productList : Product[] = []
        for(let i = 0; i<productIdList.length; i++){
          let product: Product = await getProductById(productIdList[i])
          productList.push(product)
        }
        console.log(productList)
        return productList
      }
    }
  }