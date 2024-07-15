'use client'
import React, { useState } from "react";
import Category from "./category/Category";
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
