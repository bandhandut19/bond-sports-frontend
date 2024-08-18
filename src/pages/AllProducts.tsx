import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "../types/ProductType";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Input } from "@/components/ui/input";
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
import { useForm } from "react-hook-form";
import LoadingData from "@/components/ui/LoadingData";
import NoDataFound from "@/components/ui/NoDataFound";

const AllProducts = () => {
  const [categoryPosition, setCategoryPosition] = useState("Select category");
  const [sortPosition, setSortPosition] = useState("Sort By");
  const [brandPosition, setBrandPosition] = useState("Select Brand");
  const [orderPosition, setOrderPosition] = useState("Select Order");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [searchName, setSearchName] = useState("");

  const navigate = useNavigate();
  const { setValue } = useForm();

  // Prepare the filter query
  const filterQuery = {
    filterCategory:
      categoryPosition !== "Select category" ? categoryPosition : "",
    filterBrand: brandPosition !== "Select Brand" ? brandPosition : "",
    filterSort: sortPosition !== "Sort By" ? sortPosition : "",
    filterOrder: orderPosition !== "Select Order" ? orderPosition : "",
    minPrice: minPrice || "",
    maxPrice: maxPrice || "",
  };

  const { data, isLoading } = useGetAllProductsQuery({
    category,
    search: searchName,
    ...filterQuery,
  });
  const productData = data?.data || [];

  if (isLoading) {
    return <LoadingData></LoadingData>;
  }

  if (!Array.isArray(productData) || productData.length === 0) {
    return <NoDataFound></NoDataFound>;
  }
  const handleClearFilters = () => {
    // reset();
    setCategoryPosition("Select category");
    setSortPosition("Sort By");
    setBrandPosition("Select Brand");
    setOrderPosition("Select Order");
    setMinPrice("");
    setMaxPrice("");
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchedProduct = form.searchProduct.value;
    setSearchName(searchedProduct);
    navigate(`/all-products?search=${searchedProduct}`);
    form.reset();
  };

  return (
    <div>
      <div className="mb-10 flex justify-between">
        {/* Search */}
        <div>
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-sm items-center space-x-2"
          >
            <Input
              type="text"
              name="searchProduct"
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
        <div className="flex w-full max-w-sm space-x-2 items-end justify-end">
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
              <form>
                <div className="grid gap-4 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">{categoryPosition}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={categoryPosition}
                        onValueChange={(value: string) => {
                          setCategoryPosition(value);
                          setValue("category", value);
                        }}
                      >
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">{sortPosition}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={sortPosition}
                        onValueChange={(value: string) => {
                          setSortPosition(value);
                          setValue("sort", value);
                        }}
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">{orderPosition}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={orderPosition}
                        onValueChange={(value: string) => {
                          setOrderPosition(value);
                          setValue("order", value);
                        }}
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">{brandPosition}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={brandPosition}
                        onValueChange={(value: string) => {
                          setBrandPosition(value);
                          setValue("brand", value);
                        }}
                      >
                        {/* List of brands */}
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
                  <div className="grid gap-4">
                    <label htmlFor="minPrice" className="font-semibold">
                      Set Minimum Price (BDT)
                    </label>
                    <input
                      className="text-center py-2 rounded-md"
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-4">
                    <label htmlFor="maxPrice" className="font-semibold">
                      Set Maximum Price (BDT)
                    </label>
                    <input
                      className="text-center py-2 rounded-md"
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>
                <SheetFooter>
                  <Button
                    className="border-2 border-slate-400"
                    type="button"
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </Button>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 min-h-screen">
        {productData.map((product: TProduct) => (
          <div className="col-span-1" key={product.productName}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
