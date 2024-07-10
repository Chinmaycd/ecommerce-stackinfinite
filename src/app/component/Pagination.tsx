// import React from 'react';

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
//   // Function to generate an array of page numbers
//   const generatePages = () => {
//     const pages = [];
//     const maxVisiblePages = 5; // Maximum number of visible pages

//     // Calculate start and end of visible page numbers
//     let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let end = start + maxVisiblePages - 1;

//     if (end > totalPages) {
//       end = totalPages;
//       start = Math.max(1, end - maxVisiblePages + 1);
//     }

//     for (let i = start; i <= end; i++) {
//       pages.push(i);
//     }

//     return pages;
//   };

//   const pages = generatePages();

//   return (
//     <div>
//       <nav aria-label="Pagination" className="flex justify-center items-center text-gray-600 mt-8 lg:mt-0">
//         <button
//           className={`p-2 rounded ${currentPage === 1 ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-100'}`}
//           onClick={() => onPageChange(currentPage - 1)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {pages.map((page) => (
//           <a
//             key={page}
//             href="#"
//             className={`px-4 py-2 rounded ${currentPage === page ? 'bg-gray-200 text-gray-900 font-medium' : 'hover:bg-gray-100'}`}
//             onClick={() => onPageChange(page)}
//           >
//             {page}
//           </a>
//         ))}

//         <button
//           className={`p-2 rounded ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-100'}`}
//           onClick={() => onPageChange(currentPage + 1)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Pagination;
