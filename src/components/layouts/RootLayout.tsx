import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import MainFooter from "../ui/MainFooter";

const RootLayout = () => {
  return (
    <div className="bg-yellow-100">
      <Navbar></Navbar>
      <div className="mx-auto w-4/5 mt-10 ">
        <Outlet></Outlet>
      </div>
      <MainFooter></MainFooter>
    </div>
  );
};

export default RootLayout;
