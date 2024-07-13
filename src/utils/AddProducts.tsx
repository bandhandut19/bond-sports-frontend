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
const AddProducts = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:border-none text-xl hover:text-2xl bg-transparent hover:bg-orange-100">
          Add Products
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add new awesome products to this store
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Product Name
              </Label>
              <Input id="product-name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Category
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Stock quantity
              </Label>
              <Input
                id="stock-quantity"
                className="col-span-3"
                defaultValue={0}
              />
            </div> */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                brand
              </Label>
              <Input id="brand" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Product description
              </Label>
              <Input id="product-description" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                price
              </Label>
              <Input id="price" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Image URL
              </Label>
              <Input id="image-url" className="col-span-3" />
            </div>
          </form>
        </div>
        <div className="items-center justify-center flex">
          <Button type="submit">Add Product</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProducts;
