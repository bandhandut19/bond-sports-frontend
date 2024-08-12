import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types/ProductType";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
const UpdateProductsDisplay = () => {
  const { data, isLoading } = useGetAllProductsQuery({
    queryName: "product",
    userQuery: "",
  });
  const products: TProduct[] = data?.data;
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="bg-yellow-400 hover:bg-yellow-400">
              <TableHead className="text-black lg:text-left text-center">
                Product
              </TableHead>
              <TableHead className="text-right text-black">Price</TableHead>

              <TableHead className="text-center text-black">
                Stock Quantity
              </TableHead>
              <TableHead className="text-center text-black">Update</TableHead>
              <TableHead className="text-center text-black">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((item) => (
              <TableRow
                className="bg-gradient-to-bl from-orange-400 to-yellow-500 hover:from-yellow-500 hover:to-orange-600"
                key={item.productName}
              >
                <TableCell className="flex items-center gap-2 font-medium px-1 border-l-2 border border-t-0">
                  <div className="text-left">
                    <img
                      src={item.image as string}
                      className="lg:max-w-[5rem] w-[180px] h-[180px] lg:h-auto"
                      alt={item.productName}
                    />
                  </div>
                  <div className="text-center">
                    <h1>{item.productName}</h1>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {item.price} BDT
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {item.stockQuantity} left only
                </TableCell>
                <TableCell className="text-center font-semibold">
                  <Link to={`/updateproduct/${item._id}`}>
                    <button className="px-2 border-2 border-green-700 hover:border-yellow-400 bg-green-500 py-2 hover:text-xl rounded-full font-bold text-2xl text-white">
                      <GrUpdate />
                    </button>
                  </Link>
                </TableCell>
                <TableCell className="text-center font-semibold">
                  <button
                    // onClick={() => }
                    className="px-2 border-2 border-orange-600 hover:text-xl hover:border-yellow-400 bg-yellow-400 py-2 rounded-full font-bold text-2xl text-red-600"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      )}
    </div>
  );
};

export default UpdateProductsDisplay;
