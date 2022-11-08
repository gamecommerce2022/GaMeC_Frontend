export type Product = {
  _id: string;
  short_image: string;
  price_after: string;
  price_before: string;
  image_list: string[];
  title: string;
  type: string;
  max_player: string;
  release_date: string;
  language: string;
  addition_info: string;
  description: string[];
  addtion_images: string[];
  videos: string[];
  platform: string;
  rate: number;
  comment: {
    name: string;
    content: string;
    date: string;
  }[];
  like: number;
  dislike: number;
};
