import React from 'react'
import Swiperdata from './Swiper'

const Saller = () => {
  return (
    <>
      <section>
        <main className="pb-[90.83px]">
          <div className="max-w-[1315px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center">
              {/* Title + Swiper */}
              <div className="flex flex-col justify-center w-full items-center pb-[23.5px] text-center">
                <h1 className="font-poppins font-[600] text-[28px] sm:text-[32px] md:text-[35px] leading-[100%] mb-[26px]">
                  BEST SELLER
                </h1>
                <Swiperdata />
              </div>
            </div>

            {/* Load More Button */}
            <div className="flex justify-center">
              <button
                className="cursor-pointer h-[33px] px-4 text-primary-blue font-poppins font-[500] text-lg sm:text-xl leading-[100%] border-b-[3px] border-primary-blue"
              >
                LOAD MORE
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Saller
