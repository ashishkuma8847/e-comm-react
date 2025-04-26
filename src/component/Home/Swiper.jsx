import React, { useState } from "react";
import data from "../../json/saller.json";

import Seller from "../../component/Card/Seller";
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
          <Seller data={filteredProducts}/>
      </div>
    </>
  );
};

export default Swiperdata;
