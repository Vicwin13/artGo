import ig from "../Images/ig.svg";
import logo from "../Images/logo_black.svg";
import tk from "../Images/tiktok.png";
import x from "../Images/x.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-brown1  text-white flex justify-between ">
        <div className="border-2 text-[14px] md:text-[18px] border-white w-full">
          <p className="border-b-1 border-b pl-5 py-2 ">Contact</p>
          <p className="border-b-1 border-b pl-5 py-2">Services</p>
          <p className="border-b-1 border-b pl-5 py-2">Careers</p>
          <p className="border-b-1 border-b pl-5 py-2">Sustainability</p>
          <p className="border-b-1 border-b pl-5 py-2">Blog</p>
          <div className="">
            <img
              className=" w-[80px] pt-5 md:pt-0 pl-5"
              src={logo}
              alt=" Brand logo"
            />
          </div>
        </div>
        <div className="md:w-[15rem] border-2">
          <div className="flex  mb-[15px] pt-3 gap-4 flex-col items-center">
            <img className="w-[31px] md:w-[40px]" src={ig} alt="IG" />
            <img className="w-[31px] md:w-[40px]" src={x} alt="X" />
            <img className="w-[31px] md:w-[40px]" src={tk} alt="tiktok" />
          </div>
          <p className="border-b-1 border-t text-sm md:text-base border-b pl-5 py-2">
            Privacy policy
          </p>
          <p className="border-b-1 text-xs md:text-base border-b pl-5 py-2">
            Terms of Conditions
          </p>
          <p className="border-b-1 text-xs md:text-base border-b pl-5 py-2">
            Designed by <span>AB</span>
          </p>
        </div>
      </footer>
    </>
  );
}
