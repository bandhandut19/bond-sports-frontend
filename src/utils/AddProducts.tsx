/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateProductIntoDBMutation } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductType";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import {
  ProductCategories,
  TProductCategories,
} from "@/types/ProductCategories";

const AddProducts = () => {
  const [position, setPosition] = useState("Select Category");
  const { register, handleSubmit, reset, setValue } = useForm<TProduct>();
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [createProductIntoDB] = useCreateProductIntoDBMutation();
  const handleAddProducts = async (data: TProduct) => {
    const productInfo = {
      productName: data.productName,
      category: data.category,
      stockQuantity: data.stockQuantity,
      brand: data.brand,
      productDescription: data.productDescription,
      price: data.price,
      rating: data.rating,
      image: data.image,
    };
    try {
      const res = await createProductIntoDB(productInfo).unwrap();
      toast(res.message);
      setIsOpen(false);
      reset();
    } catch (error: any) {
      const res = error;
      setErrorMessage(res?.data?.error?.message);
      toast(res?.data?.error?.message);
      // setIsOpen(false);
    }
  };

  return (
    //? USED STATES FOR {OPEN} TO CLOSE THE MODAL AFTER ADDING PRODUCTS.
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className=" text-xl  px-5 bg-orange-500"
        >
          Add Products
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-2xl font-bold">Add Product</DialogTitle>
          <DialogDescription className="text-slate-700">
            Add new awesome products to this store
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            onSubmit={handleSubmit(handleAddProducts)}
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
                placeholder="Enter Product Name here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="w-full col-span-3">
                  <Button variant="outline">{position}</Button>
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="brand" className="text-right">
                Brand
              </Label>
              <Input
                id="brand"
                {...register("brand")}
                className="col-span-3"
                placeholder="Enter Product's Brand Name here"
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
                placeholder="Enter Product's Stock Quantity here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Product Description
              </Label>
              <textarea
                id="description"
                {...register("productDescription")}
                className="col-span-3 px-2 py-1 rounded-md bg-white"
                placeholder="Enter Product's Description here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                id="rating"
                type="number"
                {...register("rating", {
                  min: { value: 0, message: "Minimum rating is 1" },
                  max: { value: 5, message: "Maximum rating is 5" },
                })}
                className="col-span-3"
                placeholder="Enter rating between 0 and 5"
                min="0"
                max="5"
                step="1"
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
                className="col-span-3"
                placeholder="Enter Product Image URL here"
              />
            </div>
            <div>
              <span className="text-red-700 font-bold">
                {errorMessage ? (
                  <span>
                    <span className="text-black text-lg rounded-md mb-2 border-b-slate-700 border-l-slate-700 border-4 border-t-0 border-r-0 px-2">
                      Error Occured:
                    </span>
                    {errorMessage}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="items-center justify-center flex">
              <Button
                className="border-2 border-slate-600 rounded-md"
                type="submit"
              >
                Add Product
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProducts;
