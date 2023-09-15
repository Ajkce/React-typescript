import React from "react";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <div className="max-container"> 
      <h1>Store</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
        {storeItems.map((item) => {
          return <StoreItem {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Store;
