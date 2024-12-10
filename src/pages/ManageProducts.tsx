// import PageSlider from "@/components/ui/PageSlider";
import UpdateProductsButton from "@/components/ui/UpdateProductsButton";
import AddProducts from "@/utils/AddProducts";
// import { manageProductsSlider } from "@/utils/manageProductsSlider";
// import TopMarginSetter from "@/utils/TopMarginSetter";

//! NEED TO ADD SPECIFIC PHOTOS FOR MANAGE PRODUCTS

const ManageProducts = () => {
  return (
    <div
      className=" relative min-h-screen bg-opacity-25 bg-cover"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/wj01tC4m/pexels-digitalbuggu-273786.jpg')",
      }}
    >
      {/* <div className="flex items-center justify-center">
        <div className="w-[40rem] ">
          <PageSlider sliderPhotos={manageProductsSlider}></PageSlider>
        </div>
      </div> */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-10">
          <div className="text-center mt-20">
            <AddProducts></AddProducts>
          </div>
          <div className="text-center mt-20">
            <UpdateProductsButton></UpdateProductsButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
