import { Outlet } from "react-router-dom"
import Navbar from "../component/Home/Navbar"
import Footer from "../component/Footer"


const Layout = () => {
  return (
    <div>
        <Navbar />
        <div className="mt-10">
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout