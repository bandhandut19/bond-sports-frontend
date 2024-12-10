/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const handleLogin = async (data: FormValues) => {
    console.log(data);

    try {
      const res = await axios.post(
        "https://bond-sports-backend.vercel.app/api/bond-sports/user/login",
        data,
        {
          withCredentials: true,
        }
      );

      if (res.data.data.userAccessToken) {
        localStorage.setItem("userAccessToken", res.data.data.userAccessToken);
        navigate("/adminpanel");
        toast.success("Logged In Successfully");
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="hero bg-yellow-400 min-h-screen">
      <div className=" w-4/5 bg-orange-500 shrink-0 shadow-2xl">
        <form className=" py-20 px-10" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
              {...register("password")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn  bg-yellow-400 border-none outline-none ">
              <span className="text-black">Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
