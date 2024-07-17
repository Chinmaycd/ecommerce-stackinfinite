// "use client";
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import SampleNextArrow from "./sliderArrow/SampleNextArrow";
// import SamplePrevArrow from "./sliderArrow/SamplePrevArrow";
// import axios from "axios";
// import API_BASE_URL from "@/Apiconfig";
// const Category = ({ onSelectCategory }:any) => {
//   const [data, setData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${API_BASE_URL}/categories`)
//       .then((response) => {
//         setData(response.data);
//         // console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   const handleCategoryClick = (_id:any) => {
//     onSelectCategory(_id);
//     console.log(_id);
//     setSelectedCategory(_id);
    
//   };
//   // console.log(data);
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       // {
//       //   breakpoint: 640,
//       //   settings: {
//       //     slidesToShow: 2,
//       //   },
//       // },
//     ],
//   };
//   const categoryItemClass = (categoryId:any) => {
//     if (selectedCategory === null) {
//       return "category-item opacity-100 flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000";
//     } else if (selectedCategory === categoryId) {
//       return "category-item opacity-100 flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000";
//     } else {
//       return "category-item opacity-70 flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000";
//     }
//   };
//   return (
//     <div className="mt-6 ">
//       <div className="bg-blue-100 mt-3 py-2 md:py-4 border border-gray-300 mx-auto pl-[30px] pr-[30px] sm:pl-[100px] sm:pr-[100px] text-xs md:text-base lg:text-lg ">
//         <Slider {...settings} className="">
//           {data.map((item: any, i: number) => (
//               <div
//               key={i}
//               className={categoryItemClass(item._id)}
//               onClick={() => handleCategoryClick(item._id)}
//             >
//               <div className="w-[60px] md:w-[80px] h-[70px] mx-auto">
              
//                 <img
//                   src={item.image}
//                   alt="ALL PRODUCTS"
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//               <div className="mt-2">{item.name}</div>
//             </div>
//           ))}
//                   </Slider>
//       </div>
//     </div>
//   );
// };
// export default Category;
// src/components/Category.tsx

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SampleNextArrow from './sliderArrow/SampleNextArrow';
import SamplePrevArrow from './sliderArrow/SamplePrevArrow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../redux/features/categoriesSlice';
import { RootState } from '../../../redux/store';

interface CategoryProps {
  onSelectCategory: (id: string) => void;
}

const Category: React.FC<CategoryProps> = ({ onSelectCategory }) => {
  const dispatch = useDispatch<any>();
  const categories = useSelector((state: RootState) => state.categories.categories);
  // const status = useSelector((state: RootState) => state.categories.status);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // if (status === 'idle') {
      dispatch(fetchCategories());
    // }
  }, [dispatch]);

  const handleCategoryClick = (id: string) => {
    onSelectCategory(id);
    setSelectedCategory(id);
  };

  const categoryItemClass = (categoryId: string) => {
    if (selectedCategory === null) {
      return 'category-item opacity-100 flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000';
    } else if (selectedCategory === categoryId) {
      return 'category-item opacity-100 flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000';
    } else {
      return 'category-item opacity-70 flex flex-col items-center text-center text-blue-950 hover:text-orange-600 cursor-pointer duration-1000';
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
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
    ],
  };

  return (
    <div className="mt-6">
      <div className="bg-blue-100 mt-3 py-2 md:py-4 border border-gray-300 mx-auto pl-[30px] pr-[30px] sm:pl-[100px] sm:pr-[100px] text-xs md:text-base lg:text-lg">
        <Slider {...settings} className="">
          {categories.map((item) => (
            <div
              key={item._id}
              className={categoryItemClass(item._id)}
              onClick={() => handleCategoryClick(item._id)}
            >
              <div className="w-[60px] md:w-[80px] h-[70px] mx-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-2">{item.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Category;
