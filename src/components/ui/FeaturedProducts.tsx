import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types/ProductType";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.data;
  // console.log(data.data);
  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    //! It will feature last 4 newly added products
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      {products
        ?.slice(products.length - 4, products.length)
        .map((product: TProduct) => (
          <ProductCard product={product}></ProductCard>
        ))}
    </div>
  );
};

export default FeaturedProducts;
