import { ProductPageList } from "../../model/product_list/product_list";

export interface ProductCardEntity {
  id: number;
  url: string;
  name: string;
  publisher: string;
  platform: string[];
  price: string;
}

export function convertProductsModelToEntity(
  productListModel: ProductPageList
) {
  var productEntites: ProductCardEntity[] = [];
  productListModel.results.forEach((product) => {
    var productEntity: ProductCardEntity = {
      id: product.id,
      name: product.name,
      price: "$00.00",
      url: product.background_image,
      publisher: "",
      platform: [],
    };
    productEntites.push(productEntity);
  });
  return productEntites;
}
