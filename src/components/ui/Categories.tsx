import {
  AllCategories,
  TProductCategories,
} from "../../types/ProductCategories";
import { Card, CardContent } from "./card";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategory = (category: TProductCategories) => {
    navigate(`/all-products?category=${category}`);
  };

  return (
    <div className="grid lg:grid-cols-3  grid-cols-3 gap-10">
      {AllCategories.map((category) => (
        <Card
          key={category}
          className="cursor-pointer hover:scale-105"
          onClick={() => handleCategory(category)}
        >
          <CardContent className="pr-0 pl-0 text-center bg-gradient-to-r from-yellow-500 to-orange-400 hover:bg-gradient-to-r hover:to-yellow-400 hover:from-orange-400 transition-all shadow-md hover:shadow-lg shadow-orange-600 hover:shadow-orange-700 hover:text-white  hover:bg-orange-600 hover:border-l-0 ">
            {category === "Cricket Kits" ? (
              <img
                className="rounded"
                src="https://i.postimg.cc/y8Sm0Y9Z/alessandro-bogliari-o-Ds-Axe-R5g4-unsplash.jpg"
              ></img>
            ) : (
              ""
            )}
            {category === "Football Kits" ? (
              <img
                className="rounded"
                src="https://i.postimg.cc/c4PY1yj4/peter-glaser-q-Ws-Wa1-Jr-KM-unsplash.jpg"
              ></img>
            ) : (
              ""
            )}
            {category === "Sports Shoe" ? (
              <img
                className="rounded"
                src="https://i.postimg.cc/vmsV97bJ/andreas-bester-d-TCHepn-MQi-Q-unsplash.jpg"
              ></img>
            ) : (
              ""
            )}
            <h1 className="font-bold text-3xl mt-2">{category}</h1>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Categories;
