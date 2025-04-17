import React from 'react'
import Flashoff from '../Home/Flashoff'
import Saller from '../Home/Saller'
import Sneacker from '../Home/Sneacker'
import Shipping from '../Home/Shipping'
import Bannerproducts from '../Home/Bannerproducts'
import { motion } from "framer-motion";

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
    {/* <Flashoff/>
    <Bannerproducts/>
    <Saller/>
    <Sneacker/>
    <Shipping/> */}
    </motion.div>
    </>
  )
}

export default Home