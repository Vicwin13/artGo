import { Link } from "react-router-dom";
import arrow from "../Images/downArrow.svg";
import artPieces from "./ArtPieces";
import forward from "../Images/forward.svg";
import right from "../Images/rightArrow.svg";
export default function Card() {
  return (
    <>
      <div className="px-8">
        <div className="flex justify-between pt-8 pb-7">
          <div className="flex items-center gap-4">
            <div className="size1:hidden flex gap-3 border p-2">
              <p>Filters</p> <img src={arrow} alt="" />
            </div>
            <p>Shop</p>
            <img src={forward} alt="" />
            <p>Digital Art</p>
          </div>
          <div className="flex items-center gap-4 border p-1">
            <p>Sort</p>
            <img src={arrow} alt="" />
          </div>
        </div>

        {/* This is where the grid begins */}

        <div className="grid grid-cols-2 w-fit gap-2 mt-2 items-start">
          {artPieces.map((art, index) => {
            return (
              <div key={index}>
                <div className=" w-fit ">
                  <div>
                    <img
                      src={art.image}
                      className="w-[450px]"
                      alt={art.title}
                    />
                  </div>
                  <div>
                    <div className=" p-3 flex items-center justify-between">
                      <p>
                        {art.title} | {art.amount}
                      </p>
                      <div className="flex gap-3">
                        <img width="15px" src={art.likeEmoji} alt="" />
                        <img width="15px" src={art.addToCartEmoji} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pt-16">
          <div className="flex justify-center items-center gap-3">
            <p className="border w-fit border-black px-2">1</p>
            <p className="border w-fit border-gray text-gray-500 px-2">2</p>
            <p className="border w-fit border-gray text-gray-500 px-2">3</p>
            <p className="border w-fit border-gray text-gray-500 px-2">4</p>
            <p className="border w-fit border-gray text-gray-500 px-2">5</p>
            <img src={right} width="10px" alt="" />
          </div>
          <div>
            <p className="w-[70%] text-center mx-auto py-10">
              Need help? Contact our
              <span className="text-bold">Art consultant</span>
              and we can help you choose the best style to represent your
              vision, brand, or story.
            </p>
          </div>
          <Link to="/cart">
            <p className="p-4 text-lg w-fit mx-auto mb-10 text-white bg-black">
              Go to cart
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
