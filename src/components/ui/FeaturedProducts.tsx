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
      {Array.isArray(products) && products.length !== 0 ? (
        products
          .slice(Math.max(products.length - 4, 0), products.length)
          .map((product: TProduct) => (
            <ProductCard key={product.productName} product={product} />
          ))
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default FeaturedProducts;
