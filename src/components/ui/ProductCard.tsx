import { ProductCardProps } from "@/types/ProductProptypes";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    productName,
    brand,
    image,
    price,
    stockQuantity,
    category,
    _id,
    rating,
  } = product;
  const navigate = useNavigate();
  //border for cards --> hover:border-4 hover:border-slate-700 hover:border-b-4 hover:border-l-4 hover:border-t-0 hover:border-r-0
  return (
    <div className="flex lg:flex-row hover:scale-105 border-black rounded-md bg-gradient-to-bl to-orange-400 from-yellow-300 shadow-xl   hover:bg-gradient-to-tl hover:to-orange-400 hover:from-yellow-400 hover:transition-colors  hover:shadow-orange-500">
      <div className="rounded-md">
        <img
          className="lg:w-full  w-[300px] sm:h-[300px] lg:rounded-ee-full"
          src={image}
          alt="sports products"
        />
      </div>

      <div className="py-5 px-5 flex flex-col gap-1">
        <span className="card-title">{productName}</span>
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
        <span className=" bg-orange-600 rounded-e-badge p-1">
          <span className="font-bold text-white mr-2"> Rating: </span>
          <StarRatings
            rating={rating}
            starRatedColor="yellow"
            starEmptyColor="grey"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="4px"
          />
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
