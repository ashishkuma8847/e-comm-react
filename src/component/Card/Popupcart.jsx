import React, { useState } from "react";
import backimg from "../../../public/svg/StatusBar.svg";
import cross from "../../../public/svg/bluecross.svg";
import Input from "../ui/Input";
import cartjson from "../../json/Cart.json";
import card from "../../../public/svg/visacardcart.svg"
import successicon from "../../../public/svg/SuccessIcon.svg"
const Popupcart = ({ data ,varient}) => {
  const [click, setclick] = useState(false);
  const [button,setbutton]=useState(0)
  return (
    <>
      <section>
        <main>
          <div className="w-[1021px]  bg-white p-[41.19px_97.59px_78.34px_68.23px] rounded">
            <div className="flex flex-col">
              <div className="flex w-full justify-between items-center pb-0.5">
                <div onClick={()=>(button === 1 ? setbutton(false) : setbutton(1))} className="w-[40px] h-[40px] cursor-pointer flex justify-center items-center">
                  <img  src={backimg} alt="back" />
                </div>
                <div
                  onClick={data}
                  className="w-[40px] h-[40px] cursor-pointer  flex justify-center items-center"
                >
                  <img src={cross} alt="cross" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[43.22px] justify-center items-center pb-[40px]">
              <h4 className="flex justify-center items-center text-primary-blue font-Raleway font-[600] text-[32px]">
                Make Payment
              </h4>
              <div className="flex justify-between relative  w-[155px]  items-center font-Nunito font-bold text-[18px] tracking-[-2%] text-white">
                <div className={`${ button ===2 ? "bg-primary-blue" :"bg-buttongray"} w-[50px] h-[2px] absolute right-6 bg-buttongray`}></div>
                <div className={`${button===1 ? "bg-primary-blue" : button ===2 ? "bg-primary-blue" :"bg-buttongray"} w-[50px] h-[2px] absolute left-6 bg-buttongray`}></div>
                <div className="bg-primary-blue z-10 w-[36px] h-[36px] rounded-full flex justify-center items-center">
                  <h4>1</h4>
                </div>
                <div className={`${button===1 ? "bg-primary-blue" : button ===2 ? "bg-primary-blue" :"bg-buttongray"} bg-buttongray z-10 w-[36px] h-[36px] rounded-full flex justify-center items-center`}>
                  <h4>2</h4>
                </div>
                <div className={`${ button ===2 ? "bg-primary-blue" :"bg-buttongray"} bg-buttongray z-10   w-[36px] h-[36px] rounded-full flex justify-center items-center`}>
                  <h4>3</h4>
                </div>
              </div>
            </div>

            {

                // ///////////////////////////////////////////////////////////////////////////
            button === 1 ?
            
            
            
            (<>
             <div className="flex justify-between items-start w-full pb-[127px]">
          <img src={card} alt="cardvisa" />
          <div className=" w-[336px]">
          <Input
                    classname={"w-full  mb-[31px] "}
                    placeholder={"Card Number"}
                    type={"text"}
                  />
                  <div className="w-full flex justify-between mb-[37px]">
                  <Input
                    classname={" w-[161px]   "}
                    placeholder={"Expiry"}
                    type={"text"}
                  />
                  <Input
                    classname={" w-[161px]   "}
                    placeholder={"CVV"}
                    type={"text"}
                  />
                  </div>
                  <Input
                    classname={"w-full  mb-[25px] "}
                    placeholder={"Holder Number"}
                    type={"text"}
                  />
                  <div onClick={()=>setclick(!click)} className="cursor-pointer flex gap-[10px] items-center">
                   <div 
                             className={`
                               
                              transition-all duration-200 w-[24px] h-[24px] flex justify-center items-center border-[1px] border-buttongray rounded cursor-pointer`}
                           >
                             {click  ? (
                               <>
                                 <img
                                   src={"../../../public/svg/graytrue.svg"}
                                   alt="imagestrue"
                                 />
                               </>
                             ) : (
                               ""
                             )}
                           </div>
                           <h4 className='text-[#999999] font-Nunito text-[14px] leading-[150%]'>Save this credit card</h4>
                           </div>
          </div>
        </div>
        <button onClick={()=>setbutton(2)} className={` w-[338px] flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>Confirm</button>
            </>)  
            
            //////////////////////////////////////////////////////////////////////
            
            : button === 2 ?  
            
            (<>
            
  <div className="flex flex-col justify-center items-center gap-[49px]">
    <div className="flex flex-col justify-center">
        <img src={successicon} alt="icon" />
        <h4 className="font-poppins font-bold text-[24px] leading-[150%] tracking-[0.5px] text-center h-[65px] text-[#223263]">Success</h4>
    </div>
    <button onClick={data}  className={` w-[338px] flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>Complete</button>
   

  </div>

            </>)
            
            :
            
            
            
            (<>
            
            <div className="flex justify-between pl-[20px] pb-[27px]">
               <div className="flex flex-col max-w-[380px] w-full">
                 <div className="flex flex-col gap-[33px] mb-[24px]">
                   <Input
                     classname={" w-full "}
                     placeholder={"First Name"}
                     type={"text"}
                   />
                   <Input
                     classname={" w-full "}
                     placeholder={"Email Address"}
                     type={"email"}
                   />
                 </div>
                 <div className="flex flex-col gap-[14.25px]">
                   <h4 className="font-Raleway font-[600] text-xl text-primary-blue">
                     Select Method of Payment
                   </h4>
                   <div className="flex flex-col">
                     {cartjson.bankdetal.map((item, index) => (
                       <div key={Date.now() + item + index}>
                         <div
                           onClick={() => setclick(index)}
                           className={`${
                             click === index ? "bg-[#EBF0FF]" : "bg-white"
                           } p-[16px_13px_16px_16.16px] flex transition-all cursor-pointer duration-200 rounded justify-between items-center `}
                         >
                           <div className="flex items-center gap-[19px]">
                             <img src={item.img} alt="image" />
                             <h4 className="font-poppins font-bold text-[12px] leading-[150%] tracking-[0.5px] text-natural-blue">
                               {item.title}
                             </h4>
                           </div>
                           <div
                             className={`${
                               click === index ? "bg-[#EBF0FF]" : "bg-white"
                             } transition-all duration-200 w-[24px] h-[24px] flex justify-center items-center border-[1px] border-buttongray rounded cursor-pointer`}
                           >
                             {click === index ? (
                               <>
                                 <img
                                   src={"../../../public/svg/true.svg"}
                                   alt="imagestrue"
                                 />
                               </>
                             ) : (
                               ""
                             )}
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
                 <div className="w-[383px]">
                 <Input
                     classname={" w-full mb-[39.41px] "}
                     placeholder={"Last Name"}
                     type={"text"}
                   />
                    <Input
                     classname={" w-full p-[26px_0_75px_14px] mb-[27.49px] "}
                     placeholder={"Address for Delivery"}
                     type={"text"}
                   />
                   <Input
                     classname={" w-full  "}
                     placeholder={"Mobile Phone"}
                     type={"number"}
                   />
                 </div>
             </div>
             <button onClick={()=>setbutton(1)}  className={` w-[338px] flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>Go to Payment</button>
            
            </>)
            ////////////////////////////////////////////////////
           }
           
        
          </div>
        </main>
      </section>
    </>
  );
};

export default Popupcart;
