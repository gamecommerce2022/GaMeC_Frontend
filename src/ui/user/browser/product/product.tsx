import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../../../../model/product_model';
import { ProductPageTemplate } from './product_template';
import * as ProductService from '../../../../services/product/product'

export interface IGamePageProps {}

let defaultGame: Game = {
  _id: '',
  title: '',
  type: [],
  releaseDate: Date.now().toString(),
  platform: '',
  total: 0,
  priceDefault: 0,
  priceOffical: 0,
  description: "",
};

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct]: [Game, (products: Game) => void] = useState(defaultGame);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  useEffect(() => {
    if(productId !== undefined){
      ProductService.getProductById(productId).then((product) => {
        setProduct(product);
        setLoading(false);
      })
    }
    
  }, []);
  return <div>{loading ? null : <ProductPageTemplate product={product} />}</div>;
};
