import Card from "./Card";
import Category from "./Category";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-[300px] flex justify-center items-center text-white bg-brown1">
          <div className="mx-auto w-4/5 text-center">
            <h1 className=" text-[30px] font-bold md:text-[60px] ">
              Digital Art
            </h1>

            <p className=" md:text-[20px] mx-auto w-full md:w-[600px] lg:w-[880px]">
              Welcome to our extensive collection of uniquely contemporary
              digital art. We have various styles, mediums, sizes, and subjects
              to fit any interior.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-5">
          <Category />
          <Card />
        </div>
      </div>
    </>
  );
}
