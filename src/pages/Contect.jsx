import React from 'react'
import PageNotFound from '../component/error/PageNotFound'
import { motion } from "framer-motion";
import caracterimg from "../../public/images/call.png"
import Input from '../component/ui/Input';
const pageVariants = {
  initial: { x: "100vw", opacity: 0 }, 
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
};

const Contect = () => {
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
  <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal text-[18px] mb-[135px] ">
            <h1 className="text-primary-blue ">Home</h1>
            <h4 className=" text-lightgray-white"> /</h4>
            <h4 className=" text-primary"> Contact Us</h4>
          </div>
          <div className="container">
            <div className="flex  gap-[50.9px] items-center pb-[135px]">
                          <div className="flex items-end text-white relative flex-col h-[715.62px] max-w-[626px] w-full bg-primary-blue ">
                            <div className="flex flex-col  mt-[89px] mr-[100px]">
                              <div className="absolute bg-primary-blue w-[130.4px] h-[133.17px] rounded-full top-[291.22px] right-[-20.06px]"></div>
                               <img  className='absolute  right-[103.13px] top-[21.36px] w-[718px] h-[718px]' src={caracterimg} alt="img" />
                               <h4 className='w-[156px] flex  mb-[115px]  font-Raleway font-[600] text-[40px]'>  get in touch</h4>
                               <h4 className='font-Raleway font-[500] text-[14px] mb-[30px]'>contact@e-comm.ng</h4>
                               <h4 className='font-Raleway font-[500] text-[14px] mb-[40px]'>+234 4556 6665 34</h4>
                               <h4 className='font-Raleway w-[200px] font-[500] text-[14px]'>20 Prince Hakerem Lekki
                               Phase 1, Lagos.</h4>
                               </div>
                          </div>
                          <div className="w-[510.14px] flex flex-col gap-[22px]">
                          <Input classname={"text-[#969393]"} forlabel={"id1"} labelvalue={"Fullname"} varient={true} inputid={"id1"} placeholder={"James Doe"}/>
                          <Input classname={"text-[#969393]"} forlabel={"id2"} labelvalue={"Email"} varient={true} inputid={"id2"} placeholder={"jamesdoe@gmail.com"}/>
                          <div className="flex flex-col gap-[7.32px]">
                            <label className='outline-none font-Raleway font-[500] text-[14px] text-[#373737]' htmlFor="id3">Message</label>
                            <textarea className= 'text-[#969393] font-Raleway font-[500] text-[16px] h-[230px] pt-[41px] pl-[28px]  w-full border-[1px] border-[#969393] outline-none ' placeholder='Type your message'  id="id3"/>
                          </div>
                          </div>
            </div>
          </div>
          <div className="flex pb-[135px] justify-center items-center">
               <input className="w-[508px] text-primary opacity-[35%] p-[23px_0_19px_21px] h-[64px] font-poppins font-normal text-[18px]  outline-none border-t-2 border-b-2 border-l-2 border-primary-blue rounded-bl-[3px] rounded-tl-[3px]" type="text"  placeholder="Search query..."/>
               <button className="w-[127px] p-[17px_27.5px] font-poppins h-[64px] font-[600] text-xl text-white bg-primary-blue rounded-r-[3px]">Search</button>
            </div>  
  </main>
</section>

    </motion.div>
    </>
    

  )
}

export default Contect