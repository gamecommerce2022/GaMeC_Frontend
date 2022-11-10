import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../../model/product_model";
import { ProductPageTemplate } from "./product_template";

export interface IGamePageProps {}

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const defaultProduct: Product = {
    _id: "",
    short_image: "",
    price_after: "",
    price_before: "",
    image_list: [],
    title: "",
    type: "",
    max_player: "",
    release_date: "",
    language: "",
    addition_info: "",
    description: [],
    addtion_images: [],
    videos: [],
    platform: "",
    rate: 0,
    comment: [],
    like: 0,
    dislike: 0,
  };
  const [product, setProduct]: [Product, (products: Product) => void] =
    useState(defaultProduct);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/get/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resoucre Not Found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>{loading ? null : <ProductPageTemplate product={product} />}</div>
  );
};
