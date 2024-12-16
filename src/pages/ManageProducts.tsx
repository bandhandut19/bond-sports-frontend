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
      {/* 
<div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-10">
          <div className="text-center mt-20">
            <AddProducts></AddProducts>
          </div>
          <div className="text-center mt-20">
            <UpdateProductsButton></UpdateProductsButton>
          </div>
        </div> */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="flex overflow-hidden">
          <div className="bg-yellow-400 min-h-screen px-10">
            <ul className="flex flex-col gap-5 mt-10">
              <li>
                <h1 className="bg-orange-500 px-5 text-center font-bold hover:text-white py-5 cursor-pointer">
                  Welcome Page
                </h1>
              </li>
              <li>
                <h1 className="bg-orange-500 px-5 text-center font-bold hover:text-white py-5 cursor-pointer">
                  <AddProducts></AddProducts>
                </h1>
              </li>
              <li>
                <h1 className="bg-orange-500 px-5 font-bold text-center hover:text-white py-5 cursor-pointer">
                  <UpdateProductsButton></UpdateProductsButton>
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-orange-500 bg-opacity-40 min-h-screen w-screen">
              <h1 className="text-center -ml-72 pt-10 font-bold text-5xl text-white">
                Welcome To Bond Sports Admin Panel
              </h1>
              <h1 className="text-center -ml-72 pt-10 font-bold text-5xl text-white">
                Hello, Bondon Datta{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
