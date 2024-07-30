import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductType";
import TopMarginSetter from "@/utils/TopMarginSetter";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Star, Database, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
const SingleProductPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) {
    return <span className="text-xl">Loading...</span>;
  }

  if (!data) {
    return <span className="text-xl">Product not found</span>;
  }

  const productInfo: TProduct = data?.data;

  const {
    image,
    productName,
    productDescription,
    rating,
    price,
    category,
    brand,
    stockQuantity,
  } = productInfo;

  // console.log(productInfo);

  return (
    <div>
      <div
        className="hero w-4/5 mx-auto rounded-lg rounded-b-none"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay  bg-opacity-52 rounded-b-none rounded-lg"></div>
        <div className="text-neutral-content text-center">
          <div className="max-w-md text-yellow-400">
            <h1 className="mb-5 lg:text-7xl text-2xl font-bold">
              {productName}
            </h1>
            <p className="mb-5">{productDescription}</p>
          </div>
        </div>
      </div>
      <div className="text-left flex flex-col items-center justify-center w-4/5 mx-auto bg-yellow-400 lg:px-36 px-2">
        <TopMarginSetter></TopMarginSetter>

        <Card className="min-w-full">
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 lg:text-left text-center">
            <div className="cursor-pointer">
              <span className="bg-yellow-400 px-5 rounded-md py-1 text-black font-bold">
                Category:{" "}
                <span className="font-semibold text-green-700">{category}</span>
              </span>
            </div>
            <div className=" flex lg:flex-row flex-col items-center space-x-4 rounded-md border p-4">
              <DollarSign />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Price:
                  <span className="text-green-700 font-bold"> {price} BDT</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  *Prices may change frequently
                </p>
              </div>
            </div>
            <div className=" flex lg:flex-row flex-col items-center space-x-4 rounded-md border p-4">
              <Store />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Brand:
                  <span className="text-green-700 font-bold"> {brand}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  *We sell only best brands sporting products
                </p>
              </div>
            </div>
            <div className=" flex lg:flex-row flex-col items-center space-x-4 rounded-md border p-4">
              <Star />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Rating:
                  <span className="text-green-700 font-bold"> {rating}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  *Rating depends on totally customers
                </p>
              </div>
            </div>
            <div className=" flex lg:flex-row flex-col items-center space-x-4 rounded-md border p-4">
              <Database />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Stock Quantity:
                  <span className="text-green-700 font-bold">
                    {" "}
                    {stockQuantity} remaining
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  *Stock is limited
                </p>
              </div>
            </div>

            <div></div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
        <TopMarginSetter></TopMarginSetter>
      </div>
    </div>
  );
};

export default SingleProductPage;