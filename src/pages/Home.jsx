import React from 'react'
import Flashoff from '../Home/Flashoff'
import Saller from '../Home/Saller'
import Shipping from '../Home/Shipping'
import Bannerproducts from '../Home/Bannerproducts'
import { motion } from "framer-motion";
import Sneacker from '../component/Card/Sneacker'

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
<Sneacker section={"pb-[97.2px]"} width={"w-[592px] h-[600px]"} container={"container"} height={"h-[600px]"} imgclass={"right-[-120px] top-[-93px]"} headingstyle={"font-[500] text-[55px]  mb-[23.34px]"} pstyle={"mb-[12.11px]  font-[400] text-[24px]"} buttonstyle={"w-[111px] h-[30px] font-[600] text-[20px] "} spanstyle={" w-[75px] h-[3px]"}/>
    <Shipping/>
    </motion.div>
    </>
  )
}

export default Home