"use client";

import React, { useEffect } from "react";
import { z } from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});

const Product = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/product");
      const product = await response.json();
      const validProduct = productSchema.safeParse(product);
      console.log(validProduct);
    };
    fetchData();
  });

  return <div>Product</div>;
};

export default Product;
