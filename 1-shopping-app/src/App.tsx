import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "store",
        element: <Store></Store>,
      },
    ],
  },
]);

const App = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router}></RouterProvider>;
    </ShoppingCartProvider>
  );
};

export default App;
