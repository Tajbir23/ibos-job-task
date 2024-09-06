/* eslint-disable react/prop-types */

import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"


const Cart = ({cart, count}) => {
  const{cartData, setCartData} = useContext(AuthContext)

  const removeItems = (e) => {
    e.preventDefault()
    const id = cart?.id

    const updateCartData= cartData.filter((item) => item?.id !== id)
    setCartData(updateCartData)
  }

  const removeOneItem = (e) => {
    e.preventDefault();
    const id = cart?.id;
  
    const itemIndex = cartData.findIndex((item) => item?.id === id);
  
    if (itemIndex !== -1) {
      const updatedCartData = [...cartData];
      updatedCartData.splice(itemIndex, 1);
  
      setCartData(updatedCartData);
    }
  };

  const addOneItem = (e) => {
    e.preventDefault();
    setCartData((prevData) => [
      ...prevData,
      cart
    ])
  }
  
  return (
    <div className="p-5 border-b last:border-none">
    <div className="flex gap-5">
      <div className="flex gap-2 items-center justify-center border rounded-md py-1 px-3 my-auto">
        <button onClick={removeOneItem} className="text-2xl">-</button>
        <span className="text-xl font-semibold">{count}</span>
        <button onClick={addOneItem} className="text-2xl">+</button>
      </div>

      <div className="flex gap-5">
        <img src={cart?.thumbnail} alt="" className="h-[88px] w-[88px] bg-[#DEDEDE] rounded-md" />
        <h1 className="font-bold text-[16px]">{cart?.title}</h1>
      </div>

      <div className="ml-auto flex flex-col items-end justify-between">
        <button onClick={removeItems}>X</button>
      </div>
      
    </div>
    <div className="pb-5">
    <h1 className="float-right font-semibold text-xl">${cart?.price * count}</h1>
    </div>
    </div>
  )
}

export default Cart