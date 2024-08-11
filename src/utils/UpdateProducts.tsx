import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
const UpdateProducts = () => {
  const [position, setPosition] = useState("Select Category");
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, reset, setValue } = useForm<TProduct>();
  const handleUpdateProducts = () => {};
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className="hover:border-none text-xl  px-5 hover:bg-gradient-to-br  bg-gradient-to-tl to-yellow-400 w-4/5 from-orange-400 h-[10rem]"
        >
          Update Products
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-yellow-400">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-2xl font-bold">
            Update Products
          </DialogTitle>
          <DialogDescription className="text-slate-700">
            Add new awesome products to this store
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
                className="col-span-3 px-2 py-1 rounded-md"
                placeholder="Enter Product's Description here"
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
                Update Product
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProducts;
