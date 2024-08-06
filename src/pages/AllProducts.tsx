// import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
// import { Link } from "react-router-dom";
import { TProduct } from "../types/ProductType";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FaFilter } from "react-icons/fa";

import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [searchName, setSearchName] = useState("");

  const { data, isLoading } = useGetAllProductsQuery({
    queryName: category ? "category" : "product",
    userQuery: category || searchName,
  });
  const productData = data?.data || [];

  const handleApplyFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchedProduct = form.searchProduct.value;
    setSearchName(searchedProduct);
    form.reset();
  };
  return (
    <div>
      <div className="mb-10 flex justify-between">
        {/*search */}
        <div>
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-sm items-center space-x-2"
          >
            <Input
              type="text"
              name="searchProduct"
              // value={searchName}
              // onChange={(e) => setSearchName(e.target.value)}
              placeholder="Search Product by name"
            />
            <Button
              type="submit"
              className="hover:border-2 border-orange-600 hover:bg-yellow-300"
            >
              <FaSearch className="text-orange-600 text-lg" />
            </Button>
            <Button className="hover:border-2 border-orange-600 hover:bg-yellow-300">
              Show all
            </Button>
          </form>
        </div>
        {/* Filter */}
        <div className="flex w-full max-w-sm  space-x-2  items-end justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <div>
                <Button
                  type="submit"
                  className="hover:bg-yellow-400 hover:border-none"
                >
                  <span className="text-xl font-semibold">Filter</span>
                  <FaFilter className="text-orange-600 text-xl ml-2" />
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-tr from-yellow-400 to-orange-400 border-none">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold">
                  Filter Products
                </SheetTitle>
                <SheetDescription className="text-black font-semibold">
                  Apply filters to get the products as per your need
                </SheetDescription>
              </SheetHeader>
              <form onSubmit={handleApplyFilter}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button
                      className="border-2 border-slate-400 "
                      type="submit"
                    >
                      Apply Filters
                    </Button>
                  </SheetClose>
                  <Button className="border-2 border-slate-400" type="submit">
                    Clear Filters
                  </Button>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {isLoading ? <span>Loading</span> : ""}

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {Array.isArray(productData) && productData.length !== 0 ? (
          productData.map((product: TProduct) => (
            <div className="col-span-1" key={product.productName}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>

      {/* <Button>
        <Link to={"/single-product"}>Single product</Link>
      </Button> */}
    </div>
  );
};

export default AllProducts;
