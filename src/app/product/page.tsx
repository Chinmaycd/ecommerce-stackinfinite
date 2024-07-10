"use client";
import axios from "axios";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import API_BASE_URL from "@/Apiconfig";
import Cookies from "universal-cookie";
import { Triangle } from "react-loader-spinner";
import { FaRegHeart } from "react-icons/fa";

const Fashion = ({ categoryId }: any) => {
  const [isLoading, setLoading] = useState(false);
  let cookies = new Cookies();
  const [data, setData] = useState([]);
  const [apidata, setApidata] = useState([]);
  const [cartItems, setCartItems] = useState<string[]>([]); // State to track added products
  const [cartdata, setCartdata] = useState([]);
  const [wishdata, setWishdata] = useState([]);
  useEffect(() => {
    fetchData();
  }, [categoryId]);

  //for category based data show
  const fetchData = () => {
    setLoading(true);
    let url = `${API_BASE_URL}/products`;
    // If categoryId is selected, append it to the URL
    if (categoryId) {
      url += `?categoryId=${categoryId}`;
    }
    // console.log(url);
    axios
      .get(url)
      .then((response) => {
        setData(response.data.products);
        // console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(data);const [imageError, setImageError] = useState(false); // State to track image load error

  //add to cart api
  const cartAPI = (productID: any) => {
    let url = `${API_BASE_URL}/carts/add/${productID}`;
    let userid = cookies.get("userid");
    // console.log(url);
    setLoading(true);
    axios
      .post(url, { userId: userid }) //also add quantity
      .then((response: any) => {
        setApidata(response.data);
        setLoading(false);
        // console.log(apidata);
        // window.location.reload(); // Refresh the page
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  //add to wishlist api
  const wishlistAPI = (productId: any) => {
    let url = `${API_BASE_URL}/wishlist/add`;
    let userId = cookies.get("userid");
    // console.log(url);
    setLoading(true);
    axios
      .post(url, { userId: userId, productId: productId }) //also add quantity
      .then((response: any) => {
        setWishdata(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  const handleImageError = (e: any) => {
    e.currentTarget.src = "no-img.jpg"; // Set default image path on error
  };

  return (
    <div className="mt-14 mb-14">
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
      <div className="container sm:max-w-[90%] md:max-w-[80%] xl:max-w-[90%] 2xl:max-w-[80%] mx-auto grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 text-base md:text-lg">
        {data.map((item: any, i: number) => (
          // <Link  href={`/product?productname=${item.name}`}>
          <div
            className="flex flex-col font-sans overflow-hidden  md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]"
            key={i}
          >
            <div className="w-full md:h-[250px] h-auto relative">
              <Link href={`/product/${item._id}`}>
                <img
                  src={item.images[0] ? item.images[0] : "no-img.jpg"}
                  alt="prod1"
                  height={200}
                  width={250}
                  onError={handleImageError}
                  className="p-2 m-auto w-full h-full bg-contain"
                />
              </Link>
              <button
                type="button"
                className="absolute top-4 right-4 z-20"
                onClick={() => wishlistAPI(item._id)}
              >
                <FaRegHeart
                  size={20}
                  className=" text-gray-400 hover:text-gray-600 block font-bold cursor-pointer"
                />
              </button>
            </div>
            <Link href={`/product/${item._id}`}>
              <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
                {item.name}
              </h1>
            </Link>
            {/* <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
              {item.launchDate}
            </p> */}
            <p className="py-2 font-bold px-3 text-orange-600">
              ₹ {item.price}
            </p>

            <button
              className="bg-blue-500 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3"
              onClick={() => cartAPI(item._id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center mt-5 space-x-3">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-md ${
              currentPage === page ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {page}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Fashion;
