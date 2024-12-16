/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ProductCategories,
  TProductCategories,
} from "@/types/ProductCategories";
import { TProduct } from "@/types/ProductType";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TopMarginSetter from "@/utils/TopMarginSetter";
import { toast } from "sonner";
import LoadingData from "@/components/ui/LoadingData";

const UpdateSingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [updateProduct] = useUpdateProductMutation();
  const productInfo: TProduct = data?.data;
  const [position, setPosition] = useState("Change Category");
  const { register, handleSubmit, reset, setValue } = useForm<TProduct>();
  if (isLoading) {
    return <LoadingData></LoadingData>;
  }
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
  const handleUpdateProducts = async (data: TProduct) => {
    try {
      const res = await updateProduct({
        id: id,
        updatedProductInfo: data,
      }).unwrap();
      toast(res.message);
      reset();
    } catch (error: any) {
      const res = error;
      console.log(res?.data?.error?.message);
      toast(res?.data?.error?.message);
    }
  };

  return (
    <div>
      <div className=" rounded-sm flex flex-col py-5 px-5 lg:px-10 bg-gradient-to-tr from-orange-300 to-yellow-300 justify-center items-center">
        <h1 className="mb-8 text-center cursor-pointer text-2xl w-9/12 mx-auto font-bold border-4 px-4 py-1 rounded-full bg-orange-600 border-l-0 border-t-0 border-slate-500 text-white border-e-6 ">
          Update : <span className="text-yellow-200">{productName}</span>
        </h1>
        <button
          onClick={() => navigate("/dashboard/updateproduct")}
          className="bg-orange-500 px-5 py-1 font-bold text-white"
        >
          ⬅️ Back
        </button>
        <div className="flex lg:gap-5 lg:flex-row flex-col justify-center items-center mt-5">
          <div className="mb-5 lg:-mt-28">
            <img
              src={image}
              className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit(handleUpdateProducts)}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="product-name" className="text-right">
                Product Name
              </Label>
              <Input
                id="product-name"
                {...register("productName")}
                className="col-span-3"
                defaultValue={productName}
                // placeholder="Enter Product Name here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>{" "}
              <div>
                <Input
                  id="product-name"
                  readOnly
                  value={category}
                  className="col-span-3"
                  placeholder="Enter Product Name here"
                />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="w-full col-span-3">
                    <Button
                      variant="outline"
                      className="bg-orange-500 font-bold text-white"
                    >
                      {position}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-4/5 mx-auto">
                    <DropdownMenuLabel>Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={(value: string) => {
                        setPosition(value as TProductCategories);
                        setValue("category", value);
                      }}
                    >
                      <DropdownMenuRadioItem
                        value={ProductCategories.CRICKET_KITS}
                      >
                        Cricket Kits
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value={ProductCategories.FOOTBALL_KITS}
                      >
                        Football Kits
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value={ProductCategories.SPORTS_SHOE}
                      >
                        Sports Shoe
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right">
                Brand
              </Label>
              <Input
                id="brand"
                {...register("brand")}
                className="col-span-3"
                defaultValue={brand}
                // placeholder="Enter Product's Brand Name here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                id="rating"
                type="number"
                {...register("rating")}
                defaultValue={rating}
                className="col-span-3"
                // placeholder="Enter Product's Brand Name here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stockQuantity" className="text-right">
                Stock Quantity
              </Label>
              <Input
                id="stockQuantity"
                type="number"
                {...register("stockQuantity")}
                className="col-span-3"
                defaultValue={stockQuantity}
                // placeholder="Enter Product's Stock Quantity here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Product Description
              </Label>
              <textarea
                id="description"
                defaultValue={productDescription}
                {...register("productDescription")}
                className="col-span-3 px-2 py-1 rounded-md bg-white"
                // placeholder="Enter Product's Description here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                {...register("price")}
                defaultValue={price}
                className="col-span-3"
                placeholder="Enter Product Price here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                {...register("image")}
                defaultValue={image}
                className="col-span-3"
                placeholder="Enter Product Image URL here"
              />
            </div>

            <div className="items-center justify-center flex">
              <Button
                className="border-2 mt-5 border-slate-600 rounded-md"
                type="submit"
              >
                Update Product
              </Button>
            </div>
            <TopMarginSetter></TopMarginSetter>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSingleProduct;
