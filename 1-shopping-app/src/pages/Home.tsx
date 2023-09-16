import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";
import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingCartContext";

const Home = () => {
  const { isOpen } = useContext(ShoppingContext);
  return (
    <>
      {isOpen && <ShoppingCart></ShoppingCart>}
      {isOpen && (
        <div className="w-[100vw] h-[100vh] absolute bg-black bg-opacity-50 z-9"></div>
      )}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
