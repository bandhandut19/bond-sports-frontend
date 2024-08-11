import { ProductCardProps } from "@/types/ProductProptypes";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { productName, brand, image, price, stockQuantity, category, _id } =
    product;
  const navigate = useNavigate();
  //border for cards --> hover:border-4 hover:border-slate-700 hover:border-b-4 hover:border-l-4 hover:border-t-0 hover:border-r-0
  return (
    <div className="flex lg:flex-row flex-col  border-black rounded-md bg-gradient-to-bl to-orange-400 from-yellow-300 shadow-xl   hover:bg-gradient-to-tl hover:to-orange-400 hover:from-yellow-400 hover:transition-colors  hover:shadow-orange-500">
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
            {/* <Link to={`/product/${_id}`}>
              <Button className="border-2 border-slate-600">
                View Details
              </Button>
            </Link> */}

            <Button
              onClick={() => navigate(`/product/${_id}`)}
              className="border-2 border-slate-600"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
