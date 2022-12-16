export type Product = {
  _id?: string;
  title: string;
  type: string[];
  releaseDate: string;
  platform: string;
  maxPlayer?: number;
  total: number;
  status?: string;
  discount?: number;
  price: number;
  shortDescription?: string;
  note?: string;
  tags?: string[];
  imageList?: string[];
  videoList?: string[];
  description: string;
};
