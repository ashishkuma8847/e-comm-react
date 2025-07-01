import  { useEffect, useState } from 'react'

import Flashoff from '../component/Home/Flashoff';
import Bannerproducts from '../component/Home/Bannerproducts';
import Saller from '../component/Home/Saller';
import Sneacker from '../component/Card/Sneacker';
import Shipping from '../component/Home/Shipping';
import 'react-loading-skeleton/dist/skeleton.css';



const Home = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // setTimeout(() => {
      setLoading(false);
    // }, 2000);
  }, []);
  
  return (
    <>

  


   
      
    <Flashoff/>
    <Bannerproducts/>
    <Saller/>
<Sneacker relative={"flex flex-col 2xl:justify-center justify-between  2xl:gap-[30px] lg:flex-row"} section={"xl:pb-[97.2px] pb-[40px] flex xl:flex-col justify-center   flex-row m-auto" } width={"xl:w-[592px] w-[300px] justify-center mt-[30px] xl:mt-0 lg:w-[400px]  xl:h-[600px]"} container={"container  items-center justify-center   flex xl:block"} height={"xl:h-[600px]  w-full justify-center items-center xl:block   flex "} imgclass={"xl:right-[-120px] my-auto static 2xl:absolute sm:w-[400px] w-[300px] h-[200px] sm:h-[300px] xl:h-[400px] 2xl:h-fit 2xl:w-fit xl:w-[500px] xl:top-[-93px] "} headingstyle={"font-[500] xl:text-[55px] text-[25px]  mb-[23.34px]"} pstyle={"mb-[12.11px]  font-[400] lg:text-[15px] xl:text-[24px]"} buttonstyle={"w-[111px] h-[30px] flex justify-start font-[600] xl:text-[20px] text-[15px] "} spanstyle={" w-[75px] h-[3px]"}/>
    <Shipping/>
    

    </>
  )
}

export default Home