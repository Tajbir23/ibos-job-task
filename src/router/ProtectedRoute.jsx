/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
            </div>
        </div>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" />
}

export default ProtectedRoute