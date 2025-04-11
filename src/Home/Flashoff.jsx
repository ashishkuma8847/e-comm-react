import React from "react";
import bg from "../../public/images/PromotionImage.png";
import Flashjson from "../json/Flashoff.json"

const Flashoff = () => {
  return (
    <>
      <section >  
            <div
              className=" h-[653.73px] pt-[258.73px] bg-center bg-no-repeat  "
              style={{ backgroundImage: `url(${bg})` }} 
            >
              <div className="container">
              <h4 className="w-[573.17px] text-white font-poppins font-bold text-[64px] leading-[150%] tracking-[0.5px]">Super Flash Sale
              50% Off</h4></div>
            </div>
            <div className="container relative pb-[334.68px]">
              <div className="flex absolute top-[-90px] bg-lightwhite rounded ">
               
               {
                Flashjson.map((item,index)=>(
                  <div key={item+index+Date.now()}>

                <div className="relative w-[417.94px] h-[358.13px]  bg-cover bg-center " 
                style={{ backgroundImage: `url(${item.image})` }} >
                 
                 <h4 className={`absolute 
                 ${item.titletop} ${item.titleleft}  ${item.titlebottom} ${item.titleright} ${item.titlewidth}
                  font-poppins     font-bold text-xl leading-[150%] tracking-[0.5px] text-natural-blue`}> {item.title}</h4>
                
                
                 <div className={`absolute 
                 ${item.discounttop} ${item.discountbottom} ${item.discountleft} ${item.discountright}
                   flex w-[161px] justify-between`}>
                  <h4 className="font-poppins font-[400] text-[18px] leading-[150%] tracking-[0.5px] line-through text-natural-gray">$534,33</h4>
                  <h4 className="font-poppins font-bold text-[18px] leading-[150%] tracking-[0.5px] text-primary-red">24% Off</h4>
                 </div>
                
                
                 <h4 className={`absolute
                   ${item.priceright} ${item.pricetop} ${item.pricebottom} ${item.priceleft}
                    font-Raleway text-primary-blue  font-bold text-[30px] leading-[180%] tracking-[0.5px] `}>$299,43</h4>
                </div>
                  </div>
                ))
               }
               
              </div>
            </div>
      </section>
    </>
  );
};

export default Flashoff;
