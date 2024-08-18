import TopMarginSetter from "@/utils/TopMarginSetter";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { TContactForm } from "@/types/contact";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const { register, handleSubmit } = useForm<TContactForm>();
  const handleContactForm = (data: TContactForm) => {
    const emailInfo = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "BonDeV | 2024 | Bond Sports",
    };
    console.log(import.meta.env.VITE_REACT_APP_PUBLIC_KEY);
    emailjs;
    emailjs
      .send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        emailInfo,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        toast("Message Sent Successfully");
      })
      .catch(() => {
        toast("Message Sending Failed.");
      });
  };
  return (
    <div>
      <TopMarginSetter></TopMarginSetter>
      <div className="grid lg:grid-cols-2 lg:gap-5 gap-10 bg-yellow-400 lg:py-6 lg:px-3 py-10 px-5 rounded-md">
        <div className="bg-orange-400 bg-opacity-75 px-8 py-5 rounded-md">
          <h1 className="text-3xl lg:text-left text-center font-extrabold mb-10 text-white">
            Get In Touch
          </h1>

          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(handleContactForm)}
          >
            <Label htmlFor="name" className="font-bold">
              Name
            </Label>
            <Input
              className="mb-5 mt-2 bg-yellow-300 text-black placeholder:text-black placeholder:text-opacity-35 placeholder:font-bold"
              type="text"
              id="name"
              required
              {...register("name")}
              placeholder="Enter your name"
            ></Input>
            <Label htmlFor="email" className="font-bold">
              Email
            </Label>
            <Input
              className="mb-5 mt-2 bg-yellow-300 placeholder:text-black placeholder:text-opacity-35 placeholder:font-bold"
              placeholder="Enter your email"
              {...register("email")}
              required
              id="email"
            ></Input>
            <Label htmlFor="message" className="font-bold">
              Message
            </Label>
            <textarea
              className="mb-5 bg-yellow-300 text-left px-2 py-2 rounded-md placeholder:text-black placeholder:text-opacity-35 placeholder:font-bold"
              placeholder="Enter your message here"
              {...register("message")}
              required
            ></textarea>
            <Button type="submit" className="hover:bg-white hover:text-lg">
              Send Message
            </Button>
          </form>
        </div>
        <div className="bg-orange-400 bg-opacity-75  px-8 py-5 rounded-md">
          <h1 className="text-3xl lg:text-right text-center font-extrabold mb-10 text-white">
            Contact Information
          </h1>
          <div className="items-center justify-center flex gap-3 flex-col text-center">
            <div>
              <div className="text-center justify-center items-center flex flex-col">
                <FaLocationDot className="text-4xl text-red-600" />
              </div>
              <h1 className="text-center text-slate-700 text-xl font-extrabold outline-dashed px-5 mt-3 mb-3">
                Store Location
              </h1>
              <div>
                <h1>
                  1234 Ojana Road, <br />
                  Merul Badda , Dhaka
                </h1>
              </div>
            </div>
            <div>
              <div className="text-center justify-center items-center flex flex-col">
                <MdEmail className="text-4xl text-yellow-300" />
              </div>
              <h1 className="text-center text-slate-700 text-xl font-extrabold outline-dashed px-5 mt-3 mb-3">
                Email
              </h1>
              <div>
                <h1>bondon21081@gmail.com</h1>
              </div>
            </div>
            <div>
              <div className="text-center justify-center items-center flex flex-col">
                <FaPhoneAlt className="text-4xl text-green-600" />
              </div>
              <h1 className="text-center text-slate-700 text-xl font-extrabold outline-dashed px-5 mt-3 mb-3">
                Contact No
              </h1>
              <div>
                <h1>01797537300</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
