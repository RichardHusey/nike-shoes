import { useState } from "react";

import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
const Nav = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap items-center justify-between">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="lg:hidden rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div
        className={`${!isMobileMenuShown && `hidden`} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 p-4 rounded-lg lg:bg-transparent lg:border-none">
          {ROUTES.map((route, index) => {
            return (
              <li
                className={`lg:hover:bg-transparent lg:hover:text-blue-500 py-2 px-3 cursor-pointer rounded ${index === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(index === 3 || index === 4) && "lg:text-white"}`}
                key={`${index}${route}`}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart button */}
      <div className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8">
        <div className="flex-center cursor-pointer h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
