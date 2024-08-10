export type TProduct = {
  _id?: string;
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
  _id?: string;
  productName: null | string;
  category: null | string;
  stockQuantity?: null | number;
  quantity?: number;
  brand: null | string;
  rating?: null | number;
  productDescription: null | string;
  price: null | number;
  image: null | string;
};
