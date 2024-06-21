import React from "react";

const Category = () => {
  return (
    <div className="mt-3">
      <div>
      <div className="bg-blue-100 mt-3 py-5 border border-gray-300 hidden md:block">
        <ul className="flex gap-10 justify-center font-mono  font-bold">
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            ALL PRODUCTS
          </li>
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            APPAREL
          </li>
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            ELECTRONICS
          </li>
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            TOYS
          </li>
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            JEWELLERY
          </li>
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            ACCESSORIES
          </li>
        </ul>
      </div>
      {/* for mobile */}
      <div className="bg-blue-100 mt-3 py-5 border border-gray-300 md:hidden">
        <ul className="flex gap-5 justify-center  font-mono  font-bold pb-5 text-sm">
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            ALL PRODUCTS
          </li>
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            APPAREL
          </li>
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            ELECTRONICS
          </li>
             <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            TOYS
          </li>
          </ul>
          <ul className="flex gap-10 justify-center font-mono  font-bold text-sm">
       
          <li className="text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            JEWELLERY
          </li>
          <li className=" text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            ACCESSORIES
          </li>
        </ul>
      </div>
     
    </div>
    </div>
  );
};

export default Category;
