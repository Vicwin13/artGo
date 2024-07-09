import "../App.css";

import { Link } from "react-router-dom";
import brand from "../Images/Brand.svg";
import cart from "../Images/cart.svg";
import menu from "../Images/menu.svg";
import user from "../Images/user.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center py-6 justify-between w-10/12 mx-auto">
        <img src={brand} className="w-[50px]" alt="brand logo" />
        <div className="flex items-center">
          <div className="flex items-center ">
            <nav className="size3:hidden sm:flex items-center text-sm gap-5 mr-6">
              <p>Home</p>
              <p>Shop</p>
              <p>Collections</p>
              <p>Events</p>
              <p>About </p>
              <p>Search</p>
            </nav>
            <img className="mr-4 sm:hidden" src={menu} alt="menu" />
          </div>
          <div className="flex items-center gap-2">
            <img src={user} className="w-[20px]" alt="user" />
            <Link to="/cart">
              <img src={cart} className="w-[20px]" alt="cart" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
