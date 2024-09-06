import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Cart from "../../component/Cart/Cart";
import OrderDetails from "../../component/Cart/OrderDetails/OrderDetails";

const Order = () => {
  const { cartData } = useContext(AuthContext);

  const countMap = cartData.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  const uniqueCartItems = cartData.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  const totalPrice = uniqueCartItems.reduce((acc, cart) => {
    return acc + cart?.price * countMap[cart?.id];
  }, 0);
  return (
    <div className="grid grid-cols-3 mt-5 gap-10">
      <div className="col-span-2">
        <div>
          <h1 className="font-semibold text-[28px]">
            An overview of your order
          </h1>
        </div>
        <div className="mt-10 bg-[#FAFAFA] rounded-md">
          {uniqueCartItems.map((cart) => {
            return (
              <Cart key={cart.id} cart={cart} count={countMap[cart?.id]} />
            );
          })}
        </div>
      </div>
      <div>
        <OrderDetails totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Order;
