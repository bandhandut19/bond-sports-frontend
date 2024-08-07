import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Navbar = () => {
  return (
    <div className="navbar bg-yellow-400 px-7">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/all-products"}>All Products</NavLink>
            </li>

            <li>
              <NavLink to={"/manage-products"}>Manage Products</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="text-xl">
          <img
            className="w-[8rem] h-[7rem] bg-orange-600 rounded-e-full rounded-ss-full"
            src="https://i.postimg.cc/bwDBLpjB/1-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 ">
          <li className="text-lg font-semibold ">
            <NavLink
              className="hover:bg-orange-600 hover:text-white"
              to={"/all-products"}
            >
              All Products
            </NavLink>
          </li>

          <li className="text-lg font-semibold">
            <NavLink
              className="hover:bg-orange-600 hover:text-white"
              to={"/manage-products"}
            >
              Manage Products
            </NavLink>
          </li>
          <li className="text-lg font-semibold">
            <NavLink
              className="hover:bg-orange-600 hover:text-white"
              to={"/about"}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-x-10 py-5 px-8">
          <div className="text-3xl font-semibold text-orange-600 border-4 border-orange-600 p-2 border-t-0 border-r-0 border-opacity-40 rounded-lg">
            <NavLink to={"/cart"} className="flex-1 ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <FaShoppingCart />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-orange-600 border-none text-white">
                    <p>Cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </NavLink>
          </div>
          <div className="text-3xl font-bold text-orange-600 border-4 border-orange-600 p-2 border-b-0 border-l-0 border-opacity-40 rounded-lg">
            <NavLink to={"/checkout"} className="flex-1 ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <IoBagCheckOutline />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-orange-600 border-none text-white">
                    <p>Checkout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
