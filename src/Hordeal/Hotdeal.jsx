import React, { Fragment, useState } from "react";
import deals from "../json/Hotdeal.json";
import Sneacker from "../component/Card/Sneacker";
import sallerjson from "../json/saller.json"
import arrow from "../../public/svg/arrowdown.svg"
import iconninedot from "../../public/svg/iconninedot.svg"
import iconninedotcolor from "../../public/svg/ninedotswithoutcolor.svg"
import threelinemenu from "../../public/svg/threelinemenu.svg"
import threelinemenuncolor from "../../public/svg/threelinemenuwithcolor.svg"
import Seller from "../component/Card/Seller";
import hotdeljson from "../json/saller.json"
import { Link } from "react-router-dom";
const Hotdeal = () => {
  const [color, setcolor] = useState(false);
  const [price, setPrice] = useState(13.99);
  const [isborder, setIsborder] = useState(false);
  const [brand, setbrand] = useState(false);
  const [nike, setnike] = useState(true);
  const [isnike, setisnike] = useState(false);
  const nikedata =()=>{
    setnike(true)
    setisnike(false)
  }
  const isnikedata =()=>{
    setisnike(true)
    setnike(false)
  }
  return (
    <>
      <section className="mb-[155px]">
        <main>
          <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal text-[18px] mb-[51.53px] ">
            <h1 className="text-primary-blue ">Home</h1>
            <h4 className=" text-lightgray-white"> /</h4>
            <h1> Hot Deal</h1>
          </div>
          <div className="container">
            <div className="flex  w-full justify-between">
              <div className="flex flex-col gap-[30px] max-w-[270px] w-full">
                <div className=" flex flex-col bg-sidegray     rounded  pt-[19px] pl-[20px]  gap-[25px] pr-[15.3px] pb-[26px]">
                  <h1 className="font-poppins font-[500] text-[18px] text-primary-dark  ">
                    Hot Deals
                  </h1>
                  <div className="flex flex-col gap-[20px]">
                    {deals.deals.map((item, index) => (
                      <div key={index}>
                        <div  onClick={() => setcolor(index)} className={`flex justify-between items-center cursor-pointer `}>
                          <h1
                           
                            className={`${
                              color === index && "text-skyblue"
                            } cursor-pointer text-primary font-normal text-[18px] `}
                          >
                            {item.data}
                          </h1>
                          <p className={`${ color === index ? "text-skyblue opacity-100" :"opacity-[35%]"} font-normal text-[18px] text-primary-dark `}>
                            {item.point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                  <div className="flex flex-col max-w-[270px]  bg-sidegray w-full bg-border-gray p-[19px_15px_26px_20px] rounded gap-5">
                    <h1 className="font-poppins font-medium text-lg text-primary">
                      Prices
                    </h1>
                    <div className="flex w-full justify-between">
                      <h4 className="font-proxima font-normal text-lg text-primary">
                        Ranger:
                      </h4>
                      <span>${price.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="13.99"
                      max="25.99"
                      step="0.01"
                      value={price}
                      onChange={(e) => setPrice(parseFloat(e.target.value))}
                      className="
    w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:bg-blue-500
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:shadow-md
    [&::-webkit-slider-thumb]:transition
    [&::-webkit-slider-thumb]:duration-300

    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:bg-blue-500
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:border-none
  "
                    />
                </div>
                <div className="flex flex-col max-w-[270px] w-full bg-sidegray p-[19px_15px_26px_20px] rounded gap-5">
              <h1 className='font-poppins font-medium text-lg text-primary'>Color</h1>
              <div className="flex gap-2">
                {
                  deals &&
                  <div className="flex gap-5 pt-2">
                    {deals.color.map((item, index) => (
                      <Fragment key={index}>
                        <div
                          className="flex items-center w-5 h-5 justify-center rounded-full"
                          style={{ border: `2px solid  ${isborder === index ? item?.color : "transparent"}` }}
                        >
                          <button
                            style={{ background: item.color }}
                            onClick={() => setIsborder(index)}
                            className={`${isborder === index ? "w-3 h-3" : "h-4 w-4"
                              } rounded-full`}
                          ></button>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                }
              </div>
            </div>
            <div className=" flex flex-col bg-sidegray  w-[270px]   rounded  pt-[19px] pl-[20px]  gap-[25px] pr-[15.3px] pb-[26px]">
                  <h1 className="font-poppins font-[500] text-[18px] text-primary-dark  ">
                  BRAND
                  </h1>
                  <div className="flex flex-col gap-[20px]">
                    {deals.brand.map((item, index) => (
                      <div key={index}>
                        <div onClick={() => setbrand(index)}  className={`flex cursor-pointer justify-between items-center `}>
                          <h1
                            
                            className={`${
                              brand === index && "text-skyblue"
                            } cursor-pointer text-primary font-normal text-[18px] `}
                          >
                            {item.data}
                          </h1>
                          <p className={`${ brand === index ? "text-skyblue opacity-100" : "text-primary-dark opacity-[35%]"} font-normal text-[18px]  `}>
                            {item.point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                  <button className="pt-[19px] pb-[16px] w-full flex justify-center items-center font-poppins font-[500] text-[14px] text-primary bg-sidegray rounded">MORE</button>
              </div>
              <div className="">
                <div className="mb-[23px]">
                <Sneacker  width={"h-[297.99px] ml-[110px] w-[351px]"} container={"w-[962px]  "} height={"h-[298px]"} imgclass={"right-[113px] top-[-34.32px] w-[397.93px] h-[297.46px]"}  headingstyle={"font-[500] text-[30px]  mb-[15.34px]"} pstyle={"mb-[12.11px]  font-[400] text-[14px]"} buttonstyle={"w-[111px] text-left h-[30px] font-[600] text-[12px] "} spanstyle={" w-[37px] h-[2.71px]"}/>
                </div>
                <div className="flex items-center">
                     <div className="w-full flex justify-between items-center  pt-[11px] pb-[9px] rounded bg-sidegray pl-[22.23px]">
                      <div className="flex w-[526px] justify-between items-center">
                        <div className="flex w-[58px] justify-between items-center font-normal text-[16px] text-primary-dark">
                             <h4>{sallerjson.saller.length}</h4>
                                 <h4>Items</h4>
                        </div>
                        <div className="flex justify-between items-center w-[192.15px] ">
                          <h4 className="font-normal text-[16px] text-primary-dark ">Sort By</h4>
                          <div className="flex justify-between border-2 border-roundedgray rounded items-center font-normal text-[16px] text-primary-dark w-[128px] p-[10px_17px_9px_17.55px]">
                            <h4>Name</h4>
                            <img className="w-[7.37px] h-[4px]" src={arrow} alt="arrow" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-[172px] ml-[9px] ">
                          <h4 className="font-normal text-[16px] text-primary-dark ">Show</h4>
                          <div className="flex justify-between border-2 border-roundedgray rounded items-center font-normal text-[16px] text-primary-dark w-[128px] p-[10px_17px_9px_17.55px]">
                            <h4>12</h4>
                            <img className="w-[7.37px] h-[4px]" src={arrow} alt="arrow" />
                          </div>
                        </div>
                      </div>
                      <div className="flex ">
                        <img onClick={nikedata}  src={nike ? iconninedot : iconninedotcolor} className="px-[16.58px] pt-[8px] pb-[10px]" alt="iconninedot" />
                        <img onClick={isnikedata} src={isnike ?    threelinemenuncolor :threelinemenu} className="px-[18px] pt-[10px] pb-[12px]" alt="threelinemenu" />
                      </div>
                     </div>
                </div>
                <div  className={`grid grid-cols-1 sm:grid-cols-2 mt-[27px]  md:grid-cols-2 xl:grid-cols-3 gap-[33px] place-items-center ${nike ? "block " : "hidden"}`}>
                  <Seller data={hotdeljson.hotdeal}/>
                </div>
                <div   className={`${isnike ? "block" : "hidden"} flex flex-col` }>
                {
                hotdeljson.data3.map((item, index) => (
                  <div className={`max-w-[870px] w-full border-border-gray pt-[30px] pb-[26px] flex  ${index <= 2 ? "border-b-2 " :"border-none"}`} key={index}>
                    <Link >
                      <div className="flex gap-[14px]">
                        {<> <Link to={"/nikeairmax"}>
                          <img src={"/public/assets/Images"} alt="image" />
                        </Link></>
                        }
                        
                        <div className="flex flex-col">
                          <h1 className='font-poppins font-medium text-2xl text-primary'></h1>
                          <div className="flex items-center pt-[14px] pb-5 border-b-2 border-border-gray max-w-[470px] w-full gap-[15px]">
                            <img className='max-w-[72px] w-full' src={"/public/assets/Icon"} alt="image" />
                            <h4 className='font-proxima font-normal text-sm text-light-gray'></h4>
                            <h4 className='font-proxima font-normal text-sm text-primary-blue'></h4>
                          </div>
                          <div className="flex pt-[10px] pb-5 items-center gap-[9px]">
                            <h4 className='font-poppins font-bold text-xl tracking-[0.5px] text-primary-blue leading-[180%]'></h4>
                            <h4 className='font-poppins font-medium text-sm tracking-[0.5px] text-natural-gray leading-[150%] line-through'></h4>
                            <h4 className='font-poppins font-bold text-sm tracking-[0.5px] text-primary-red leading-[150%]'></h4>
                          </div>
                          <h4 className='font-poppins font-medium text-sm text-primary max-w-[652px] w-full'></h4>
                          <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 bg-bg-blue  max-w-[150px] w-full py-[15px] justify-center rounded">
                            <img src={"/public/assets/Icon"} alt="image" />
                            <h4 className='font-poppins font-medium text-sm text-primary-blue'></h4>
                          </button>
                          <div className="flex bg-bg-blue p-[15px_26px_15px_20px]  rounded">
                            <img src={"/public/assets/Icon"} alt="image" />
                          </div>
                          </div>
                        </div>
                      </div>
                      
                    </Link>
                  </div>
                ))
              }



                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hotdeal;
