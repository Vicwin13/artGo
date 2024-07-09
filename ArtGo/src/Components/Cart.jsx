import { Link } from "react-router-dom";
import back from "../Images/back.svg";
import cancel from "../Images/cancel.svg";
import image1 from "../Images/first.png";
import image2 from "../Images/face.png";
import image3 from "../Images/glass_ball.png";
import image4 from "../Images/girl.png";
import image5 from "../Images/white_love.svg";
import image6 from "../Images/white_cart.svg";
export default function Cart() {
  return (
    <>
      <div className=" bg-brown1 text-white  font-semibold">
       <div className=" flex-col md:flex-row p-8 text-sm w-fit mx-auto lg:text-xl justify-around">

        <p>Shopping Cart</p>
        <p>Purchases (12)</p>
        <p>Cart Items (2)</p>
        <p>Favorites (32)</p>
       </div>
      </div>
      <section>
        <Link to="/">
          <div className="p-4 flex gap-2 cursor-pointer items-center">
            <img src={back} width="14px" alt="" />
            <p className="text-gray-500">Back to Shop</p>
          </div>
        </Link>
        <div className="">
          <div className="px-8 flex items-start gap-2 py-7">
            <input type="checkbox" />
            <div className="flex lg:flex-row items-start flex-col">
            <img src={image1} className="lg:w-[300px] w-[100px]" alt="" />
            <div className="lg:pl-5 ">
              <p className="font-bold">Silence</p>
              <p>Type: Digital art</p>
              <p>Category: People</p>
              <p>Dimensions: 172.7 W x 172.7 H x 0.3 D cm</p>
              <p>Year of Creation: 2016</p>

              <div className="flex gap-2">
                <p>Quantity</p>
                <select className="w-[4rem] p-1" name="Quantity" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <p className="text-xs py-4 text-green-500">
                Guaranteed arrival on 14th July if you order today
              </p>
              <p className="text-xl font-semibold">$3000</p>
            </div>
            </div>
            <div>
              <img width="12px" src={cancel} alt="" />
            </div>
          </div>
          <hr />
          <div className="px-8 flex items-start gap-2 py-7">
            <input type="checkbox" />
            <div className="lg:flex-row flex items-start flex-col">
            <img src={image2} className="lg:w-[300px] w-[100px]" alt="" />
            <div className="lg:pl-5 ">
              <p className="font-bold"> Ethereal</p>
              <p>Type: Digital art</p>
              <p>Category: People</p>
              <p>Dimensions: 172.7 W x 172.7 H x 0.3 D cm</p>
              <p>Year of Creation: 2016</p>

              <div className="flex gap-2">
                <p>Quantity</p>
                <select className="w-[4rem] p-1" name="Quantity" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <p className="text-xs py-4 text-green-500">
                Guaranteed arrival on 14th July if you order today
              </p>
              <p className="text-xl font-semibold">$3000</p>
            </div>
            </div>
            <div>
              <img width="12px" src={cancel} alt="" />
            </div>
          </div>
        </div>

<div className="px-8">
  <input type="checkbox" name="Select All" id="" />
  <label htmlFor="Select All"> Select All</label>
</div>
        <div className=" flex lg:flex-row flex-col items-center justify-center py-14">
          <p className="p-2 px-4  border align-center  lg:text-left border-gray-300 text-lg">
            Total: $6000
          </p>
          <p className="p-2 mt-1 md:mt-0 px-4 text-lg border lg:text-left text-center  border-black bg-black text-white">
            Proceed to checkout (2)
          </p>
        </div>

        <hr />

        <div className="py-10">
          <p className="px-8"> More from Digital Art</p>
          <div className="flex items-center gap-8 px-8">
            <div>
              <div className=" w-fit ">
                <div>
                  <img src={image3} className="w-[270px] py-2" alt="Image" />
                </div>
                <div>
                  <div className=" py-1 flex items-center justify-between">
                    <p>Magic | $3000</p>
                    <div className="flex gap-3">
                      <img width="15px" src={image5} alt="" />
                      <img width="15px" src={image6} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" w-fit ">
                <div>
                  <img src={image4} className="w-[270px] py-2" alt="Image" />
                </div>
                <div>
                  <div className=" py-1 flex items-center justify-between">
                    <p>Adaline | $3000</p>
                    <div className="flex gap-3">
                      <img width="15px" src={image5} alt="" />
                      <img width="15px" src={image6} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
