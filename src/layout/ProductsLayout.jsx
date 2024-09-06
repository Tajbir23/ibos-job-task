import { Outlet } from "react-router-dom";
import Category from "../pages/Products/Category";

const ProductsLayout = () => {
  return (
    <div className="flex py-10">
      <Category />
      <div className="flex-1 mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
