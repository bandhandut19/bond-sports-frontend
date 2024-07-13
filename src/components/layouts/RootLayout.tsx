import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
// import Footer from "../ui/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto w-4/5 mt-10">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default RootLayout;
