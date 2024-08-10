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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
const Cart = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();
  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

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
                Stock Quantity
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
                    <button
                      onClick={() => handleDecreaseQuantity(item._id as string)}
                      className="px-2 border-2 border-orange-600 hover:border-yellow-400 bg-yellow-400 py-2 rounded-full font-bold text-lg"
                    >
                      <FaMinus />
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => handleIncreaseQuantity(item._id as string)}
                      className="px-2 bg-yellow-400 py-2 border-2 border-green-600 hover:border-yellow-400 rounded-full font-extrabold text-lg"
                    >
                      <IoMdAdd />
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {item.stockQuantity} left only
                </TableCell>
                <TableCell className="text-center font-semibold">
                  <button
                    onClick={() => dispatch(removeFromCart(item._id as string))}
                    className="px-2 border-2 border-orange-600 hover:border-yellow-400 bg-yellow-400 py-2 rounded-full font-bold text-2xl text-red-600"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-yellow-400 text-center hover:bg-yellow-400">
              <TableCell colSpan={5}>
                <span className="  cursor-pointer text-xl border-4 px-4 py-1 rounded-full bg-orange-600 border-l-0 border-t-0 border-slate-500 text-white border-e-6 ">
                  Payment Summary
                </span>
                <div className="mt-10">
                  {(() => {
                    const totalPrice = cartItems.reduce(
                      (acc, item) =>
                        acc +
                        (item.price as number) * (item.quantity as number),
                      0
                    );
                    const vat = totalPrice * 0.15;

                    return (
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <div className="grid grid-cols-3 gap-5 justify-center items-center">
                              <TableHead className="text-center px-4 py-1 rounded-sm bg-orange-600  text-white">
                                Total Price
                              </TableHead>
                              <TableHead className="text-center px-4 py-1 rounded-sm bg-orange-600  text-white">
                                Total VAT 15%
                              </TableHead>
                              <TableHead className="text-center px-4 py-1 rounded-sm bg-orange-600  text-white">
                                Total Amount To Be Paid
                              </TableHead>
                            </div>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="hover:bg-transparent">
                            <div className="grid grid-cols-3 gap-5 justify-center items-center">
                              <TableCell>
                                {totalPrice.toFixed(2)} BDT Only
                              </TableCell>
                              <TableCell> {vat.toFixed(2)} BDT Only</TableCell>
                              <TableCell className="text-center font-extrabold">
                                {(totalPrice + vat).toFixed(2)} BDT Only
                              </TableCell>
                            </div>
                          </TableRow>
                          <Link to="/checkout">
                            <button className="w-1/2 mx-auto mt-5 py-2 rounded-md text-lg bg-orange-600">
                              <div className="flex items-center justify-center gap-3 text-white">
                                {" "}
                                <span>Checkout</span>
                                <IoBagCheckOutline className="text-2xl" />
                              </div>
                            </button>
                          </Link>
                        </TableBody>
                      </Table>
                    );
                  })()}
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
};

export default Cart;
