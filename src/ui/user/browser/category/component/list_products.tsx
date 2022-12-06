import { useEffect, useState } from 'react';
import { Pagination } from '../../../../global/component/pagination';
import { ProductItem } from '../component';
import { Game } from '../../../../../model/product_model';
import * as ProductService from '../../../../../services/product/product';
import { useSearchParams } from 'react-router-dom';
import { discountCalc, withCurrency } from '../../../../../utils/product_utils';

export const ListProducts = () => {
  const [searchParams] = useSearchParams();
  const defaultProducts: Game[] = [];
  const [defaultPage, setDefaultPage]: [number, (defaultPage: number) => void] = useState(0);
  const [products, setProducts]: [Game[], (products: Game[]) => void] = useState(defaultProducts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [query, setQuery] = useState<string | null>();
  const [sortBy, setSortBy] = useState<string | null>();

  useEffect(() => {
    // TODO - get products
    const sortBy = searchParams.get('sortBy');
    const query = searchParams.get('q') || '';
    setSortBy(sortBy);
    setQuery(query);
    ProductService.getTotalPage(30).then((length) => {
      console.log(length);
      setDefaultPage(length);
    });
    ProductService.get(0, 30, undefined, query).then((products) => {
      console.log(products);
      setProducts(products);
      setLoading(false);
    });
  }, [searchParams]);

  function goToNextPage(page: number) {
    setLoading(true);
    ProductService.get(page, 30, undefined, query).then((products) => {
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
                      id={product._id!}
                      name={product.title}
                      img={product.imageList![0]}
                      price={discountCalc(product.discount, product.price)}
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
