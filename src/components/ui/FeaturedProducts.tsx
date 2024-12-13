import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types/ProductType";
import LoadingData from "./LoadingData";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.data;
  // console.log(data.data);
  if (isLoading) {
    return <LoadingData></LoadingData>;
  }
  return (
    //! It will feature last 4 newly added products
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      {Array.isArray(products) && products.length !== 0 ? (
        products
          .slice(Math.max(products.length - 4, 0), products.length)
          .reverse()
          .map((product: TProduct) => (
            <ProductCard key={product.productName} product={product} />
          ))
      ) : (
        <div>
          <span className="text-3xl font-bold opacity-65 text-orange-400">
            Products Will be added soon
          </span>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
