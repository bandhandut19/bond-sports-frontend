import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import MainFooter from "../ui/MainFooter";

const RootLayout = () => {
  return (
    <div className="bg-yellow-100 overflow-x-hidden">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <MainFooter></MainFooter>
    </div>
  );
};

export default RootLayout;
