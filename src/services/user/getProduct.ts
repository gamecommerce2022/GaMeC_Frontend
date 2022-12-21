import { UserProductStatus } from "../../data/status"
import { Product } from "../../model/product_model"
import { NavigateFunction  } from 'react-router-dom'


export const updateUserProduct = async ({
    userId,
    product,
    status,
    navigation,
  }: {
    userId: string
    product: Product
    status: UserProductStatus
    navigation: NavigateFunction
  }) => {    
    if (!userId) return navigation('/signin')
  
    // Update User Product         
    return true
  }