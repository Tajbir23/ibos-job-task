import { NavLink } from "react-router-dom"


const NavigationLink = () => {
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/custom"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Custom
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Blog
              </NavLink>
            </li>
          </ul>
  )
}

export default NavigationLink