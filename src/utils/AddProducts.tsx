/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
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

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm<TProduct>();
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [createProductIntoDB] = useCreateProductIntoDBMutation();
  const handleAddProducts = async (data: TProduct) => {
    const productInfo = {
      productName: data.productName,
      category: data.category,
      stockQuantity: 0,
      brand: data.brand,
      rating: 0,
      productDescription: data.productDescription,
      price: data.price,
      image: data.image,
    };
    try {
      const res = await createProductIntoDB(productInfo).unwrap();
      // console.log(res);
      toast(res.message);
      setIsOpen(false);
      reset();
    } catch (error: any) {
      const res = error;
      console.log(res?.data?.error?.message);
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
          className="hover:border-none text-xl hover:text-2xl bg-transparent hover:bg-orange-100"
        >
          Add Products
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-yellow-400">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
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
              <Input
                id="category"
                {...register("category")}
                className="col-span-3"
                placeholder="Enter Product Category here"
              />
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
              <Label htmlFor="description" className="text-right">
                Product Description
              </Label>
              <Input
                id="description"
                {...register("productDescription")}
                className="col-span-3"
                placeholder="Enter Product's Description here"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
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
