import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { ShoppingContext } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useContext(ShoppingContext);
  return (
    <header className=" shadow-md shadow-slate-300">
      <nav className="flex justify-between items-center   h-16 sticky max-container">
        <h1 className="text-rose-700 text-2xl font-bold"> My Store</h1>
        <div className="flex items-center gap-8 pr-4">
          <ul className="flex gap-4 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </ul>
          {cartQuantity > 0 && (
            <div className="border border-gray-400 rounded-full p-1.5 relative">
              <div onClick={openCart}>
                <BsCart4 className="text-blue-700 text-2xl  "></BsCart4>
              </div>
              <div className="absolute border inline-block border-gray-400 bg-gray-400 px-2 rounded-full top-5 left-6">
                {cartQuantity}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
