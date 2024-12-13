import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import MainFooter from "../ui/MainFooter";
import PageSlider from "@/components/ui/PageSlider";
import { sliderPhotos } from "@/utils/sliderPhotos";
const RootLayout = () => {
  return (
    <div className="bg-yellow-100 overflow-x-hidden">
      <Navbar></Navbar>
      <PageSlider sliderPhotos={sliderPhotos}></PageSlider>
      <div className="mx-auto w-4/5 mt-10 ">
        <Outlet></Outlet>
      </div>
      <MainFooter></MainFooter>
    </div>
  );
};

export default RootLayout;
