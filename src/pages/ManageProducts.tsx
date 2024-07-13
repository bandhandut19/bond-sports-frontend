import { Button } from "@/components/ui/button";
import PageSlider from "@/components/ui/PageSlider";
import AddProducts from "@/utils/AddProducts";
import { manageProductsSlider } from "@/utils/manageProductsSlider";
import TopMarginSetter from "@/utils/TopMarginSetter";
import UpdateProducts from "@/utils/UpdateProducts";

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
          <AddProducts></AddProducts>
        </Button>
        <Button className="h-[10rem] text-xl hover:text-2xl">
          <UpdateProducts></UpdateProducts>
        </Button>
      </div>
    </>
  );
};

export default ManageProducts;
