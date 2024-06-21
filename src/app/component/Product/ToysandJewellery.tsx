import Image from 'next/image'
import React from 'react'

const ToysandJewellery = () => {
  return (
    <div>
      <div className="container-sm mx-auto grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 p-5 ">
              <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/toy1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Educational Learning Toys for Kids</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Toddlers Age 3 4 5 6 7 8 Years Old Boys Girls
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto p-2 font-bold">Add to Cart</button>
        </div>
        
        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/toy2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Dinosaur Toys</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Kids STEM Educational Toys
          </p>
          <p className="py-2 font-bold px-3">From Rs.2000</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto p-2 font-bold">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/j1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Black stainless steel Ball Bead Chain Jewellery</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Black
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto p-2 font-bold">Add to Cart</button>
        </div>
        
        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/j2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Dinosaur Toys</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Kids STEM Educational Toys
          </p>
          <p className="py-2 font-bold px-3">From Rs.2000</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto p-2 font-bold">Add to Cart</button>
        </div>
      
        </div>

    </div>
  )
}

export default ToysandJewellery
