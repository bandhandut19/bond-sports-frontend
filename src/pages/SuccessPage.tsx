import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex-col gap-10 text-center text-2xl flex items-center justify-center  font-bold text-slate-600 ">
      <Link to={"/"} className="text-xl">
        <img
          className="w-[12rem] h-[10rem] bg-orange-600 rounded-e-full rounded-ss-full"
          src="https://i.postimg.cc/bwDBLpjB/1-removebg-preview.png"
          alt=""
        />
      </Link>
      <span className="border-4  animate-bounce py-5 px-10 border-green-500 rounded-full bg-yellow-400 cursor-pointer  hover:text-white">
        Order Has been Placed Succeessfully{" "}
      </span>
      <Link to={"/"}>
        <Button className="hover:border-2 hover:text-white hover:bg-slate-400 text-2xl">
          Go To Home
        </Button>
      </Link>
    </div>
  );
};

export default SuccessPage;
