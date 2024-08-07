// 
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";
import { Triangle } from "react-loader-spinner";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Pagination from "../home/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchProducts, setCurrentPage } from "@/redux/features/productSlice";
import { removeWishlistItem } from "@/redux/features/wishlistSlice";
import { addToWishlist } from "@/redux/features/addWishlistSlice";
import { addToCart } from "@/redux/features/wishlistSlice";

interface Product {
  _id: string;
  name: string;
  images: string[];
  price: number;
  outOfStock: boolean;
}

const Fashion = ({ categoryId }: any) => {
  const cookies = new Cookies();
  const [wishList, setWishList] = useState<string[]>([]);
  const dispatch = useDispatch<any>()

  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const totalPages = useSelector((state: RootState) => state.products.totalPages);
  // const currentPage = useSelector((state: RootState) => state.products.currentPage);
const [currentPage,setCurrentPage]=useState(1)
  const { addingToCart } = useSelector((state: RootState) => state.wish);

  useEffect(() => {
    fetchData(currentPage);// Reset currentPage to 1 when selectedCategoryId changes
    loadWishlistFromLocalStorage();
  }, [dispatch, currentPage, categoryId]);

  const fetchData = (page: number) => {
    dispatch(fetchProducts({ page, categoryId }));
  };


  // useEffect(() => {
  //   setCurrentPage(1); // Reset currentPage to 1 when selectedCategoryId changes
  //   if (categoryId) {
  //     dispatch(fetchProducts({ page: 1, categoryId: categoryId }));
  //   }
  //   loadWishlistFromLocalStorage(); // Load wishlist from local storage on component mount
  // }, [categoryId]);

  // useEffect(() => {
  //   dispatch(
  //     fetchProducts({ page: currentPage, categoryId: categoryId })
  //   );
  //   loadWishlistFromLocalStorage(); // Ensure wishlist is loaded on page change
  // }, [currentPage, categoryId]);

  //for wishlist for seperate userid
const userId = cookies.get("userid");
const localStorageKey = userId ? `wishlist_${userId}` : "wishlist";
// Load wishlist from local storage
const loadWishlistFromLocalStorage = () => {
  const storedWishlist = localStorage.getItem(`wishlist_${userId}` );
  if (storedWishlist) {
    setWishList(JSON.parse(storedWishlist));
  }
};

// Update local storage with wishlist
const updateLocalStorageWishlist = (updatedWishlist: string[]) => {
  localStorage.setItem(`wishlist_${userId}` , JSON.stringify(updatedWishlist));
};

  const cartAPI = (productId: string) => {
    dispatch(addToCart(productId));
  };

  const handleWishlistToggle = (productId: string) => {
    if (wishList.includes(productId)) {
      removeFromWishlist(productId);
    } else {
      addToLocalWishlist(productId);
    }
  };

  const addToLocalWishlist = (productId: string) => {
    const updatedWishlist = [...wishList, productId];
    setWishList(updatedWishlist);
    updateLocalStorageWishlist(updatedWishlist);
    dispatch(addToWishlist(productId));
  };

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishList.filter((id) => id !== productId);
    setWishList(updatedWishlist);
    updateLocalStorageWishlist(updatedWishlist);
    dispatch(removeWishlistItem(productId));
  };

  const handleImageError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/no-img.jpg"; // Set default image path on error
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-14 mb-14">
      {loading === "loading" || addingToCart ? (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <Triangle visible={true} height={100} width={100} color="white" ariaLabel="vortex-loading" />
        </div>
      ) : null}
      <div className="container sm:max-w-[90%] md:max-w-[80%] xl:max-w-[90%] 2xl:max-w-[80%] mx-auto grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 text-base md:text-lg">
        {products.map((item: Product, index: number) => (
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
                onClick={() => handleWishlistToggle(item._id)}
              >
                {wishList.includes(item._id) ? (
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
            <p className="py-2 font-bold px-3 text-orange-600">₹ {item.price}</p>

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
        ))}
      </div>
      <div className="w-[90%] bg-white flex justify-end mt-10">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePaginationChange}
        />
      </div>
    </div>
  );
};

export default Fashion;
