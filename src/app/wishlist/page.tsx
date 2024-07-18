"use client";
import React, { useEffect } from "react";
import { Triangle } from "react-loader-spinner";
import Cookies from "universal-cookie";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addToCart,
  fetchWishlist,
  removeWishlistItem,
} from "@/redux/features/wishlistSlice";
export default function Wishlist() {
  let cookies = new Cookies();
  const dispatch = useDispatch<any>();
  const wish = useSelector((state: RootState) => state.wish.wish);
  const { status, removing} = useSelector(
    (state: RootState) => state.wish
  );
  //get wishlist products
  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);
  // remove wishlist
  const removewishlistAPI = (productId: string) => {
    dispatch(removeWishlistItem(productId));
  };
  //add to cart
const cartAPI = (productId:string) => {
  dispatch(addToCart(productId))
}
  // Handle image loading error
  const handleImageError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/no-img.jpg"; // Set default image path on error
  };
  return (
    <div>
      {status === "loading" || removing  ? (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <Triangle
            visible={true}
            height={100}
            width={100}
            color="white"
            ariaLabel="vortex-loading"
          />
        </div>
      ) : null}
      <h1 className="px-5 py-10 text-blue-900 font-bold font-sans text-3xl text-center">
        Wishlist
      </h1>
      <div className="flex flex-wrap justify-start">
        {wish.products.map((item: any, i: number) => (
          <div key={i} className="max-w-screen-lg w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-[0_2px_10px_-5px] rounded-lg overflow-hidden p-3">
              <div className="md:h-[400px]">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  onError={handleImageError}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{item.name}</p>
                <p className="text-gray-700 text-sm">₹ {item.price}</p>
              </div>
              <div className="flex gap-3 px-3">
                {item.outOfStock ? (
                  <button
                    onClick={() => cartAPI(item._id)}
                    className="block w-full text-center py-2 px-4 bg-gray-500 text-white font-semibold uppercase  rounded"
                    disabled
                  >
                    Out of stock
                  </button>
                ) : (
                  <button
                    onClick={() => cartAPI(item._id)}
                    className="block w-full text-center py-2 px-4 bg-blue-900 text-white font-semibold uppercase hover:bg-blue-950 rounded"
                  >
                    Add to cart
                  </button>
                )}
                <span className="bg-gray-200 hover:bg-gray-300 px-2 py-2 rounded">
                  <RiDeleteBin6Line
                    onClick={() => removewishlistAPI(item._id)}
                    size={25}
                    className=" text-gray-600 block font-bold cursor-pointer "
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
