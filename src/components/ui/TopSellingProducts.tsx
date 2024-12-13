import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductType";
import LoadingData from "./LoadingData";
import { Card, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const TopSellingProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.data;
  const navigate = useNavigate();
  // console.log(data.data);
  if (isLoading) {
    return <LoadingData></LoadingData>;
  }
  const lowStockProducts = Array.isArray(products)
    ? products.filter(
        (product: TProduct) =>
          (product?.stockQuantity as number) <= 5 &&
          (product?.stockQuantity as number) != 0
      )
    : [];
  return (
    //! It will display lowest items left 4 products
    <div className="grid lg:grid-cols-4 grid-cols-3 gap-10">
      {Array.isArray(products) && products.length !== 0 ? (
        lowStockProducts.slice(0, 4).map((product: TProduct) => (
          <Card
            onClick={() => navigate(`/product/${product._id}`)}
            className="outline-none hover:scale-105 pr-0 pl-0 text-center bg-gradient-to-r from-yellow-500 to-orange-400 hover:bg-gradient-to-r hover:to-yellow-400 hover:from-orange-400 transition-all shadow-md hover:shadow-lg shadow-orange-600 hover:shadow-orange-700   hover:bg-orange-600 hover:border-l-0"
          >
            <div className="p-0 flex items-center justify-center rounded-md">
              <img
                className="rounded-md"
                src={product.image}
                alt="product image"
              />
            </div>

            <CardFooter className="flex gap-5 flex-col mt-10 items-center justify-center">
              <div className="flex gap-5">
                <span className="bg-white px-2 py-1 lg:py-0 rounded-md font-bold">
                  {product.category}
                </span>
                <span className="bg-green-600 px-2 lg:py-0 py-1 rounded-md text-white font-bold">
                  {product.price} Tk only
                </span>
              </div>
              <div>
                <span className="bg-blue-600 px-2 py-1 rounded-md text-white font-bold">
                  {product.stockQuantity} items left only
                </span>
              </div>
            </CardFooter>
            <div className="font-bold px-1 mb-5">{product.productName}</div>
          </Card>
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

export default TopSellingProducts;