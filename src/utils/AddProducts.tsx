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
// import { createProduct } from "@/redux/features/product/productSlice";
// import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types/ProductType";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm<TProduct>();
  const [createProductIntoDB] = useCreateProductIntoDBMutation();
  // const dispatch = useAppDispatch();
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
    // console.log(productInfo);
    const res = await createProductIntoDB(productInfo).unwrap();
    console.log(res);
    // dispatch(createProduct(productInfo));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:border-none text-xl hover:text-2xl bg-transparent hover:bg-orange-100">
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
