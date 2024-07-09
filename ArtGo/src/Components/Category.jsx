import "../App.css";

import add from "../Images/add.svg";
import arrow from "../Images/downArrow.svg";
import minus from "../Images/minus.svg";

export default function Category() {
  return (
    <>
      <div className="border-r-2 size3:hidden size1:block border-gray-200 h-fit p-6 w-[264px]">
        <h1>Category</h1>

        <div className="border-2 flex justify-between items-center w-fit gap-4 p-1">
          <p>Illustrations</p>
          <img src={arrow} alt="" />
        </div>
        <div>
          <div className="flex justify-between items-center pt-4 border-b-2">
            <p>Subject</p>
            <img src={minus} alt="" />
          </div>
          <div className="pt-4">
            <p className="flex items-center">
              <input type="checkbox" id="item1" className="mr-2" />
              <label htmlFor="item1" className="select-none">
                Random
              </label>
            </p>
            <p className="flex items-center">
              <input type="checkbox" id="item1" className="mr-2" />
              <label htmlFor="item1" className="select-none">
                Abstract
              </label>
            </p>
            <p className="flex items-center">
              <input type="checkbox" id="item1" className="mr-2" />
              <label htmlFor="item1" className="select-none">
                People
              </label>
            </p>
            <p className="flex items-center">
              <input type="checkbox" id="item1" className="mr-2" />
              <label htmlFor="item1" className="select-none">
                Portrait
              </label>
            </p>
            <p className="flex items-center">
              <input type="checkbox" id="item1" className="mr-2" />
              <label htmlFor="item1" className="select-none">
                Animal
              </label>
            </p>
            <p className="flex items-center">
              <input type="checkbox" id="item1" className="mr-2" />
              <label htmlFor="item1" className="select-none">
                Landscape
              </label>
            </p>
            <p className="text-sm text-gray-600 cursor-pointer">Show more</p>
          </div>
        </div>
        <div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Style</p>
            <img src={add} alt="" />
          </div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Price</p>
            <img src={add} alt="" />
          </div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Material</p>
            <img src={add} alt="" />
          </div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Medium</p>
            <img src={add} alt="" />
          </div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Color</p>
            <img src={add} alt="" />
          </div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Size</p>
            <img src={add} alt="" />
          </div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Year</p>
            <img src={add} alt="" />
          </div>
          <div className="flex text-lg border-b-2 p-3 justify-between items-center">
            <p>Collection</p>
            <img src={add} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
