import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const AboutLayout = () => {
  return (
    <div className="bg-yellow-100 bg-opacity-45">
      <Navbar></Navbar>
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/FKFvfbNb/side-view-female-volleyball-players-playing-beach.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-35"></div>
          <div className="mx-auto w-11/12 mt-10 mb-10 lg:px-5 text-neutral-content text-center">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutLayout;
