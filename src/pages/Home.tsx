import PageSlider from "@/components/ui/PageSlider";
import { sliderPhotos } from "@/utils/sliderPhotos";
import TopMarginSetter from "@/utils/TopMarginSetter";

const Home = () => {
  return (
    <div>
      <PageSlider sliderPhotos={sliderPhotos}></PageSlider>
      <TopMarginSetter></TopMarginSetter>
      <span className="lg:text-2xl font-bold border-b-4 border-l-4 px-2 py-1 border-yellow-400 border-opacity-70 rounded-md">
        Featured Sports Products
      </span>
      <TopMarginSetter></TopMarginSetter>
    </div>
  );
};

export default Home;
