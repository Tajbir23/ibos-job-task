import { Outlet } from "react-router-dom"
import Category from "../pages/Products/Category"


const ProductsLayout = () => {
  return (
    <div className="flex py-10">
        <Category />
        <Outlet />
    </div>
  )
}

export default ProductsLayout