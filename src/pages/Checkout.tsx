import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const Checkout = () => {
  const cart = useAppSelector((state: RootState) => state.cart.items);
  return (
    <div>
      {cart.length === 0 ? <span>Hello {cart.length}</span> : <span>Hehe</span>}
    </div>
  );
};

export default Checkout;
