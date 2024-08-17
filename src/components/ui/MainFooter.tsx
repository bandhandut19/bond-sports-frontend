import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className="footer shadow-2xl shadow-black flex flex-col bg-yellow-400 text-base-content lg:p-5 px-2 py-10 items-center justify-center font-primary-one mt-28 min-h-64">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-48 gap-10 lg:p-2 items-center justify-center">
        <nav className="flex flex-col mt-14 items-center justify-center text-center -ml-3">
          <Link to={"/"} className="text-xl ml-5">
            <img
              className="w-[8rem] h-[7rem] bg-orange-600 rounded-e-full rounded-ss-full"
              src="https://i.postimg.cc/bwDBLpjB/1-removebg-preview.png"
              alt=""
            />
          </Link>
          <div className="flex md:flex-col flex-col mt-5 font-bold gap-1 items-left justify-center cursor-pointer">
            <span>01797537300</span>
            <span>bondon21081@gmail.com</span>
          </div>
        </nav>
        <nav className="flex flex-col mt-10 text-center lg:ml-10">
          <h6 className="footer-title text-center font-extrabold">
            Quick Navigation
          </h6>
          <Link to={"/all-products"} className="link link-hover ">
            All Products
          </Link>
          <Link to={"/manage-products"} className="link link-hover">
            Manage Products
          </Link>
          <Link to={"/about"} className="link link-hover">
            About Us
          </Link>
          <Link to={"/"} className="link link-hover">
            Contact Us
          </Link>
        </nav>
        <nav className="lg:ml-10 ml-5">
          <h6 className="footer-title text-center">Social Links</h6>
          <div className="grid grid-flow-col gap-4  ml-2">
            {/* Linkedin */}
            <Link
              to={"https://bd.linkedin.com/in/bondon-datta-56b375161"}
              target="_blank"
            >
              <div className="w-[25px]">
                <img src="/linkedin.png" alt="" />
              </div>
            </Link>
            {/* Instagram */}
            <Link
              to={"https://www.instagram.com/bandhan_datta/"}
              target="_blank"
            >
              <div className="w-[25px]">
                <img src="/instagram.png" alt="" />
              </div>
            </Link>
          </div>
        </nav>
      </div>
      <h1>
        <p>
          &copy; <span id="year">2024</span> BonDeV(Bondon). All rights
          reserved.
        </p>
      </h1>
      {/* <div className="text-center">
        <h1 className="lg:text-7xl text-5xl font-bold font-name mb-10">
          Alyssa Runge
        </h1>
      </div> */}
    </footer>
  );
};

export default MainFooter;
