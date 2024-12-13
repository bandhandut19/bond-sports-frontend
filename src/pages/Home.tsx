import Categories from "@/components/ui/Categories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import TopMarginSetter from "@/utils/TopMarginSetter";
import Blog from "./Blogs";
import PageSlider from "@/components/ui/PageSlider";
import { sliderPhotos } from "@/utils/sliderPhotos";
import TopSellingProducts from "@/components/ui/TopSellingProducts";
import DealsOfTheDay from "@/components/ui/DealsOfTheDay";
const Home = () => {
  return (
    <div>
      <PageSlider sliderPhotos={sliderPhotos}></PageSlider>
      <div className="w-11/12 mx-auto">
        <TopMarginSetter></TopMarginSetter>
        <h1 className="lg:text-4xl text-4xl font-bold text-center  border-b-4 border-l-4 px-2 py-6 border-orange-600  bg-yellow-400 border-opacity-70 rounded-md">
          Featured Sports Products
        </h1>
        <TopMarginSetter></TopMarginSetter>
        <FeaturedProducts></FeaturedProducts>
        <TopMarginSetter></TopMarginSetter>
        <h1 className="lg:text-4xl text-4xl font-bold text-center  border-b-4 border-l-4 px-2 py-6 border-orange-600  bg-yellow-400 border-opacity-70 rounded-md">
          Top Selling Products
        </h1>
        <TopMarginSetter></TopMarginSetter>
        <TopSellingProducts></TopSellingProducts>
        <TopMarginSetter></TopMarginSetter>
        <h1 className="lg:text-4xl text-4xl font-bold text-center  border-b-4 border-l-4 px-2 py-6 border-orange-600  bg-yellow-400 border-opacity-70 rounded-md">
          Categories
        </h1>
        <TopMarginSetter></TopMarginSetter>
        <Categories></Categories>
        <TopMarginSetter></TopMarginSetter>
        <h1 className="lg:text-4xl text-4xl font-bold text-center  border-b-4 border-l-4 px-2 py-6 border-orange-600  bg-yellow-400 border-opacity-70 rounded-md">
          Deals of the day
        </h1>
        <TopMarginSetter></TopMarginSetter>
        <DealsOfTheDay></DealsOfTheDay>
        <TopMarginSetter></TopMarginSetter>
        <h1 className="lg:text-4xl text-4xl font-bold text-center  border-b-4 border-l-4 px-2 py-6 border-orange-600  bg-yellow-400 border-opacity-70 rounded-md">
          Blogs
        </h1>
        <TopMarginSetter></TopMarginSetter>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Home;
