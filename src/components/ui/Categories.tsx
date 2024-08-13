import { useState, useEffect } from "react";
import {
  AllCategories,
  TProductCategories,
} from "../../types/ProductCategories";
import { Card, CardContent } from "./card";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const [categoryName, setCategory] = useState("");

  useEffect(() => {
    if (categoryName) {
      console.log(categoryName);
      navigate(`/all-products?category=${categoryName}`);
      setCategory("");
    }
  }, [categoryName, navigate]);

  const handleCategory = (category: TProductCategories) => {
    setCategory(category);
  };

  return (
    <div className="grid lg:grid-cols-3  grid-cols-1 gap-5">
      {AllCategories.map((category) => (
        <Card
          key={category}
          className="cursor-pointer"
          onClick={() => handleCategory(category)}
        >
          <CardContent className="py-20 text-center bg-gradient-to-r from-yellow-500 to-orange-400 hover:bg-gradient-to-r hover:to-yellow-400 hover:from-orange-400 transition-all shadow-xl hover:shadow-lg shadow-orange-600 hover:shadow-orange-700 hover:text-white hover:border-4 hover:bg-orange-600 hover:border-l-0 hover:border-t-0 hover:border-b-0 hover:border-r-4 rounded-r-md border-slate-700">
            <h1 className="font-bold text-3xl ">{category}</h1>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Categories;
