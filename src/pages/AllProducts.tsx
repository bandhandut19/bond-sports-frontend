import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "../types/ProductType";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FaFilter } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AllCategories } from "@/types/ProductCategories";

const AllProducts = () => {
  const [categoryPosition, setCategoryPosition] = useState("Select category");
  const [sortPosition, setSortPosition] = useState("Sort By");
  const [brandPosition, setBrandPosition] = useState("Select Brand");
  const [orderPosition, setOrderPosition] = useState("Select Order");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllProductsQuery({
    category: category,
    search: searchName,
  });
  const productData = data?.data || [];

  // const handleApplyFilter = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };
  const handleClearFilters = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategoryPosition("Select category");
    setSortPosition("Sort By");
    setBrandPosition("Select Brand");
    setOrderPosition("Select Order");
    const form = e.target as HTMLFormElement;
    form.minimumPrice.value = 0;
    form.maximumPrice.value = 100;
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchedProduct = form.searchProduct.value;
    setSearchName(searchedProduct);
    navigate(`/all-products?category=${searchedProduct}`);
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
              <form onSubmit={handleClearFilters}>
                <div className="grid gap-4 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">{categoryPosition}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={categoryPosition}
                        onValueChange={setCategoryPosition}
                      >
                        <DropdownMenuRadioItem value="All Categories">
                          All Categories
                        </DropdownMenuRadioItem>
                        {AllCategories.map((category) => (
                          <DropdownMenuRadioItem
                            key={category}
                            value={category}
                          >
                            {category}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="grid  gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">{sortPosition}</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={categoryPosition}
                          onValueChange={setSortPosition}
                        >
                          <DropdownMenuRadioItem value="Price">
                            Price
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Rating">
                            Rating
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="grid  gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">{orderPosition}</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={categoryPosition}
                          onValueChange={setOrderPosition}
                        >
                          <DropdownMenuRadioItem value="Ascending">
                            Ascending
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Descending">
                            Descending
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="grid  gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">{brandPosition}</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={categoryPosition}
                          onValueChange={setBrandPosition}
                        >
                          <DropdownMenuRadioItem value="All Brands">
                            All Brands
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="SG">
                            SG
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Adidas">
                            Adidas
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Nike">
                            Nike
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Kookaburra">
                            Kookaburra
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Reebok">
                            Reebok
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Puma">
                            Puma
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Under Armour">
                            Under Armour
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Asics">
                            Asics
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="grid gap-4">
                    <label htmlFor="minPrice" className="font-semibold">
                      Set Minimum Price ( BDT )
                    </label>
                    <input
                      className="text-center py-2 rounded-md"
                      type="number"
                      name="minimumPrice"
                      defaultValue={0}
                    />
                  </div>
                  <div className="grid gap-4">
                    <label htmlFor="minPrice" className="font-semibold">
                      Set Maximum Price ( BDT )
                    </label>
                    <input
                      className="text-center py-2 rounded-md"
                      type="number"
                      name="maximumPrice"
                      defaultValue={100}
                    />
                  </div>
                </div>
                <SheetFooter>
                  {/* <SheetClose asChild> */}
                  <Button
                    className="border-2 border-slate-400 "
                    type="submit"
                    // onClick={handleClearFilters}
                  >
                    Clear Filters
                  </Button>
                  {/* </SheetClose> */}
                  {/* <Button className="border-2 border-slate-400" type="submit">
                  Apply Filters
                  </Button> */}
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
