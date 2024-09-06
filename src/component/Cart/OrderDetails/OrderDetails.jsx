/* eslint-disable react/prop-types */


const OrderDetails = ({totalPrice}) => {
  return (
    <div>
        <div>
            <h1 className="font-semibold text-[28px]">Order Details</h1>
        </div>
        <div className="mt-10 bg-[#FAFAFA] rounded-md p-5">
            <table className="w-full">
                <tbody className="flex flex-col gap-5">
                    <tr className="flex justify-between">
                        <td className=" text-[#656565] text-xl">Subtotal</td>
                        <td className=" text-[#656565] text-xl">${totalPrice}</td>
                    </tr>
                    <tr className="flex justify-between">
                        <td className=" text-[#656565] text-xl">Shipping</td>
                        <td className=" text-[#656565] text-xl">Free</td>
                    </tr>
                    <tr className="flex justify-between">
                        <td className=" text-[#656565] text-xl">Estimated Tax</td>
                        <td className=" text-[#656565] text-xl">-</td>
                    </tr>
                </tbody>
                <hr className="border-b mt-5" />
                <tfoot className="flex justify-between mt-5">
                    <td className=" text-[#656565] text-2xl font-semibold">Total</td>
                    <td className=" text-2xl font-semibold">${totalPrice}</td>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default OrderDetails