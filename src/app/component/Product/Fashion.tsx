import Image from "next/image";
import React from "react";

const Fashion = () => {

  return (
    <div>
      <div className="container sm:max-w-[90%] md:max-w-[80%] xl:max-w-[90%] 2xl:max-w-[80%] mx-auto grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 text-base md:text-lg">
        <div className="flex flex-col font-sans overflow-hidden  md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full  h-auto">
            <Image
              src="/product-images/prod1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Nike Air Jordan Men Cotton T shirt
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Graphic Logo Crew Black Tshirt Tee S M L XL
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px] ">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/prod2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Nike Mens Air Jordan T-Shirt
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            100% Cotton Jordan Air Wordmark T-Shirt
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/prod3.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Nike Dri-Fit Short Sleeve Shirt Mens
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Orange New with Tags
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/prod4.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Nike Mens Sportswear Active Short Sleeve T-Shirt
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Black/White, AR5004-010
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/prod5.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Nike DRI-FIT Miler Run Shirt
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Size M-XL Men Blue CU0326-480 *NWT
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/prod6.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            UConn Huskies Nike Pro Dri-Fit
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Sleeveless Shirt Mens Red New without Tags
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/prod7.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Nike Brasil Soccer Shirt
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Mens Slim Fit 547212 Brazilian Football Team T Shirt
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/prod8.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            NWT Nike Medium Men Sportswear Tee Shirt{" "}
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Loose Fit Full Sleeve with Drop Shoulder Round Neck Womens
            Sweatshirt
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3 ">
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto ">
            <Image
              src="/product-images/e1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Sony 55” Class X85K 4K Ultra HD LED
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Smart Google TV KD55X85K- 2022 Model
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/e2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            NutriChef Multi-Function Convection Oven
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Counter Top Rotisserie Toaster Oven
          </p>
          <p className="py-2 font-bold px-3">From Rs.5000</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/e3.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Apple iPhone 11 Pro{" "}
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            64gb
          </p>
          <p className="py-2 font-bold px-3">From Rs.50,000</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/e4.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Apple iPhone 13 Pro{" "}
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            128GB
          </p>
          <p className="py-2 font-bold px-3">From Rs.99,000</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/toy1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Educational Learning Toys for Kids
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Toddlers Age 3 4 5 6 7 8 Years Old Boys Girls
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/toy2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Dinosaur Toys
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Kids STEM Educational Toys
          </p>
          <p className="py-2 font-bold px-3">From Rs.2000</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/j1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Black stainless steel Ball Bead Chain Jewellery
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Black
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden text-base md:text-lg md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full md:h-[250px] h-auto">
            <Image
              src="/product-images/j2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
            Dinosaur Toys
          </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Kids STEM Educational Toys
          </p>
          <p className="py-2 font-bold px-3">From Rs.2000</p>
          <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
