export type TProduct = {
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
  message: null | string;
};
