import React from "react";
import footerjson from "../../json/Footer.json";
import Westernunion from "../../../public/svg/Western-union.svg"
import card2 from "../../../public/svg/card2.svg"
import Paypal from "../../../public/svg/Paypal.svg"
import backgroundvisa from "../../../public/svg/visabackground.svg"
import visaname from "../../../public/svg/visaname.svg"
import visasidebar from "../../../public/svg/visasidebar.svg"
const Footer = () => {
  return (
    <>
      <footer className="pt-[149.62px] pb-[54.07px] bg-lightskyblue">
        <main>
          <div className="max-w-[1200.89px] w-full  mx-auto flex flex-col ">
            <div className="max-w-[1064.82px] w-full pb-[69.74px]">
              <div className="flex justify-between">
                {footerjson.data.map((item, index) => (
                  <div key={item + index + Date.now()}>
                    <div className={`flex flex-col ${item.width} ${item.gap}`} >
                      <div className="flex w-[130.11px] justify-between items-center ">
                        {item.img === undefined ? (
                          ""
                        ) : (
                          <>
                            <img
                              className="w-[39px] h-[39px]"
                              src={item.img}
                              alt="icon"
                            />
                          </>
                        )}
                        {item.heading === undefined ? (
                          <>
                            <div className="font-poppins font-[500] mt-[10px] text-[18px] leading-[100%] text-primary-dark">{item.data}</div>
                          </>
                        ) : (
                          <>
                            <h4 className=" font-poppins font-bold text-[18px] leading-[100%] text-primary-dark">
                              {item.heading}
                            </h4>
                          </>
                        )}
                      </div>
                      {
                        item.tittle=== undefined ? (<>
                        <p className="font-proxima font-[400] text-[14px] leading-[100%] text-primary-dark">
                       E-Comm , 4578 Marmora Road, Glasgow D04 89GR

                      </p>
                        </>):(<>
                        <p className="font-proxima font-[500] text-[12px] leading-[100%] text-primary-dark">
                        {item.tittle}
                      </p>
                        </>)
                      }
                      
                      {
                        item.facebook===undefined ? "" :(<>
                        <div className="flex gap-[39.29px]">
                          <img src="../../../public/svg/facebook.svg" alt="facebook" />
                          <img src="../../../public/svg/twitter.svg" alt="twitter" />
                        </div>
                        </>)
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center pb-[63.42px]">
              {
                footerjson.information.map((item,index)=>(
                  <div key={Date.now()+item+index}>
                    <div className="flex flex-col gap-[29.94px] w-[152px]">
                <h1 className="font-poppins h-[27px] font-normal text-[18px] leading-[100%] text-primary-dark">{item.heading}</h1>
                <div className="flex flex-col gap-1">
                <p className="font-poppins font-[400] text-[14px] leading-[100%] text-primary-dark">About Us</p>
                <p className="font-poppins font-[400] text-[14px] leading-[100%] text-primary-dark">Infomation  </p>
                <p className="font-poppins font-[400] text-[14px] leading-[100%] text-primary-dark"> Privacy Policy</p>
                <p className="font-poppins font-[400] text-[14px] leading-[100%] text-primary-dark">Terms & Conditions </p> </div>
               </div>
                  </div>
                ))
              }
               
            </div>
            <span className="max-w-[1180.86px] h-[1.17px] rounded bg-[#F6F7F8] ml-[15.37px] mb-[30.41px]"></span>
            <div className="flex justify-between items-center ">
              <h1 className="text-lightgray-white font-poppins font-[400] text-[14px] leading-[100%]">© 2018 Ecommerce theme by www.bisenbaev.com</h1>
              <div className="w-[212.44px] flex justify-between items-center ">
                <img src={Westernunion} alt="Westernunion" />
                <img src={card2} alt="" />
                <img src={Paypal} alt="" />
                
                <div className="">
<img className="relative" src={backgroundvisa} alt="" />
<img className="absolute top-10 " src={visaname} alt="" />
<img className="absolute" src={visasidebar} alt="" />
                </div>
              
              </div>
            </div>
          </div>
        </main>
      </footer>
    </>
  );
};

export default Footer;
