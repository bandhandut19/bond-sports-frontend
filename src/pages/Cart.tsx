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
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
const Cart = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="md:mb-96 lg:mt-20 text-center flex items-center justify-center">
          <h1 className="text-center text-2xl font-semibold">
            Your cart is empty now ! Kickstart by adding sports products now.
            Just{" "}
            <Link
              to={"/all-products"}
              className="underline text-orange-600 font-bold"
            >
              Click Here !
            </Link>
          </h1>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="bg-yellow-400 hover:bg-yellow-400">
              <TableHead className="w-[130px] text-black">
                Product Name
              </TableHead>
              <TableHead className="text-right text-black">Price</TableHead>
              <TableHead className="text-center text-black">
                {" "}
                Quantity{" "}
              </TableHead>
              <TableHead className="text-center text-black">
                Stock Quantiy
              </TableHead>
              <TableHead className="text-center text-black">
                Delete From Cart
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow
                className="bg-gradient-to-bl from-orange-400 to-yellow-500 hover:from-yellow-500 hover:to-orange-600"
                key={item.productName}
              >
                <TableCell className="font-medium px-1">
                  <div className="grid grid-cols-2 gap-2">
                    <img src={item.image as string} alt="" />
                    <h1>{item.productName}</h1>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {item.price} BDT
                </TableCell>
                <TableCell className="text-center font-semibold">
                  <div className="flex items-center justify-center gap-5">
                    <button className="px-2 bg-yellow-400 py-2 border-2 border-green-600 hover:border-yellow-400 rounded-full font-extrabold text-lg">
                      <IoMdAdd />
                    </button>
                    1
                    <button className="px-2 border-2 border-orange-600 hover:border-yellow-400 bg-yellow-400 py-2 rounded-full font-bold text-lg">
                      <FaMinus />
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {item.stockQuantity} left only
                </TableCell>
                <TableCell className="text-center font-semibold">
                  <button className="px-2 border-2 border-orange-600 hover:border-yellow-400 bg-yellow-400 py-2 rounded-full font-bold text-2xl text-red-600">
                    <RiDeleteBin6Fill />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
};

export default Cart;
