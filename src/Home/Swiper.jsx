import React, { useState } from "react";
import data from "../json/saller.json";
import wishlist from "../../public/svg/wishlist.svg"
import cart from "../../public/svg/cartblue.svg"
const Swiperdata = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(data.saller.map((item) => item.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? data.saller
      : data.saller.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-6 max-w-[627px] w-full justify-center sm:justify-between mx-auto">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]  transition duration-300 border-b-2 ${selectedCategory === category
              ? "text-primary-blue border-primary-blue"
              : "text-primary border-transparent hover:border-primary-blue hover:text-primary-blue"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[34.5px] place-items-center">
        {filteredProducts.map((item, index) => (
          <div key={index}>
            <div className="border-2 relative  border-lightwhite rounded w-[100%] max-w-[299.5px] flex flex-col justify-center items-center">
              {/* Deal Badge */}

              {item.deal && (
                <span className="font-proxima z-50 absolute top-0 left-0 bg-primary-red rounded text-white font-normal text-[18px] w-[64px] h-[33px] flex justify-center items-center">
                  {item.deal}
                </span>
              )}

              {/* Product Image */}
              <div className="group  ">
              <img
                src={item.image}
                className="w-[100%]  hover:blur-xs  h-[272.5px] object-cover"
                alt="product"
              />
              <div className=" ">
                <div className="absolute  flex group-hover:w-[112px]  z-20 group-hover:opacity-100 transition-all duration-200 opacity-0  w-0 justify-between items-center top-[120px] left-[90px]">
                  <div className=" border-2 rounded-full flex justify-center items-center bg-white border-lightskyblue w-[51px] h-[51px]">
                    <img className="w-[17.8px ] h-[15.6px] " src={wishlist} alt="wishlist" />
                  </div>
                  <div className="border-2 rounded-full flex justify-center items-center bg-white border-lightskyblue w-[51px] h-[51px]">
                    <img className="w-[17.77px ] h-[17.83px]  " src={cart} alt="cart" />
                  </div>
                </div></div></div>
              {/* Product Info */}
              <div className="flex flex-col items-center justify-center gap-[6px] pt-[9.5px] pb-[18px]">

                <h4 className="font-poppins font-bold text-[18px] leading-[150%] text-natural-blue text-center">
                  Nike Air Max 270 React
                </h4>

                <img
                  src="/svg/rate.svg"
                  className="w-[123.6px] h-[15.14px]"
                  alt="rating"
                />

                <div className="flex items-center gap-[13.14px]">
                  <h4 className="font-poppins font-bold text-[18px] leading-[180%] text-primary-blue">
                    $299,43
                  </h4>

                  <div className="flex justify-between items-center w-[122px]">
                    <h4 className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0.5px] line-through text-natural-gray">
                      $534,33
                    </h4>
                    <h4 className="font-poppins font-bold text-[14px] leading-[150%] text-primary-red">
                      24% Off
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Swiperdata;
