import React, { useState } from "react";
import Image from "next/image";
import Category from "./Category";
import Fashion from "../product/page";

const ProductMain = () => {
  const [categoryId, setCategoryId] = useState(null);

  const handleSelectCategory = (selectedCategoryId:any) => {
    setCategoryId(selectedCategoryId);
  };

  return (
    <div>
      <Category onSelectCategory={handleSelectCategory} />
      <Fashion categoryId={categoryId} />
    </div>  
  );
};



export default ProductMain;
