import { ProductCardProps } from "@/types/ProductProptypes";
import { Button } from "./button";
import { Link } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { productName, brand, image, price, stockQuantity, category, _id } =
    product;

  return (
    <div className="flex lg:flex-row flex-col rounded-md bg-yellow-300 shadow-xl hover:border-4 hover:border-slate-700 hover:border-b-0 hover:border-l-0">
      <div className="rounded-md flex flex-2">
        <img className="w-full" src={image} alt="sports products" />
      </div>

      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <span className="mt-3">
          <span className="font-bold"> Category: </span>
          {category}
        </span>
        <span>
          <span className="font-bold"> Brand: </span>
          {brand}
        </span>
        <span>
          <span className="font-bold"> Price: </span>
          <span className="text-green-600 font-bold">{price} BDT</span>
        </span>

        <div className=" flex mt-10 lg:justify-center gap-5 justify-center text-center">
          <div className="">
            {stockQuantity === 0 ? (
              <Button className="bg-red-700 text-white hover:bg-red-700 hover:border-none">
                Not Available
              </Button>
            ) : (
              <Button className="bg-green-600 text-white hover:bg-green-600 hover:border-none">
                {stockQuantity} itmes left
              </Button>
            )}
          </div>
          <div>
            <Link to={`/product/${_id}`}>
              <Button className="border-2 border-slate-600">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;