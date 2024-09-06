/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Card = ({ product }) => {
    const {cartData, setCartData} = useContext(AuthContext)
    const discount = Math.ceil(product?.price / (1 - (product?.discountPercentage / 100)));
  console.log("cart data",cartData)

  const addToCart = (e) => {
    e.preventDefault();
    setCartData((prevCartData) => [
        ...prevCartData,
        product
    ]);
    toast.success(`${product?.title} added to cart`)
};
    return (
      <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden flex flex-col">
        <img 
          className="w-full h-48 object-cover" 
          src={product?.thumbnail} 
          alt={product?.title} 
        />
        <div className="p-4 flex-grow flex flex-col">
          <h5 className="text-lg font-semibold mb-2 text-gray-800">{product?.title}</h5>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl font-bold text-gray-800">${product?.price}</span>
            <span className="text-gray-400 line-through">${discount}</span>
            <span className="text-red-500 font-semibold">{product?.discountPercentage}% OFF</span>
          </div>
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            {product?.description}
          </p>
          <button  onClick={addToCart}
            className="w-full bg-black text-white font-medium py-2 px-4 rounded hover:bg-gray-800 transition-colors mt-auto"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;
  