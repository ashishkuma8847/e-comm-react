import React from 'react'
import Swiperdata from './Swiper'

const Saller = () => {
  return (
<>
<section>
  <main className='pb-[90.83px]'>
    <div className="max-w-[1315px] w-full mx-auto px-5">
      <div className="flex flex-col justify-center  ">
        <div className="flex flex-col justify-center w-full items-center pb-[23.5px]">
          <h1 className='font-poppins font-[600] text-[35px] leading-[100%] mb-[26px]'>BEST SELLER</h1>
         <Swiperdata/>
        </div>
      </div>
      <button className='flex cursor-pointer   justify-center items-center
      // ml-[613px] 
      m-[0_auto]
      h-[33px] text-primary-blue font-poppins font-[500] text-xl leading-[100%] border-b-[3px] border-primary-blue'>LOAD MORE</button>
    </div>
  </main>
</section>
</>
)
}

export default Saller