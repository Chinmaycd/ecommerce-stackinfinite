'use client'
import React, { useState } from "react";
import Category from "./category/Category";
import Fashion from "../product/page";

const ProductMain = () => {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [key,setKey]=useState<number>(0);

  const handleSelectCategory = (selectedCategoryId:any) => {
    setCategoryId(selectedCategoryId);
    setKey((prevKey)=>prevKey+1)
  };

  return (
    <div>
      <Category onSelectCategory={handleSelectCategory} />
      <Fashion key={key} categoryId={categoryId} />
    </div>  
  );
};



export default ProductMain;
