// import axios from "axios";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const Fashion = ({ categoryId }:any) => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(19);
//   useEffect(() => {
//     fetchData(currentPage);
//   }, [currentPage,categoryId]);
//   const fetchData = (page:any) => {
//     let url = "http://192.168.1.10:8001/api/products";
    
//     // If categoryId is selected, append it to the URL
//     if (categoryId) {
//       url += `?categoryId=${categoryId}`;
      
//     }
//     console.log(url);
//     axios
//       .get(url)
//       .then((response) => {
//         setData(response.data.products);
//         setTotalPages(response.data.pagination.totalPages);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   // console.log(data);const [imageError, setImageError] = useState(false); // State to track image load error
//   const handlePageChange = (page:any) => {
//     setCurrentPage(page);
//   };

//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     e.currentTarget.src = '/background.avif'; // Set default image path on error
//   };
//   return (
//     <div className="mt-14 mb-14">
//       <div className="container sm:max-w-[90%] md:max-w-[80%] xl:max-w-[90%] 2xl:max-w-[80%] mx-auto grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 text-base md:text-lg">
//         {data.map((item:any, i:number) => (
//           <div className="flex flex-col font-sans overflow-hidden  md:w-[260px] h-auto w-[90%] mx-auto shadow-[0_2px_10px_-5px]" key={i}>
//             <div className="w-full md:h-[250px] h-auto ">
           
//               <img  src={item.images[0]}
//                 alt="prod1"
//                 height={200}
//                 width={250}
//                 onError={handleImageError}
//                 className="p-2 m-auto w-full h-full bg-contain"/>
//             </div>
//             <h1 className="pt-3 whitespace-nowrap overflow-hidden text-ellipsis px-3 font-bold">
//             {item.name}
//             </h1>
//             <p className="text-blue-900 whitespace-nowrap overflow-hidden text-ellipsis px-3">
//               {item.launchDate}
//             </p>
//             <p className="py-2 font-bold px-3">{item.price}</p>
//             <button className="bg-blue-900 font-bold text-white w-[96%] md:w-[92%] mx-auto p-2 mb-3">
//               Add to Cart
//             </button>
//           </div>
//         ))}
        
       
//       </div>
//       {/* <div className="flex justify-center mt-5 space-x-3">
//         {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`px-4 py-2 rounded-md ${
//               currentPage === page ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//       </div> */}
   
//     </div>
//   );
// };

// export default Fashion;
