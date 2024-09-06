import { Link } from "react-router-dom";
import NavigationLink from "../NavigationLink";
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, cartData } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the toggle
  const cartDataLength = cartData.length || 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-10 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/vite.svg" className="h-6" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap">
            Furni<span className="text-blue-400">Flex</span>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center gap-5">
            <Link to="/products/cart" className="relative cursor-pointer">
              <CiShoppingCart className="text-4xl" />
              <span className="absolute top-4 right-0 rounded-full p-1 w-4 h-4 flex items-center justify-center bg-black text-white text-sm font-medium ">
                {cartDataLength}
              </span>
            </Link>
            <div>
              <img
                src={user?.photoURL || "/vite.svg"}
                alt=""
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu} // Toggle the menu on click
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <NavigationLink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
