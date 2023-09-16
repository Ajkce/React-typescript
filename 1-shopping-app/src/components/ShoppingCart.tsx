import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import StoreItems from "../data/items.json";

const ShoppingCart = () => {
  const { closeCart, cartItems } = useContext(ShoppingContext);
  return (
    <div className="h-[100vh] absolute bg-white w-[500px] right-0 z-10 px-5 py-5 top-0">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-2xl ">Cart</h4>
        <div
          className="bg-red-500 text-white p-1 rounded-full font-bold hover:bg-red-700"
          onClick={closeCart}
        >
          <AiOutlineClose> </AiOutlineClose>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      </div>
      <div className="text-right mt-7 font-bold">
        Total :{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = StoreItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
