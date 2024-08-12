import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UpdateProductsButton = () => {
  return (
    <Link to="/updateproduct">
      <Button className="hover:border-none text-xl  px-5 hover:bg-gradient-to-br  bg-gradient-to-tl to-yellow-400 w-4/5 from-orange-400 h-[10rem]">
        Update Products
      </Button>
    </Link>
  );
};

export default UpdateProductsButton;
