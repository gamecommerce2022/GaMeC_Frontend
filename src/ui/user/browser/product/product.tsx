import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../../../../model/product_model';
import { ProductPageTemplate } from './product_template';

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
  const { id } = useParams<{ id: string }>();
  const [product, setProduct]: [Game, (products: Game) => void] = useState(defaultGame);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/get/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404 ? 'Resoucre Not Found' : 'An unexpected error has occurred';
        setError(error);
        setLoading(false);
      });
  }, []);
  return <div>{loading ? null : <ProductPageTemplate product={product} />}</div>;
};
