import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex flex-col bg-slate-200 text-base-content lg:p-5 px-2 py-10 items-center justify-center font-primary-one mt-28 min-h-64">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-48 gap-10 lg:p-2 items-center justify-center">
        <nav className="flex flex-col mt-14 items-center justify-center text-center">
          <h1 className="lg:text-2xl text-xl text-center font-bold font-name mb-5">
            Bond Sports
          </h1>
          <div className="flex md:flex-col flex-col gap-1 items-left justify-center cursor-pointer">
            <span>0179753731111</span>
            <span>bondSports@gmail.com</span>
          </div>
        </nav>
        <nav className="flex flex-col mt-10 text-center lg:ml-10">
          <h6 className="footer-title text-center font-extrabold">
            Quick Navigation
          </h6>
          <Link to={"/aboutme"} className="link link-hover ">
            About me
          </Link>
          <Link to={"/services"} className="link link-hover">
            Services
          </Link>
          <Link to={"/"} className="link link-hover">
            Contact
          </Link>
          <Link to={"/portfolio"} className="link link-hover">
            Portfolio
          </Link>
        </nav>
        <nav className="lg:ml-10 ml-5">
          <h6 className="footer-title text-center">Social Links</h6>
          <div className="grid grid-flow-col gap-4  ml-2">
            {/* Linkedin */}
            <Link
              to={"https://www.linkedin.com/in/alyssa-runge-7bb84991"}
              target="_blank"
            >
              <div className="w-[25px]">
                <img src="/linkedin.png" alt="" />
              </div>
            </Link>
            {/* Instagram */}
            <Link
              to={
                "https://www.instagram.com/proofreading.by.alyssa?igsh=OW9jazgxOHV3bG9s"
              }
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

export default Footer;
