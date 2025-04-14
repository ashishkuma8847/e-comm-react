import React from "react";
import sneackerimage from "../../public/images/sneacker.png";
const Sneacker = () => {
  return (
    <>
      <section className=" pb-[97.2px]">
        <main className="bg-primary-blue h-[600px]">
          <div className="container ">
            <div className="flex relative  text-white">
              <div className="w-[592px] h-[600px] justify-center flex flex-col  ">
                <h1 className="font-poppins font-[500] text-[55px]  mb-[23.34px]">
                  Adidas Men Running Sneakers
                </h1>
                <p className="mb-[12.11px] font-poppins font-[400] text-[24px] ">
                  Performance and design. Taken right to the edge.
                </p>
                <button className="font-poppins w-[111px] h-[30px] font-[600] text-[20px] ">
                  SHOP NOW
                </button>
                <span className="bg-white  w-[75px] h-[3px]"></span>
              </div>
              <img
                className="absolute right-[-120px] top-[-93px]"
                src={sneackerimage}
                alt="sneackerimage"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Sneacker;
