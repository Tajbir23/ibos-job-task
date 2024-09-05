import { Outlet } from "react-router-dom"
import Navbar from "../component/Home/Navbar"
import Footer from "../component/Footer"


const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout