import React from "react";
import data from "../../json/Shipping.json";
const Shipping = () => {
  return (
    <>
      <section>
        <main className="">
          <div className="max-w-[1091px] mx-auto px-5 pb-[121.34px]">
            <div className="flex justify-between">
              {data.data.map((item, index) => {
                return (
                  <div key={index + item + Date.now()}>
                    <div className="max-w-[197.56px] w-full flex flex-col justify-center items-center gap-[11.98px]">
                      <div className="flex flex-col justify-center items-center gap-[53.81px]">
                        <img
                          className="w-[100.76px] h-[65.86px]"
                          src={item.img}
                          alt="shippingimg"
                        />
                        <h4 className="font-poppins text-primary-dark font-[500] text-[27px] ">
                          {item.tittle}
                        </h4>
                      </div>
                      <p className="font-proxima font-normal text-center text-[18px] text-primary-dark">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[71.97px] max-w-[1212.93px] w-full px-5 mx-auto pb-[110.04px] ">
            <h1 className="font-poppins font-[600] flex justify-center items-center h-[51px]  text-[34px] text-primary-dark">
              LATEST NEWS
            </h1>
            <div className=" flex justify-between w-full">
              {data.datanews.map((item, index) => {
                return (
                  <div key={index + item + Date.now()}>
                    <div
                      className={`${item.width} flex justify-between items-center`}
                    >
                      <img src={item.img} alt="NIKE" />
                      <div className="flex flex-col w-[197.56px]">
                        <h4 className="text-lightgray-white mb-[2.2px]  font-poppins font-[500] text-[18px] ">
                          01 Jan, 2015
                        </h4>
                        <h4 className="text-primary-dark h-[33px] flex  items-center font-poppins font-[600] text-[22px] ">
                          {item.tittle}
                        </h4>
                        <p className="text-primary-dark font-proxima font-normal text-[18px] ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col pb-[110.04px] justify-center items-center max-w-[1304.98px] w-full mx-auto px-5 gap-[55.44px]">
            <h1 className="text-primary-dark font-poppins font-[600] text-[35px]  h-[53px] justify-center items-center flex">
              FEATURED PRODUCTS
            </h1>
            <div className="flex">
              {data.datanews.map((item, index) => {
                return (
                  <div key={index + item + Date.now()}>
                    <div className="flex w-[428px]  justify-between">
                      <img
                        className="h-[154px] w-[154px]"
                        src={"../../public/images/RectangleSNICKER.png"}
                        alt="RectangleSNICKER"
                      />
                      <div className="flex flex-col w-[249.29px] gap-[17.34px]">
                        <h1 className="text-primary font-proxima font-normal text-[22px] ">
                          Blue Swade Nike Sneakers
                        </h1>
                        <img
                          className="w-[86.02px] h-[11.88px]"
                          src={"../../public/svg/rate.svg"}
                          alt="rate"
                        />
                        <div className="flex w-[104.27px] justify-between items-center ">
                          <h4 className="text-primary-red font-poppins font-[500] text-[20px] ">
                            $499
                          </h4>
                          <h4 className="text-lightgray-white line-through font-poppins font-[500] text-[20px] ">
                            $599
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container">
            <div className="flex pb-[95.41px] justify-center items-center">
               <input className="w-[508px] text-primary opacity-[35%] p-[23px_0_19px_21px] h-[64px] font-poppins font-normal text-[18px]  outline-none border-t-2 border-b-2 border-l-2 border-primary-blue rounded-bl-[3px] rounded-tl-[3px]" type="text"  placeholder="Search query..."/>
               <button className="w-[127px] p-[17px_27.5px] font-poppins h-[64px] font-[600] text-xl text-white bg-primary-blue rounded-r-[3px]">Search</button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Shipping;
