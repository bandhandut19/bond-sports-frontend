import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { toast } from "sonner";

const Navbar = () => {
  const items = useAppSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const token = useAppSelector((state: RootState) => state.auth.token);
  const handleLogout = () => {};
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.warning("No products to checkout");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div className="navbar bg-yellow-400 px-7 shadow-lg shadow-orange-400 border-orange-600 border-b-4">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-orange-700"
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
            className="menu flex gap-2 items-right justify-center menu-sm dropdown-content text-white bg-yellow-400 rounded-box z-[1] mt-3 min-h-45 w-96 p-2 shadow"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                <span className="text-2xl font-bold">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/all-products"}
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                <span className="text-2xl font-bold">All Products</span>
              </NavLink>
            </li>

            <li className={token ? "block" : "hidden"}>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                <span className="text-2xl font-bold ">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                <span className="text-2xl font-bold">About Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                <span className="text-2xl font-bold">Contact Us</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="text-xl">
          <img
            className="w-[5rem] h-[4rem] bg-orange-600 rounded-e-full rounded-ss-full"
            src="https://i.postimg.cc/bwDBLpjB/1-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav>
          <ul className="menu menu-horizontal px-1 gap-5 ">
            <li className="text-lg font-semibold active:bg-red-700">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg font-semibold ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
                to={"/all-products"}
              >
                All Products
              </NavLink>
            </li>

            <li className={token ? "block text-lg font-semibold " : "hidden"}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
                to={"/about"}
              >
                About Us
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                className={({ isActive }) =>
                  `nav-link hover:bg-orange-600 hover:text-white ${
                    isActive ? "nav-link-active" : ""
                  }`
                }
                to={"/contact"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-end">
        <div className="text-center flex items-center justify-center">
          {token ? (
            <button
              onClick={handleLogout}
              className="btn rounded-md px-6 py-6 text-center bg-orange-600 border-none text-white hover:bg-orange-500"
            >
              <h1 className="text-center -mt-2 ">Logout</h1>
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn rounded-md px-6 py-6 text-center bg-orange-600 border-none text-white hover:bg-orange-500"
            >
              <h1 className="text-center -mt-2 ">Login</h1>
            </button>
          )}
        </div>
        <div className="flex gap-x-10 py-2 px-3">
          <div className="text-2xl font-semibold text-orange-600 border-4 border-orange-600 p-2 border-t-0 border-r-0 border-opacity-40 rounded-lg">
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
          <span className=" cursor-pointer  absolute top-6 right-20 mr-4 bg-orange-600 rounded-full p-1 text-white font-bold">
            {items.length === 0 ? (
              <span className="p-2"> {items.length} </span>
            ) : (
              <span>+{items.length}</span>
            )}
          </span>
          <div className="text-2xl font-bold text-orange-600 border-4 border-orange-600 p-2 border-b-0 border-l-0 border-opacity-40 rounded-lg">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <button onClick={handleCheckout}>
                      <IoBagCheckOutline />
                    </button>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-orange-600 border-none text-white">
                  <p>Checkout</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
