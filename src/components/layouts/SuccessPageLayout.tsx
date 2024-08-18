import { Outlet } from "react-router-dom";

const SuccessPageLayout = () => {
  return (
    <div className="bg-gradient-to-bl from-yellow-400 to-orange-500 min-h-screen border-2 border-green-500">
      <Outlet></Outlet>
    </div>
  );
};

export default SuccessPageLayout;
