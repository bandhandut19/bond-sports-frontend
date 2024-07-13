import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import ManageProducts from "../pages/ManageProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SingleProductPage from "../pages/SingleProductPage";

const root = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/manage-products",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/single-product",
        element: <SingleProductPage></SingleProductPage>,
      },
    ],
  },
]);

export default root;
