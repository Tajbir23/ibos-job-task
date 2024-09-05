import { useState } from "react";
import SideImage from "../../component/authentication/SideImage";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [isHide, setIsHide] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex">
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-[#FAFAFA] rounded-sm p-5">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Welcome To</h2>
            <h1 className="text-black text-[40px] font-bold">
              Furni<span className="text-blue-400">Flex</span>
            </h1>
            <p>Signup for purchase your desire products</p>
          </div>
          {/* signup form start */}
          <div className="mt-5 flex flex-col gap-5">
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <input
                    type="text"
                    id="first_name"
                    className="block rounded-sm px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="first_name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#707070] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    First name (optional)
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="last_name"
                    className="block rounded-sm px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="last_name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#707070] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Last name (optional)
                  </label>
                </div>
              </div>


              <div className="flex flex-col gap-5">
              <div className="relative">
                  <input
                    type="email"
                    required
                    id="email"
                    className="block rounded-sm px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#707070] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email address
                  </label>
                </div>
              <div className="relative">
                  <input
                    type={isHide ? "password" : "text"}
                    required
                    id="password"
                    className="block rounded-sm px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#707070] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Password
                  </label>
                  {isHide ? <IoEyeOutline onClick={() => setIsHide(!isHide)} className="absolute top-4 right-2 text-2xl text-gray-500 cursor-pointer" /> : <IoEyeOffOutline onClick={() => setIsHide(!isHide)} className="absolute top-4 right-2 text-2xl text-gray-500 cursor-pointer" />}
                </div>
              </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" onChange={() => setIsChecked(!isChecked)}/>
                <p className="text-sm font-medium ml-2">I agree to the <span className="underline">Terms & Policy</span></p>
              </div>
              <button type="submit" disabled={!isChecked} className="h-14 font-semibold text-[17px] rounded-md bg-black text-white">Signup</button>
            </form>
          {/* signup form end */}
            <div className="flex items-center justify-center gap-2">
              <hr className="border-gray-400 w-full" />
              <p>or</p>
              <hr className="border-gray-400 w-full" />
            </div>
          </div>

          <div className="mt-5 flex gap-5">
            <div className="h-14 w-full font-medium text-[12px] border-2 rounded-md cursor-pointer flex items-center justify-center gap-2">
              <FcGoogle className="h-6 w-6" />
              <h1>Sign in with Google</h1>
            </div>

            <div className="h-14 w-full font-medium text-[12px] border-2 rounded-md cursor-pointer flex items-center justify-center gap-2">
              <FaApple className="h-6 w-6" />
              <h1>Sign in with Apple</h1>
            </div>
          </div>
          <p className="text-center font-medium mt-5">Have an account? <Link to="/login" className="text-blue-700">Sign In</Link></p>
        </div>
      </div>
      <SideImage />
    </div>
  );
};

export default SignUp;
