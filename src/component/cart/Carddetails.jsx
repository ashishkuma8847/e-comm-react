import React, { useState } from 'react'
import card from "../../../public/svg/visacardcart.svg"
import Input from '../ui/Input'

const Carddetails = ({valuesec}) => {
    const [click, setclick] = useState(false);

  return (
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
   <button onClick={valuesec} className={` w-[338px] flex justify-center m-auto font-Nunito font-[800] text-2xl tracking-[-2%] items-center bg-skyblue  rounded text-white cursor-pointer h-[70px]`}>Confirm</button>
       </>)  
  )
}

export default Carddetails