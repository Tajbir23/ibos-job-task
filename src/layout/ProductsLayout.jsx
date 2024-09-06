import { Outlet } from "react-router-dom";
import Category from "../pages/Products/Category";

const ProductsLayout = () => {
  return (
    <div className="grid grid-cols-5">
      <Category />
      <div className="flex-1 mt-4 col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
