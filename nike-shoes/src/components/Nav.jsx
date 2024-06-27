import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
const Nav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
      <div className="w-full">
        <ul className="bg-gray-50 text-lg border border-gray-100 p-4 rounded-lg">
          {ROUTES.map((route, index) => {
            return (
              <li
                className={`py-2 px-3 cursor-pointer rounded ${index === 0 ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                key={`${index}${route}`}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
