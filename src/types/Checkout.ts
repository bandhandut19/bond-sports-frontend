type TCheckout = {
  totalAmount: number;
  name: string;
  email: string;
  contactNo: string;
  deliverAddress: string;
  paymentMethods: string;
};

export type TCartItemModify = {
  id: string;
  quantity: number;
  stockQuantity: number;
};
export default TCheckout;
