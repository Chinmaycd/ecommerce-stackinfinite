'use client'
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import API_BASE_URL from "@/Apiconfig";
import Cookies from "universal-cookie";
import { Triangle } from "react-loader-spinner";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Pagination from "../home/Pagination";

interface Product {
  _id: string;
  name: string;
  images: string[];
  price: number;
  outOfStock: boolean;
}

const Fashion = ({ categoryId }: any) => {
  const [isLoading, setLoading] = useState(false);
  const cookies = new Cookies();
  const [data, setData] = useState<Product[]>([]);
  const[cartdata,setCatrdata]=useState([])
  const [wishdata, setWishdata] = useState<string[]>([]); // Store IDs of wished products
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchData(currentPage);
    loadWishlistFromLocalStorage(); // Load wishlist from localStorage on component mount
  }, [categoryId]);
  // Load wishlist from localStorage
  const loadWishlistFromLocalStorage = () => {
    const wishlistFromStorage = localStorage.getItem("wishlist");
    if (wishlistFromStorage) {
      setWishdata(JSON.parse(wishlistFromStorage));
    }
  };
  // Fetch data based on categoryId
  const fetchData = (page: number) => {
    setLoading(true);
    let url = `${API_BASE_URL}/products?page=${page}&limit=12`;
  
    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }
    axios
      .get(url)
      .then((response) => {
        setData(response.data.products);
        setTotalPages(response.data.pagination.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  console.log(data,"data");
  
  // Add product to cart
  const cartAPI = (productId: string) => {
    const url = `${API_BASE_URL}/carts/add/${productId}`;
    const userId = cookies.get("userid");

    setLoading(true);
    axios
      .post(url, { userId })
      .then((response) => {
        // Handle response as needed
        setCatrdata(response.data)
        console.log(response.data);
        
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // Add product to wishlist
  const wishlistAPI = (productId: string) => {
    const url = `${API_BASE_URL}/wishlist/add`;
    const userId = cookies.get("userid");

    setLoading(true);
    axios
      .post(url, { userId, productId })
      .then((response) => {
        // Update wishdata state correctly
        setWishdata((prevWishdata) => [...prevWishdata, productId]);
        setLoading(false);

        // Update localStorage to reflect the changes
        localStorage.setItem(
          "wishlist",
          JSON.stringify([...wishdata, productId])
        );
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // Check if product is wished
  const isWished = (productId: string) => {
    return wishdata.includes(productId);
  };

  // Handle image loading error
  const handleImageError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/no-img.jpg"; // Set default image path on error
  };
  // Handle pagination change
  const handlePaginationChange = (page: number) => {
    setCurrentPage(page); // Update currentPage state
    fetchData(page); // Fetch data for the new page
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
        {data.map((item: Product, index: number) => (
          <div
            className="flex flex-col font-sans overflow-hidden md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]"
            key={index}
          >
            <div className="w-full md:h-[250px] h-auto relative">
              <Link href={`/product/${item._id}`}>
                <img
                  src={item.images[0] || "/no-img.jpg"}
                  alt={item.name}
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
                {isWished(item._id) ? (
                  <FaHeart
                    size={20}
                    className="text-red-500 hover:text-red-600 block font-bold cursor-pointer"
                  />
                ) : (
                  <FaRegHeart
                    size={20}
                    className="text-gray-400 hover:text-gray-600 block font-bold cursor-pointer"
                  />
                )}
              </button>
            </div>
            <Link href={`/product/${item._id}`}>
              <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
                {item.name}
              </h1>
            </Link>
            <p className="py-2 font-bold px-3 text-orange-600">
              ₹ {item.price}
            </p>

            {item.outOfStock ? (
              <button
                className="bg-gray-500 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3"
                onClick={() => cartAPI(item._id)}
                disabled
              >
                Out of Stock
              </button>
            ) : (
              <button
                className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3"
                onClick={() => cartAPI(item._id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}<br></br>
        {/* pagination  */}
       
      </div>
      <div className="w-[90%] bg-white flex justify-end ">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            // totalProducts={totalProducts}
            onPageChange={handlePaginationChange}
          />
        </div>
    </div>
  );
};

export default Fashion;
