import React from "react";
import { z } from "zod";

const cartSchema = z.array(
  z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
  })
);

const Cart = () => {
  const cart: unknown = JSON.parse(localStorage.getItem("cart") || "{}");

  const validateCart = cartSchema.safeParse(cart);

  if (!validateCart.success) {
    localStorage.removeItem("cart");
    return;
  }
  console.log(validateCart.data.map((item) => {
    
  }))
  return <div>Cart</div>;
};

export default Cart;
