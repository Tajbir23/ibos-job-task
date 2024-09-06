import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/authentication/SignUp";
import Login from "../pages/authentication/Login";
import Layout from "../layout/Layout";
import ProductsLayout from "../layout/ProductsLayout";
import Order from "../pages/Order/Order";
import CategoryProducts from "../pages/Products/CategoryProducts";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "products",
                element: <ProductsLayout />,
                children: [
                    {
                        path: "",
                        element: <Products />
                    },
                    {
                        path: "category/:category",
                        element: <CategoryProducts />
                    }
                ]
            },
            {
                path: "cart",
                element: <Order />
            }
        ]
    }
])

export default router;