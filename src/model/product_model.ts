export type Game = {
  _id?: string;
  title: string;
  type: string[];
  releaseDate: string;
  platform: string;
  maxPlayer?: number;
  total: number;
  status?: string;
  priceDefault: number;
  discount?: number;
  priceOffical: number;
  shortDescription?: string;
  note?: string;
  tags?: string[];
  imageList?: string[];
  videoList?: string[];
  description: string[];
  rate?: number;
  comment?: {
      name: string;
      content: string;
      date: string;
  }[];
  like?: number;
  dislike?: number;
};
