import Image from 'next/image'
import React from 'react'

const Electronics = () => {
  return (
    <div className='pt-5'>
      <div className="container-sm mx-auto grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 p-5 ">
              <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px]  px-3 mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px] ">
            <Image
              src="/product-images/e1.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Sony 55” Class X85K 4K Ultra HD LED</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Smart Google TV KD55X85K- 2022 Model
          </p>
          <p className="py-2 font-bold px-3">From Rs.500</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto font-bold py-2">Add to Cart</button>
        </div>
        
        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/e2.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">NutriChef Multi-Function Convection Oven</h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          Counter Top Rotisserie Toaster Oven
          </p>
          <p className="py-2 font-bold px-3">From Rs.5000</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto font-bold py-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/e3.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Apple iPhone 11 Pro </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          64gb
          </p>
          <p className="py-2 font-bold px-3">From Rs.50,000</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto font-bold py-2">Add to Cart</button>
        </div>

        <div className="flex flex-col font-sans overflow-hidden h-[400px] w-[260px] mx-auto shadow-[0_2px_10px_-5px]">
          <div className="w-full h-[250px]">
            <Image
              src="/product-images/e4.webp"
              alt="prod1"
              height={200}
              width={250}
              className="p-2 m-auto w-full h-full"
            />
          </div>
          <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">Apple iPhone 13 Pro </h1>
          <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
          128GB
          </p>
          <p className="py-2 font-bold px-3">From Rs.99,000</p>
          <button className="bg-blue-900 text-white w-[92%] mx-auto font-bold py-2">Add to Cart</button>
        </div>

        </div>

    </div>
  )
}

export default Electronics
