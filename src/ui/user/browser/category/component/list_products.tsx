import { useState } from "react";
import { Pagination } from "../../../../global/component/pagination";
import { ProductItem } from "../component";

import GenreImage from "../../../../../assets/games/CyberPunk2077.png";

const categoriesSort = [
  { id: 1, name: "All" },
  { id: 2, name: "New Release" },
  { id: 3, name: "Comming soon" },
  { id: 4, name: "Alphabetical" },
  { id: 5, name: "Price: High to Low" },
  { id: 6, name: "Price: Low to High" },
];

export const ListProducts = () => {
  const [selectedCategorySort, setSelectedCategorySort] = useState(
    categoriesSort[0]
  );
  return (
    <div className="flex flex-col space-y-4">
      {/** Product List */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:grid gap-x-8 gap-y-8">
        {Array(20)
          .fill(1)
          .map((item) => {
            return (
              <ProductItem
                id={"1"}
                name={"Evil Nun The Broken Mask"}
                img={GenreImage}
                price={100000}
                type={"Laptop/PC"}
                discount={0.1}
              />
            );
          })}
      </div>

      {/** Pagging */}
      <div className="flex justify-center items-center w-full">
        <Pagination
          pagesCount={43}
          pageRangeDisplayed={5}
          onChange={(selected) => {
            console.log(selected);
          }}
        />
      </div>
    </div>
  );
};
