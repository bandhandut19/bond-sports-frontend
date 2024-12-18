import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import ManageProducts from "../pages/ManageProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import SingleProductPage from "../pages/SingleProductPage";
import AboutLayout from "@/components/layouts/AboutLayout";
import SuccessPage from "@/pages/SuccessPage";
import UpdateProductsDisplay from "@/utils/UpdateProductsDisplay";
import UpdateSingleProduct from "../pages/UpdateSingleProduct";
import SuccessPageLayout from "@/components/layouts/SuccessPageLayout";
import Contact from "../pages/Contact";
import PrivateRoute from "@/utils/PrivateRoute";
import LoginPage from "@/pages/LoginPage";
import DashboardLayout from "@/components/layouts/DashboardLayout";

const root = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/about",
      //   element: <About></About>,
      // },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: `/product/:id`,
        element: <SingleProductPage></SingleProductPage>,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutLayout></AboutLayout>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/success",
    element: <SuccessPageLayout></SuccessPageLayout>,
    children: [
      {
        path: "/success",
        element: <SuccessPage></SuccessPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <ManageProducts></ManageProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateproduct",
        element: (
          <PrivateRoute>
            <UpdateProductsDisplay></UpdateProductsDisplay>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateproduct/:id",
        element: <UpdateSingleProduct></UpdateSingleProduct>,
      },
    ],
  },
]);

export default root;
