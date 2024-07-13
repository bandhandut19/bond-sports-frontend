import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <div>
      <Button>
        <Link to={"/single-product"}>Single product</Link>
      </Button>
    </div>
  );
};

export default AllProducts;
