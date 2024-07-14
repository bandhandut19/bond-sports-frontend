import { ObjectId } from "bson";
export type TProduct = {
  _id?: ObjectId;
  productName: string;
  category: string;
  stockQuantity?: number;
  brand: string;
  rating?: number;
  productDescription: string;
  price: number;
  image: string;
};
export type TProductSlice = {
  productName: null | string;
  category: null | string;
  stockQuantity?: null | number;
  brand: null | string;
  rating?: null | number;
  productDescription: null | string;
  price: null | number;
  image: null | string;
};
