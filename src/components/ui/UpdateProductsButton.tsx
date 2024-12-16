import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UpdateProductsButton = () => {
  return (
    <Link to="/dashboard/updateproduct">
      <Button className="bg-orange-500 text-xl  px-5 ">Update Products</Button>
    </Link>
  );
};

export default UpdateProductsButton;
