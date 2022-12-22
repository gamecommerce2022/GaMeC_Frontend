/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Pagination } from '../../../../global/component/pagination/pagination';
import { ProductItem } from '../component';
import { Product } from '../../../../../model/product_model';
import * as ProductService from '../../../../../services/product/product';
import { useSearchParams } from 'react-router-dom';

export const ListProducts = () => {
  const [searchParams] = useSearchParams();
  const defaultProducts: Product[] = [];
  const [defaultPage, setDefaultPage]: [number, (defaultPage: number) => void] = useState(0);
  const [products, setProducts]: [Product[], (products: Product[]) => void] =
    useState(defaultProducts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [query, setQuery] = useState<string>();
  const [sortBy, setSortBy] = useState<number | null>();

  useEffect(() => {
    // TODO - get products
    const strSortBy = searchParams.get('sortBy') as string;
    const query = searchParams.get('q') || '';
    setSortBy(parseInt(strSortBy));
    setQuery(query === null ? '' : query);
    ProductService.getTotalPage(30, query).then((length) => {
      setDefaultPage(length);
    });
    ProductService.get(0, 30, sortBy, query).then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, [searchParams]);

  function goToNextPage(page: number) {
    setLoading(true);
    ProductService.get(page, 30, sortBy, query).then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }

  return (
    <div className="flex flex-col space-y-4">
      {loading ? null : (
        <div>
          {/** Product List */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:grid gap-x-8 gap-y-8">
            {Array.isArray(products)
              ? products.map((product) => {
                  return (
                    <ProductItem
                      id={product.id!}
                      name={product.title}
                      img={product.imageList![0]}
                      price={product.price}
                      type={product.platform}
                      discount={product.discount || 0}
                    />
                  );
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
            goToNextPage(selected.selected);
          }}
        />
      </div>
    </div>
  );
};
