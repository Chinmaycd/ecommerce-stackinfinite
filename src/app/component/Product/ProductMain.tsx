import React from "react";
import { data } from "./ProductDetails";
import Image from "next/image";
import Fashion from "./Fashion";
import Electronics from "./Electronics";
import ToysandJewellery from "./ToysandJewellery";
const ProductMain = () => {
  return (
    <div className="mt-10 mb-10 ">
        <Fashion/>
        <Electronics/>
        <ToysandJewellery/>
      </div>
    
  );
};

export default ProductMain;
