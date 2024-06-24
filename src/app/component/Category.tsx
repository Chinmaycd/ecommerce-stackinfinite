"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      // {
      //   breakpoint: 640,
      //   settings: {
      //     slidesToShow: 2,
      //   },
      // },
    ],
  };

  return (
    <div className="mt-3">
      <div className="bg-blue-100 mt-3 py-2 md:py-4 border border-gray-300 mx-auto pl-[30px] pr-[30px] sm:pl-[100px] sm:pr-[100px] text-xs md:text-base lg:text-lg">
        <Slider {...settings} className="">
          <div className="flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            <div className="w-[60px] md:w-[80px] mx-auto">
              <Image
                src="/category-images/cat1.png"
                height={80}
                width={80}
                alt="ALL PRODUCTS"
                className="w-[60px] md:w-[80px]"
              />
            </div>
            <div className="mt-2">ALL PRODUCTS</div>
          </div>
          <div className="flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            <div className="w-[60px] md:w-[80px] mx-auto">
              <Image
                src="/category-images/cat2.png"
                height={80}
                width={80}
                alt="APPAREL"
              />
            </div>
            <div className="mt-2">APPAREL</div>
          </div>
          <div className="flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            <div className="w-[60px] md:w-[80px] mx-auto">
              <Image
                src="/category-images/cat3.png"
                height={80}
                width={80}
                alt="ELECTRONICS"
              />
            </div>
            <div className="mt-2">ELECTRONICS</div>
          </div>
          <div className="flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            <div className="w-[60px] md:w-[80px] mx-auto">
              <Image
                src="/category-images/cat4.png"
                height={80}
                width={80}
                alt="TOYS"
              />
            </div>
            <div className="mt-2">TOYS</div>
          </div>
          <div className="flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            <div className="w-[60px] md:w-[80px] mx-auto">
              <Image
                src="/category-images/cat5.png"
                height={80}
                width={80}
                alt="JEWELLERY"
              />
            </div>
            <div className="mt-2">JEWELLERY</div>
          </div>
          <div className="flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000">
            <div className="w-[60px] md:w-[80px] mx-auto">
              <Image
                src="/category-images/cat6.png"
                height={80}
                width={80}
                alt="ACCESSORIES"
              />
            </div>
            <div className="mt-2">ACCESSORIES</div>
          </div>
        </Slider>
      </div>
         </div>
  );
};
export default Category;
