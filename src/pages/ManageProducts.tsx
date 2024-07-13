import { Button } from "@/components/ui/button";
import PageSlider from "@/components/ui/PageSlider";
import { manageProductsSlider } from "@/utils/manageProductsSlider";
import TopMarginSetter from "@/utils/TopMarginSetter";

//! NEED TO ADD SPECIFIC PHOTOS FOR MANAGE PRODUCTS

const ManageProducts = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[40rem] ">
          <PageSlider sliderPhotos={manageProductsSlider}></PageSlider>
        </div>
      </div>
      <TopMarginSetter></TopMarginSetter>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-10">
        <Button className="h-[10rem] text-xl hover:text-2xl">
          Add Products
        </Button>
        <Button className="h-[10rem] text-xl hover:text-2xl">
          Update Products
        </Button>
      </div>
    </>
  );
};

export default ManageProducts;
