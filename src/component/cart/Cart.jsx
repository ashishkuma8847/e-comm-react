import React, { useState } from "react";
import cross from "../../../public/svg/cross.svg";
import plus from "../../../public/svg/plus.svg";
import minus from "../../../public/svg/minus.svg";
import cartjson from "../../json/Cart.json";
import Popupcart from "../Card/Popupcart";
import { motion } from "framer-motion";

const Cart = () => {
  const [count, setcount] = useState(1);
  const [iscount, setiscount] = useState(1);
  const [isCheck, setCheck] = useState(false);
  const pageVariants = {
    initial: { x: "100vw", opacity: 0 }, 
    animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
    exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
  };
  return (
    <>
     <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section>
        <main>
          <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal sm:text-[18px] text-[15px] mb-[42.28px] ">
            <h1 className="text-primary-blue ">Home</h1>
            <h4 className=" text-lightgray-white"> /</h4>
            <h1 className="text-primary-blue"> Hot Deal</h1>
            <h4 className=" text-lightgray-white"> /</h4>
            <h4 className=" text-primary"> Nike Airmax 270 React</h4>
          </div>
          <div className="container">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="w-full hidden  pb-[23px] border-b-2 border-sidegray mb-[40px] pl-[50.46px] lg:flex justify-between items-center font-poppins font-[500] text-xl">
                  <h4>PRODUCT</h4>
                  <div className="flex items-center max-w-[488px] w-full justify-between">
                    <h4 className="w-[60px]">PRICE</h4>
                    <h4 className="w-[125px]">QTY</h4>
                    <h4 className="w-[113px]">UNIT PRICE</h4>
                  </div>
                </div>
                <div className="flex flex-col gap-[111.35px] pb-[62.2px]">
                  {cartjson.data.map((item, index) => (
                    <div key={index + item + Date.now()}>
                      <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-0 items-center justify-between">
                        <div className="flex items-center max-w-[435.47px] w-full justify-between">
                          <img src={cross} alt="del" />
                          <div className="flex sm:flex-row flex-col items-center gap-[28.7px]">
                            <img
                              className="w-[138px] h-[94px]"
                              src={item.img}
                              alt="redshoue"
                            />
                            <h4 className="font-poppins text-[18px] text-primary">
                              Nike Airmax 270 react
                            </h4>
                          </div>
                        </div>
                        <div className="font-poppins text-[18px] text-primary flex items-center max-w-[488px] w-full justify-between">
                          {index === 0 ? (
                            <>
                              <h4>${count * 499}</h4>
                              <div className="flex w-[125px]  bg-sidegray h-[49px] justify-between items-center rounded border-2 border-sidegray">
                                <div
                                  onClick={() =>
                                    setcount(count == 1 ? count : count - 1)
                                  }
                                  className="w-[27.2px] cursor-pointer h-full flex justify-end items-center"
                                >
                                  <img src={minus} alt="minus" />
                                </div>

                                <h4>{count}</h4>
                                <div
                                  onClick={() =>
                                    setcount(count >= 10 ? count : count + 1)
                                  }
                                  className="w-[27.2px] cursor-pointer h-full flex justify-start items-center"
                                >
                                  <img src={plus} alt="plus" />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <h4>${iscount * 499}</h4>
                              <div className="flex w-[125px]  bg-sidegray h-[49px] justify-between items-center rounded border-2 border-sidegray">
                                <div
                                  onClick={() =>
                                    setiscount(
                                      iscount == 1 ? iscount : iscount - 1
                                    )
                                  }
                                  className="w-[27.2px] cursor-pointer h-full flex justify-end items-center"
                                >
                                  <img src={minus} alt="minus" />
                                </div>

                                <h4>{iscount}</h4>
                                <div
                                  onClick={() =>
                                    setiscount(
                                      iscount >= 10 ? iscount : iscount + 1
                                    )
                                  }
                                  className="w-[27.2px] cursor-pointer h-full flex justify-start items-center"
                                >
                                  <img src={plus} alt="plus" />
                                </div>
                              </div>
                            </>
                          )}
                          <h4 className="sm:w-[113px]">$499</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex md:justify-between md:items-start pb-[156.47px] flex-col gap-[20px] md:gap-0 justify-center items-center md:flex-row">
                <div className="flex  ">
                  <input
                    className="max-w-[251px] w-full text-primary opacity-[50%] p-[19px_0_17px_20px] h-[60px] font-poppins font-normal text-[16px]  outline-none border-t-2 border-b-2 border-l-2 border-roundedgray rounded-bl-[3px] rounded-tl-[3px]"
                    type="text"
                    placeholder="Voucher code"
                  />
                  <button className="max-w-[127px] w-full p-[18px_21px_14px_21px] font-poppins h-[60px] font-[500] text-[18px] text-white bg-primary-blue rounded-r-[3px]">
                    Redeem
                  </button>
                </div>
                <div className="flex flex-col max-w-[377px] w-full">
                  <div className="flex flex-col gap-[23px]">
                    {cartjson.titledata.map((item, index) => (
                      <div key={item + index + Date.now()}>
                        <div
                          className={`${
                            index === 2 &&
                            "mb-[28px] border-b-2 border-sidegray"
                          } flex  w-full justify-between font-poppins text-[18px] text-primary`}
                        >
                          <h4 className="">{item.title}</h4>
                          {index === 2 ? (
                            <>
                              <h4 className="pb-[24px] ">{item.value}</h4>
                            </>
                          ) : index === 1 ? (
                            <>
                              <h4>${item.data}</h4>
                            </>
                          ) : (
                            <>
                              <h4>${(count + iscount) * item.value}</h4>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex pb-[24px] justify-between font-poppins font-[500] text-primary-dark text-[30px]">
                    <h4>TOTAL</h4>
                    <h4>${(count + iscount) * 499 + 20}</h4>
                  </div>
                  <div
                    onClick={() => setCheck(true)}
                    className="bg-primary-blue flex items-center cursor-pointer justify-center py-4 rounded "
                  >
                    <button className="font-poppins  font-medium text-lg text-white  cursor-pointer ">
                      Check out
                    </button>
                  </div>

                  {isCheck && (
                    <>
                      <div onClick={()=>setCheck(false)}  className="fixed inset-0  bg-[#2222224D]    z-40"></div>

                      <div  className="fixed inset-0 flex w-[1021px] m-auto  justify-center items-center z-50">
                        <Popupcart varient={true} data={()=>setCheck(false)}/>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      </motion.div>
    </>
  );
};

export default Cart;
