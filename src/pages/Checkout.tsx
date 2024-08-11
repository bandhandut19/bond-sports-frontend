import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import TopMarginSetter from "@/utils/TopMarginSetter";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TCheckout from "@/types/Checkout";
import { useModifyQuantityMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
import { clearCart } from "@/redux/features/cart/cartSlice";

const Checkout = () => {
  const cart = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue, watch } = useForm<TCheckout>();
  const [modifyQuantity] = useModifyQuantityMutation();
  const navigate = useNavigate();
  const handlePlaceOrder = async (userOrderData: TCheckout) => {
    console.log(userOrderData);
    try {
      if (userOrderData.paymentMethods === "Cash On Delivery") {
        cart.map(async (item) => {
          const res = await modifyQuantity({
            id: item._id,
            quantity: item.quantity,
            stockQuantity: item.stockQuantity,
          });
          if (res?.data?.success === true) {
            dispatch(clearCart());
            navigate("/success");
          }
        });
      } else if (userOrderData.paymentMethods === "stripe") {
        toast.error("Stripe Payment is not available right now");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-56">
      {(() => {
        const totalPrice = cart.reduce(
          (acc, item) =>
            acc + (item.price as number) * (item.quantity as number),
          0
        );
        const vat = totalPrice * 0.15;
        const totalPayableAmount = (totalPrice + vat).toFixed(2);
        return (
          <div className=" flex flex-col gap-4 py-4 bg-gradient-to-tr from-orange-300 to-yellow-300  text-center justify-center rounded-md">
            <h1 className="mb-8 cursor-pointer text-2xl w-9/12 mx-auto font-bold border-4 px-4 py-1 rounded-full bg-orange-600 border-l-0 border-t-0 border-slate-500 text-white border-e-6 ">
              Checkout
            </h1>
            <form
              onSubmit={handleSubmit(handlePlaceOrder)}
              className="flex flex-col gap-7"
            >
              <div className="flex flex-col gap-2 w-1/2 mx-auto">
                <Label htmlFor="amount" className="text-left">
                  Total Amount To Be Paid
                </Label>
                <Input
                  id="amount"
                  {...register("totalAmount")}
                  required
                  readOnly
                  value={`${totalPayableAmount} BDT Only`}
                  className=" no-focus-outline focus:border-none focus:outline-none col-span-3 cursor-pointer font-bold text-white bg-orange-600"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2 mx-auto">
                <Label htmlFor="username" className="text-left">
                  Name
                </Label>
                <Input
                  required
                  id="username"
                  {...register("name")}
                  type="text"
                  placeholder="Enter Your Name"
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2 mx-auto">
                <Label htmlFor="useremail" className="text-left">
                  Email
                </Label>
                <Input
                  required
                  id="useremail"
                  {...register("email")}
                  type="email"
                  placeholder="Enter Your Email"
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2 mx-auto">
                <Label htmlFor="usercontact" className="text-left">
                  Contact No
                </Label>
                <Input
                  required
                  id="usercontact"
                  {...register("contactNo")}
                  type="text"
                  placeholder="Enter Your Contact No"
                  className="col-span-3"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2 mx-auto ">
                <Label htmlFor="useraddress" className="text-left">
                  Delivery Address
                </Label>
                <textarea
                  id="useraddress"
                  {...register("deliverAddress")}
                  required
                  placeholder="Enter Your Delivery Address"
                  className="col-span-3 py-2 px-3 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-1/2 mx-auto">
                <Label htmlFor="useraddress" className="text-left">
                  Choose Payment Method
                </Label>
                <div className="bg-orange-600 text-white px-3 py-5 rounded-sm">
                  <RadioGroup
                    defaultValue="Cash On Delivery"
                    value={watch("paymentMethods")}
                    onValueChange={(value) => setValue("paymentMethods", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Cash On Delivery"
                        {...register("paymentMethods")}
                        id="r1"
                      />
                      <Label htmlFor="r1">Cash On Delivery</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="stripe"
                        {...register("paymentMethods")}
                        id="r2"
                      />
                      <Label htmlFor="r2">Stripe</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <Button
                type="submit"
                className="w-1/2 border-2 border-slate-700 mx-auto font-bold text-white bg-orange-600 hover:text-black"
              >
                Place Order
              </Button>
            </form>
            <TopMarginSetter></TopMarginSetter>
          </div>
        );
      })()}
    </div>
  );
};

export default Checkout;
