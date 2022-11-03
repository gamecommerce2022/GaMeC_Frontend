import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { ProductCardComponent } from "./component";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import {
  ProductCardEntity,
  convertProductsModelToEntity,
} from "../../../../../entity/entity";
import { ProductPageList } from "../../../../../model/product_list/product_list";

export const ProductListComponent: React.FC = () => {
  const defaultProduct: ProductCardEntity[] = [];

  const [products, setProducts]: [
    ProductCardEntity[],
    (products: ProductCardEntity[]) => void
  ] = useState(defaultProduct);

  const [next, setNext] = useState("");

  const [prev, setPrev] = useState("");

  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    axios
      .get<ProductPageList>(
        "https://api.rawg.io/api/games?key=79696f0d5de243dd8f873c69c0ea6fce&page_size=32",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setNext(response.data.next);
        setPrev(response.data.previous);
        setProducts(convertProductsModelToEntity(response.data));
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
      });
  }, []);

  const loadNext = async () => {
    setProducts([]);
    let res = await axios.get(next);
    setNext(res.data.next);
    setPrev(res.data.previous);
    setProducts(convertProductsModelToEntity(res.data));
  };

  const loadPrev = async () => {
    setProducts([]);
    let res = await axios.get(prev);
    setNext(res.data.next);
    setPrev(res.data.previous);
    setProducts(convertProductsModelToEntity(res.data));
  };

  return (
    <div className="flex flex-col justify-center space-y-8 w-3/4 cursor-default select-none">
      <div className="grow-0 flex flex-row justify-between items-center h-7">
        <p className="text-2xl font-bold text-white">New Releases</p>

        <div className=" text-gray-400 flex flex-row items-center space-x-2">
          <div className="text-base font-medium">Sort By</div>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="grid grid-rows-4 grid-cols-4 gap-x-8 gap-y-7">
        {products.map((item) => (
          <ProductCardComponent
            url={item.url}
            name={item.name}
            publisher={item.publisher}
            platform={item.platform}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>

      {/** Paging */}
      <div className="grow-0 flex flex-row justify-center h-7 text-white space-x-4">
        <Button
          variant="outlined"
          color="blue-gray"
          className="flex items-center justify-center px-2 py-4"
          onClick={loadPrev}
        >
          {" "}
          <ArrowSmallLeftIcon className="w-8 h-8" />
        </Button>
        {/* <div className="flex content-center justify-center space-x-2">
     <div className="w-7 h-7 flex items-center justify-center bg-gray-600 hover:bg-blue-400">
      <p className="text-base font-bold">1</p>
     </div>
     <div className="w-7 h-7 flex items-center justify-center bg-gray-600 hover:bg-blue-400">
      <p className="text-base font-bold">1</p>
     </div>
     <div className="w-7 h-7 flex items-center justify-center bg-gray-600 hover:bg-blue-400">
      <p className="text-base font-bold">1</p>
     </div>
    </div> */}
        <Button
          variant="outlined"
          color="blue-gray"
          className="flex items-center justify-center px-2 py-4"
          onClick={loadNext}
        >
          {" "}
          <ArrowSmallRightIcon className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
};
