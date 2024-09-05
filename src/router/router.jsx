import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/authentication/SignUp";
import Login from "../pages/authentication/Login";
import Layout from "../layout/Layout";

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
        element: <Layout />
    }
])

export default router;