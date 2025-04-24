import React, { Fragment, useState } from 'react'
import nikepro from "../json/nikepro.json"
import rating from "../../public/svg/rate.svg"
import productjson from "../json/Product.json"
import arrow from "../../public/svg/arrowdown.svg"
import cart from "../../public/svg/cartblue.svg"
import wishlist from "../../public/svg/wishlistblue.svg"
import plus from "../../public/svg/plus.svg"
import minus from "../../public/svg/minus.svg"
const Product = () => {
    const [isImage, setImage] = useState(nikepro.data[2].img)
    const [isborder, setIsborder] = useState(false);
    const [arrowdata, setarrowdata] = useState(false);
    const [count, setcount] = useState(1);

    return (
        <>
            <section>
                <main>
                    <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal text-[18px] mb-[42.28px] ">
                        <h1 className="text-primary-blue ">Home</h1>
                        <h4 className=" text-lightgray-white"> /</h4>
                        <h1 className='text-primary-blue'> Hot Deal</h1>
                        <h4 className=" text-lightgray-white"> /</h4>
                        <h4 className=" text-primary"> Nike Airmax 270 React</h4>

                    </div>
                    <div className="container">
                        <div className="flex ">
                            <div className="mr-[36px]">


                                <img className={'object-contain max-w-[375px] w-full h-[272px] bg-lightwhite rounded'} src={`${isImage}`} />
                                <div className="flex gap-[15.50px] pt-[150px] w-full">
                                    {
                                        nikepro.data.map((item, index) => (
                                            <div key={index}>
                                                <img onClick={() => setImage(item.img)} className='max-w-[86px] w-full cursor-pointer hover:border-2 hover:border-primary-blue rounded' src={`${item.img}`} alt="Image" />
                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                            <div className="flex flex-col max-w-[500px] w-full  ">
                                <div className="flex flex-col gap-[27px] pb-[22px] mb-[17px] border-b-2 border-sidegray w-full">
                                    <h1 className=' font-poppins font-[500] text-2xl text-primary-dark'>Nike Airmax 270 React</h1>
                                    <div className="flex items-center gap-[17px]">
                                        <img className='w-[77px] h-[11px]' src={rating} alt="rating" />
                                        <h4 className=' font-[400] text-[16px] text-lightgray-white'>0 reviews</h4>
                                        <h4 className='font-[400] text-[16px] text-skyblue'>Submit a review</h4>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[9.14px] mb-[18px]">
                                    <h4 className='font-poppins font-bold text-xl leading-[180%] tracking-[0.5px] text-primary-blue '>$299,43</h4>
                                    <div className=" flex items-center gap-[8px]">
                                        <h4 className='font-poppins line-through font-[400] text-[14px] leading-[150%] tracking-[0.5px] text-natural-gray'>$534,33</h4>
                                        <h4 className='font-poppins font-bold text-[14px] leading-[150%] tracking-[0.5px] text-primary-red'>24% Off</h4>
                                    </div>
                                </div>
                                <div className="flex font-poppins font-normal text-[14px] text-primary gap-[53px] pb-[23px] border-b-2 border-sidegray mb-[20px]">
                                    <div className="flex flex-col gap-4">
                                        {
                                            productjson.title1.map((item, index) => (
                                                <h4>{item.titledata}</h4>
                                            ))
                                        }
                                    </div>
                                    <div className="flex flex-col gap-4 ">
                                        {
                                            productjson.title2.map((item, index) => (
                                                <h4>{item.titledata}</h4>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex gap-[23px] items-end pb-[21px]">
                                    <h4 className='font-poppins text-[16px] text-primary w-[123px] text-start '>Select Color:</h4>
                                    <div className="flex flex-col items-start">
                                        {
                                            productjson &&
                                            <div className="flex gap-[17px] ">
                                                {productjson.color.map((item, index) => (
                                                    <Fragment key={index + item + Date.now()}>
                                                        <div
                                                            className="flex items-center w-[27px] h-[27px] justify-center rounded-full"
                                                            style={{ border: `2px solid  ${isborder === index ? item?.color : "transparent"}` }}
                                                        >
                                                            <button
                                                                style={{ background: item.color }}
                                                                onClick={() => setIsborder(index)}
                                                                className={`${isborder === index ? "w-[17px] h-[17px]" : "h-[21px] w-[21px]"
                                                                    } rounded-full`}
                                                            ></button>
                                                        </div>
                                                    </Fragment>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="flex gap-[98.36px] w-full mb-[20px] items-center pb-[21px] border-b-2 border-sidegray" >
                                    <h4 className='font-poppins text-[16px] text-primary '>Size</h4>
                                    <div onClick={() => setarrowdata(!arrowdata)} className={` relative flex items-center max-w-[123px] w-full border-2 justify-between border-sidegray rounded p-[10px_18px_10px_16px]`}>
                                        <h4 className='text-[14px] '>XS</h4>
                                        <img className={`${arrowdata ? "rotate-180" : "rotate-0"} transition-all duration-200 w-[7.9px] h-[4.25px]`} src={arrow} alt="arrow" />
                                    </div>

                                    <div className={` ${arrowdata ? "h-[112px] opacity-100 z-50" : "h-0 opacity-0 -z-50"} transition-all duration-200 flex flex-col w-16 left-[800px] top-[700px]  bg-sidegray rounded py-2 px-4 absolute text-start`}>
                                        <h4>M</h4>
                                        <h4>S</h4>
                                        <h4>XL</h4>
                                        <h4>XXL</h4>
                                    </div>


                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex w-[124px] h-[49px] justify-between items-center rounded border-2 border-sidegray">
                                        <img onClick={()=>setcount(count == 1 ? count : count - 1)} src={minus} alt="minus" />
                                        <h4>{count}</h4>
                                        <img onClick={()=> setcount(count >= 10 ? count : count + 1)} src={plus} alt="plus" />
                                    </div>
                                    <div className="flex gap-[17px] max-w-[225px] w-full">
                                        <button className="flex items-center gap-2 bg-lightskyblue  max-w-[159px] w-full pt-[14px] pb-[16px] h-[48px] justify-center rounded">
                                            <img src={cart} className="w-[15.95px] h-[16px]" alt="image" />
                                            <h4 className='font-poppins font-medium text-sm text-primary-blue'>Add To Cart</h4>
                                        </button>
                                        <div className="flex bg-lightskyblue h-[48px] w-[48px] justify-center items-center   rounded">
                                            <img src={wishlist} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Product