import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ProductGenresListComponent,
  ProductListComponent,
} from "./component/component";

export const ProductListPage = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  // const [nextUrl, setNextUrl] = useState<string>('');

  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //  const getProducts = async () => {
  //   const res = await axios.get("https://api.rawg.io/api/games?key=79696f0d5de243dd8f873c69c0ea6fce&page=1");
  //   setNextUrl(res.data.next);
  //   res.data.results.forEach(async (product: Product) => {
  //    setProducts((p) => [...p, product]);
  //    setLoading(false);
  //   })
  //  }
  //  getProducts();
  // }, []);

  // const loadMore = async () => {
  //  setLoading(true);
  //  let res = await axios.get(nextUrl);
  //  setNextUrl(res.data.next);

  //  res.data.results.forEach(async (product: Product) => {
  //   setProducts((p) => [...p, product]);
  //   setLoading(false);
  //  })
  // }

  return (
    <div className="px-36 py-16 flex flex-row space-x-8 bg-black">
      <ProductListComponent />

      <ProductGenresListComponent />
    </div>
  );
};
