import Categories from "@/components/ui/Categories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import PageSlider from "@/components/ui/PageSlider";
import { sliderPhotos } from "@/utils/sliderPhotos";
import TopMarginSetter from "@/utils/TopMarginSetter";

const Home = () => {
  return (
    <div>
      <PageSlider sliderPhotos={sliderPhotos}></PageSlider>
      <TopMarginSetter></TopMarginSetter>
      <h1 className="lg:text-4xl text-4xl font-bold text-center  border-b-4 border-l-4 px-2 py-6 border-orange-600  bg-yellow-400 border-opacity-70 rounded-md">
        Featured Sports Products
      </h1>
      <TopMarginSetter></TopMarginSetter>
      <FeaturedProducts></FeaturedProducts>
      <TopMarginSetter></TopMarginSetter>
      <h1 className="lg:text-4xl text-4xl font-bold text-center  border-b-4 border-l-4 px-2 py-6 border-orange-600  bg-yellow-400 border-opacity-70 rounded-md">
        Categories
      </h1>
      <TopMarginSetter></TopMarginSetter>
      <Categories></Categories>

      <TopMarginSetter></TopMarginSetter>
    </div>
  );
};

export default Home;
