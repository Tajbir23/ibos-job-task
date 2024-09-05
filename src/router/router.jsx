import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/authentication/SignUp";

const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />
    }
])

export default router;