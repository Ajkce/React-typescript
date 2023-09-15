import { useContext } from "react";
import { formatCurrency } from "../utilities/formatCurrency";

import { ShoppingContext } from "../context/ShoppingCartContext";

type StoreProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ imgUrl, name, price, id }: StoreProps) => {
  const {
    getItemQuantity,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useContext(ShoppingContext);
  const quantity = getItemQuantity(id);
  return (
    <div className="h-[380px] w-full shadow flex flex-col">
      <img src={imgUrl} alt="" className="h-[240px] object-cover w-full" />
      <div className="flex justify-between items-baseline mb-4 mt-1 mx-2">
        <h4 className="font-semibold text-2xl ">{name}</h4>
        <p className="text-slate-600 text-lg">{formatCurrency(price)}</p>
      </div>
      <div className="my-auto mx-2 ">
        {" "}
        {quantity ? (
          <div className="flex items-center flex-col gap-2 ">
            <div className="flex gap-5 items-center">
              <p
                className="bg-green-800 px-[15px]  rounded-md text-white py-[6px] font-bold leading-normal flex "
                onClick={() => decreaseQuantity(id)}
              >
                -
              </p>
              <p>
                <span>{quantity}</span> in cart
              </p>
              <p
                className="bg-green-800 px-[15px]  rounded-md text-white py-[6px] font-bold leading-normal flex "
                onClick={() => increaseQuantity(id)}
              >
                +
              </p>
            </div>
            <div
              className="bg-red-700 rounded-sm text-white px-2 py-[5px] mb-2"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </div>
          </div>
        ) : (
          <button
            className="bg-green-800 text-white w-full rounded-sm py-[7px] my-auto "
            onClick={() => increaseQuantity(id)}
          >
            + Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
