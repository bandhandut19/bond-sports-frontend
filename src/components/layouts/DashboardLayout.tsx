import { Outlet } from "react-router-dom";
import DashboardNavbar from "../ui/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
