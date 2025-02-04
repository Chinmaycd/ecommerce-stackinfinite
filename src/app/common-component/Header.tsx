"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import SearchModal from "./SearchModal";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import axios from "axios";
import API_BASE_URL from "@/Apiconfig";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State for modal open/close
  const [cartdata, setCartdata] = useState([]);
  const [totalprice, setTotalprice] = useState();
  const [decr, setDecr] = useState();
  const [incr, setIncr] = useState();
  const cookies = new Cookies();
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    let userId = cookies.get("userid");
    // console.log(userID); // Check userID in console
    let url = `${API_BASE_URL}/carts/products/${userId}`;
    axios
      .get(url)
      .then((response) => {
        setCartdata(response.data.carts);
        setTotalprice(response.data.totalPrice);
        console.log(response.data);
        // console.log(response.data.totalPrice); // Log response data to check structure
      })
      .catch((error) => {
        console.log(error); // Log any errors for debugging
      });
  };
  // console.log(cartdata);
  console.log(totalprice);
  
  //delete from cart api
  const deletecartAPI = (productID: any) => {
    let url = `${API_BASE_URL}/carts/delete/${productID}`;
    let userid = cookies.get("userid");
    axios
      .delete(url, { data: { userId: userid } })
      .then((response) => {
        // Filter out the deleted item from cartdata
        const updatedCart = cartdata.filter(
          (item: any) => item.productId !== productID
        );
        setCartdata(updatedCart); // Update cartdata state without the deleted item
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(cartdata);
  
  //decrement api
  const handleDecrement = (productId: any) => {
    let url = `${API_BASE_URL}/carts/decrease/${productId}`;
    let userid = cookies.get("userid");
    axios
      .put(url, { userId: userid } )
      .then((response) => {
        setDecr(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
   //increment api
   const handleIncrement = (productId: any) => {
    let url = `${API_BASE_URL}/carts/increase/${productId}`;
    let userid = cookies.get("userid");
    axios
      .put(url, { userId: userid } )
      .then((response) => {
        setIncr(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function Logout() {
    router.push("/");
    cookies.remove("loggedin");
    cookies.remove("userid");
  }
  // Calculate total quantity of items in the cart
  const getTotalQuantity = () => {
    return cartdata.reduce((total, item: any) => total + item.quantity, 0);
  };
  return (
    <div className=" shadow-md font-sans">
      {cartOpen && (
        <div className="fixed inset-0  z-50 backdrop-brightness-50"></div>
      )}
      {/* Pass modal state and close function to SearchModal */}
      <SearchModal isOpen={modalOpen} onClose={closeModal} />
      <div className="w-[100%] flex justify-between items-center px-4 md:px-10 ">
        <div className="flex gap-3 items-center">
          <Image src="/logo.jpg" height={64} width={64} alt="logo" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search for Products"
            className="lg:w-[600px] sm:w-[400px] md:w-[500px] py-1 px-5 border border-gray-200 rounded sm:block hidden"
          />
          <FaSearch className="absolute top-0 right-0 mr-3 mt-2 text-blue-900 sm:block hidden " />
        </div>

        <div className="flex items-center justify-start sm:hidden  pr-14 font-bold">
          <span>
            <span className="text-orange-500">SHOP</span>
            <span className="text-blue-950">CART</span>
          </span>
        </div>

        <div className="flex items-center gap-3 pr-3">
          <span>
            <IoSearch
              size={24}
              className=" text-blue-900 block sm:hidden font-bold cursor-pointer"
              onClick={openModal}
            />
          </span>
          <span>
          <FaRegHeart 
           size={22}
           className=" text-red-600 block font-bold cursor-pointer"
           onClick={()=>router.push("/wishlist")}
          />

          </span>
          <span>
            <BiUser
              size={25}
              className="text-blue-900 cursor-pointer"
              onClick={Logout}
            />
          </span>
          <span>
            <FaCartShopping
              onClick={() => setCartOpen(true)}
              size={25}
              className="text-blue-900 cursor-pointer"
            />
            {cartdata.length > 0 && (
              <span className="absolute top-2 right-3 md:right-9 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {getTotalQuantity()}
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Cart sidebar */}
      <div
        className={`lg:text-xl md:text-lg fixed inset-y-0 right-0 w-full md:w-[50%] lg:w-[50%] bg-white px-8 py-12 z-[99] transform transition-transform ${
          cartOpen ? "translate-x-0 overflow-y-scroll" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between border-b border-gray-500">
          <h1 className="font-bold text-blue-900 font-sans text-xl">
            Your Cart
          </h1>
          <span onClick={() => setCartOpen(false)}>
            <ImCross className="text-blue-900" />
          </span>
        </div>
        {/* cart body */}
        {cartdata.map((item: any, i: any) => (
          <div className="py-10 border-b border-gray-500" key={i}>
            <div className="flex justify-between gap-2">
              <div className="h-[80px] w-[80px] border border-gray-500 p-1 ">
                <img
                  src={item.images[0]? item.images[0] : "no-img.jpg"}
                  alt="img"
                  height={200}
                  width={200}
                  className="h-full"
                />
              </div>
              <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                <h1 className=" text-blue-900 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                  {/* {item.name} */}
                </h1>
                {/* <p className="text-gray-500 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
               Graphic Logo Crew Black Tshirt Tee S M L XL
             </p> */}
              </div>
              <div>
                <span className="text-gray-500">
                  <MdDelete
                    size={25}
                    className="text-blue-900"
                    onClick={() => deletecartAPI(item.productId)}
                  />
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
                  <button
                    onClick={() => handleDecrement(item.productId)}
                    type="button"
                    className="bg-gray-100 w-12 h-8 font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-current inline"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="bg-transparent w-12 h-8 font-semibold text-gray-800 text-lg"
                  >
                    {item.quantity}
                  </button>
                  <button
                   onClick={() => handleIncrement(item.productId)}
                    type="button"
                    className="bg-gray-800 text-white w-12 h-8 font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-current inline"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-5 text-orange-500">₹ {item.price * item.quantity}</div>
            </div>
          </div>
        ))}
        <div className=" py-5 flex justify-between border-b border-gray-500">
          <h1 className=" text-blue-900 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {" "}
            Subtotal
          </h1>
          <h1 className=" text-orange-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
            {" "}
            ₹ {totalprice}
          </h1>
        </div>
        <div className="py-5">
          <button className="w-full text-center bg-blue-900 text-white py-3 font-bold">
            Check out now
          </button>
        </div>
      </div>
      {/* End Cart sidebar */}
    </div>
  );
};

export default Header;
