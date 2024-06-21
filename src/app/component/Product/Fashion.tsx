import Image from 'next/image'
import React from 'react'

const Fashion = () => {
  return (
    <div>
       <div className="container-sm mx-auto grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 lg:px-5 px-10 ">
              <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px]   mx-auto shadow-[0_2px_10px_-5px] ">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Nike Air Jordan Men Cotton T shirt</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
            Graphic Logo Crew Black Tshirt Tee S M L XL
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2">Add to Cart</button>
        </div>
        
        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px] ">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Nike Men's Air Jordan T-Shirt</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          100% Cotton Jordan Air Wordmark T-Shirt
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod3.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Nike Dri-Fit Short Sleeve Shirt Men's</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Orange New with Tags
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod4.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Nike Men's Sportswear Active Short Sleeve T-Shirt</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Black/White, AR5004-010
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod5.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Nike DRI-FIT Miler Run Shirt</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Size M-XL Men Blue CU0326-480 *NWT
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod6.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">UConn Huskies Nike Pro Dri-Fit</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Sleeveless Shirt Men's Red New without Tags
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod7.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Nike Brasil Soccer Shirt</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Mens Slim Fit 547212 Brazilian Football Team T Shirt
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/prod8.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">NWT Nike Medium Men Sportswear Tee Shirt </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Loose Fit Full Sleeve with Drop Shoulder Round Neck Women's Sweatshirt
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 font-bold text-white w-[92%] mx-auto p-2 ">Add to Cart</button>
        </div>
        </div>
    </div>
    
  )
}

export default Fashion
