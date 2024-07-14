// import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
// import { Link } from "react-router-dom";
import { TProduct } from "../types/ProductType";
import ProductCard from "@/components/ui/ProductCard";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const productData = data?.data;

  return (
    <div>
      {isLoading ? <span>Loading</span> : ""}

      <div className="grid lg:grid-cols-2  grid-cols-1 gap-10">
        {productData?.map((product: TProduct) => (
          <div className="col-span-1">
            <ProductCard product={product}></ProductCard>
          </div>
          // console.log(product.productName)
        ))}
      </div>

      {/* <Button>
        <Link to={"/single-product"}>Single product</Link>
      </Button> */}
    </div>
  );
};

export default AllProducts;
