import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingCartContext";
import StoreItems from "../data/items.json";
import { AiOutlineClose } from "react-icons/ai";

type cartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: cartItemProps) => {
  const { removeFromCart } = useContext(ShoppingContext);
  const item = StoreItems.find((items) => items.id === id);
  if (item) {
    return (
      <div className="flex flex-row  overflow-hidden justify-between ">
        <div className="flex gap-3 justify-center items-center">
          <img
            src={item.imgUrl}
            alt=""
            className="h-[75px] w-[125px] object-cover"
          />
          <div className="flex flex-col ">
            <p>
              {item.name}
              {quantity > 1 && (
                <span className="ml-1 text-[12px]">× {quantity}</span>
              )}
            </p>
            <p>{item.price}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p>{item.price * quantity}</p>
          <div
            className="  p-1 rounded-md font-bold border text-red-500 border-red-300  "
            onClick={() => removeFromCart(item.id)}
          >
            <AiOutlineClose> </AiOutlineClose>
          </div>
        </div>
      </div>
    );
  }
};

export default CartItem;
