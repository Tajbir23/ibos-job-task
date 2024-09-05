import { useContext } from "react"
import { FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from "../../providers/AuthProvider"
import { useNavigate } from "react-router-dom"


const ProviderSIgnIn = () => {
    const {signInWithGoogle, signInWithApple} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoolge = async(e) => {
        e.preventDefault()
        const user = await signInWithGoogle()
        console.log('user', user)
        if(user){
            navigate('/')
        }
    }

    const handleApple = async(e) => {
        e.preventDefault()
        const user = await signInWithApple()
        navigate('/')
    }
  return (
    <div className="mt-5 flex gap-5">
            <div onClick={handleGoolge} className="h-14 w-full font-medium text-[12px] border-2 rounded-md cursor-pointer flex items-center justify-center gap-2">
              <FcGoogle className="h-6 w-6" />
              <h1>Sign in with Google</h1>
            </div>

            <div onClick={handleApple} className="h-14 w-full font-medium text-[12px] border-2 rounded-md cursor-pointer flex items-center justify-center gap-2">
              <FaApple className="h-6 w-6" />
              <h1>Sign in with Apple</h1>
            </div>
          </div>
  )
}

export default ProviderSIgnIn