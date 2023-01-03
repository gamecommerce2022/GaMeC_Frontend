import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../../model/product_model';
import { TableComponent } from '../../../admin/component/table';
import { ProductDetailedItemComponent } from '../component';

export const HistoryDetailPage = () => {
  const billId = useParams<{ billId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  let billDetailedList: any[] = [];
  let date = '21/12/2022';
  let total = 10000000;
  return (
    <div className="mx-12 mt-12 lg:mx-40 md:mx-20">
      <div className="text-white text-2xl m-16">BILL IN {date}</div>
      <TableComponent
        key="table-component-key"
        headerList={['ID', 'TITLE', 'TOTAL', 'PRICE', 'DISCOUNT']}
        bodyList={products.map((product, index) => {
          return (
            <ProductDetailedItemComponent
              product={product}
              index={index + 1}
              key={`${index}-${product.id}`}
            />
          );
        })}
      />
      <div className="text-white text-2xl m-16">TOTAL: {total}</div>
    </div>
  );
};
