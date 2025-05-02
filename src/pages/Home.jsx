import React from 'react'

import { motion } from "framer-motion";
import Flashoff from '../component/Home/Flashoff';
import Bannerproducts from '../component/Home/Bannerproducts';
import Saller from '../component/Home/Saller';
import Sneacker from '../component/Card/Sneacker';
import Shipping from '../component/Home/Shipping';

const pageVariants = {
  initial: { x: "100vw", opacity: 0 }, 
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
};
const Home = () => {
  return (
    <>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
    <Flashoff/>
    <Bannerproducts/>
    <Saller/>
<Sneacker section={"pb-[97.2px]"} width={"xl:w-[592px]  lg:w-[400px] lg:h-[400] xl:h-[600px]"} container={"container"} height={"h-[600px]"} imgclass={"right-[-120px] top-[-93px]"} headingstyle={"font-[500] xl:text-[55px] lg:text-[35px]  mb-[23.34px]"} pstyle={"mb-[12.11px]  font-[400] lg:text-[15px] xl:text-[24px]"} buttonstyle={"w-[111px] h-[30px] font-[600] text-[20px] "} spanstyle={" w-[75px] h-[3px]"}/>
    {/* <Shipping/> */}
    </motion.div>
    </>
  )
}

export default Home