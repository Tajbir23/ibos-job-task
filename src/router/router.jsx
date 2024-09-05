import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/authentication/SignUp";
import Login from "../pages/authentication/Login";

const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;