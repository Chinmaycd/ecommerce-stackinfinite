"use client";
import API_BASE_URL from "@/Apiconfig";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import Cookies from "universal-cookie";
import Header from "../component/Header";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Wishlist() {
  const [isLoading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const[apidata,setApidata]=useState([])
  let cookies = new Cookies();
  //get wishlist api
  useEffect(() => {
    getwishlistAPI();
    
  }, []);
  //get wishlist api
  const getwishlistAPI = () => {
    let userId = cookies.get("userid");
    let url = `${API_BASE_URL}/wishlist/${userId}`;
    // console.log(url);
    setLoading(true);

    axios
      .get(url) //also add quantity
      .then((response: any) => {
        setWishlist(response.data.wishList.products);
        setLoading(false);
        // console.log(response.data.wishList.products);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  // console.log(wishlist);
 //remove wishlist api
 const removewishlistAPI = (productId:string) => {
  let url = `${API_BASE_URL}/wishlist/remove`;
  // console.log(url);
  setLoading(true);
  let userId=cookies.get('userid');
  axios
    .delete(url,{data:{userId:userId,productId:productId}}) //also add quantity
    .then((response: any) => {
      // Filter out the deleted item from cartdata
      const updatedCart = wishlist.filter(
        (item: any) => item._id !== productId
    )
    setLoading(false)
    setWishlist(updatedCart)
  })
    .catch((error: any) => {
      console.log(error);
    });
};
// console.log(wishlist);

  //add to cart api
  const cartAPI = (productID: any) => {
    let url = `${API_BASE_URL}/carts/add/${productID}`;
    let userid=cookies.get("userid")
    // console.log(url);
    setLoading(true)
    axios
      .post(url,{userId:userid}) //also add quantity
      .then((response:any) => {
        setApidata(response.data);
        setLoading(false);
      })
      .catch((error:any) => {
        console.log(error);
      });   
  };
  return (
    <div>
      <Header/>
      {isLoading && (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <Triangle
        visible={true}
        height={100}
        width={100}
        color="white"
        ariaLabel="vortex-loading"
      />
    </div>
      )}
      <h1 className="px-5 py-10 text-blue-900 font-bold font-sans text-3xl text-center">
        Wishlist
      </h1>
      <div className="flex flex-wrap justify-start">
        {wishlist.map((item:any,i) => (
          <div
            key={i}
            className="max-w-screen-lg w-full md:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white shadow-[0_2px_10px_-5px] rounded-lg overflow-hidden p-3">
             <div className="md:h-[400px]">
             <img
                src={item.images}
                alt={item.name}
                className="w-full h-full object-contain"
              />
             </div>
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{item.name}</p>
                <p className="text-gray-700 text-sm">₹ {item.price}</p>
              </div>
             <div className="flex gap-3 px-3">
             <button 
              onClick={()=>cartAPI(item._id)}
              className="block w-full text-center py-2 px-4 bg-blue-900 text-white font-semibold uppercase hover:bg-blue-950 rounded">
                Add to cart
              </button>
              {/* <button className="block w-full text-center py-2 px-4 bg-red-500 text-white font-semibold uppercase hover:bg-red-600" >
                Remove
              </button> */}
             <span className="bg-gray-200 hover:bg-gray-300 px-2 py-2 rounded">
             <RiDeleteBin6Line onClick={()=>removewishlistAPI(item._id)}
               size={25}
               className=" text-gray-600 block font-bold cursor-pointer "/>
             </span>

             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
