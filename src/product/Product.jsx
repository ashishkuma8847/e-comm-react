import React, { useState } from 'react'
import nikepro from "../json/nikepro.json"
const Product = () => {
    const [isImage,setImage] = useState(nikepro.data[2].img)
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
                        <div className="flex">
                               <div className="">
                                

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
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Product