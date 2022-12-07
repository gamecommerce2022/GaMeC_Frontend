import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../../../../model/product_model';
import { ProductPageTemplate } from './product_template';
import * as ProductService from '../../../../services/product/product';

export interface IGamePageProps {}

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct]: [Game | undefined, (products: Game) => void] = useState();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  useEffect(() => {
    if (productId !== undefined) {
      ProductService.getProductById(productId).then((product) => {
        setProduct(product);
        setLoading(false);
      });
    }
  }, [productId]);
  return <div>{loading ? null : product ? <ProductPageTemplate product={product} /> : null}</div>;
};
