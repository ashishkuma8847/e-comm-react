import React, { useState } from 'react'
import arrowdown from "../../../public/svg/arrowdown.svg"
import profile from "../../../public/svg/profile.svg"
import cart from "../../../public/svg/cart.svg"
import search from "../../../public/svg/search.svg"
import arrow from "../../../public/svg/arrowlightwhite.svg"
import icon from "../../../public/svg/icon.svg"
import Headerjson from "../../json/Header.json"
import { Link, NavLink } from 'react-router-dom'
const Dropdown = ({ name, items, activeDropdown, setActiveDropdown }) => {
  const down = activeDropdown === name;

  return (
    <>
      <div
        onClick={() => setActiveDropdown(down ? null : name)}
        className="font-proxima cursor-pointer flex flex-col w-[38.26px] relative"
      >
        <div className="flex gap-[5.6px]">
          <h1 className="font-[400] text-xl text-primary-dark ">{name}</h1>
          <img
            className={`transition-all duration-200 ${down ? "rotate-180" : "rotate-0"}`}
            src={arrowdown}
            alt="arrowdown"
          />
        </div>

        <div
          className={`w-[100px] bg-primary-blue p-1 top-[40px] transition-all duration-200 text-white rounded flex flex-col absolute justify-center items-center ${down ? "h-[100px] z-10 opacity-100" : "h-0 -z-10 opacity-0"
            }`}
        >
          {items.map((item, index) => (
            <div key={index}>
              <h1 className="font-[400] text-xl  border-b-2 border-b-transparent hover:border-b-white">
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const Header = () => {
  const [homedata, sethomedata] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <>
      <section className='border-b-[2px] border-lightgray'>


        <div className="container">
          <div className="pt-[9.74px] flex justify-between items-center ">
            <div className=" flex gap-4">
              <Dropdown
                name="EN"
                items={["EN", "HINDI", "PUNJABI"]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <Dropdown
                name="USD"
                items={["IND", "USD", "USA"]}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            </div>
            <div className="flex justify-between w-[366.15px] items-center">
              <div className="flex justify-between   w-[113.53px]">
                <img src={profile} className='w-[20px] h-[20px]' alt="profile" />
                <h4 className='font-proxima font-[400] text-xl  text-primary'>My profile</h4>
              </div>
              <div className="w-[75px] p-[16px_25px_19px_26px] relative">
                <img src={cart} className='' alt="cart" />
                <span className='bg-primary-red top-[5px] border-white border-[2px] right-[15px] absolute flex justify-center items-center text-white font-poppins font-bold text-[10px] tracking-[0.5px] w-[22px] h-[22px]  rounded-full' >2</span>
              </div>
              <div className="flex justify-between  font-proxima font-[400] text-xl w-[137px] ">
                <h4 className='w-[53px] text-primary text-end'> Items</h4>
                <h4 className='w-[52px] text-primary opacity-[50%]'>$0.00</h4>
              </div>
              <img className='w-[20.95px] h-[20.94px] ' src={search} alt="search" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pb-[26.26px]">
          <div className="flex pt-[26.26px] justify-between">
            <div className="flex w-[134.32px] justify-between items-center">
              <img src={icon} alt="icon" />
              <h4 className=' font-poppins font-bold text-[18px]  text-primary-dark'>E-comm</h4>
            </div>
            <div  className="flex w-[815.49px] relative justify-between items-center font-poppins font-medium text-2xl  text-primary">
              {
                Headerjson.path.map((item, index) => (
                  <div  className='' key={Date.now() + item + index}>
                    <NavLink className="" to={item.path}>
                      {

                        index === 0 ? (<>
                          <h4 onMouseEnter={() => sethomedata(true)} className={""}>
                            {item.title}
                          </h4>
                          <div onMouseLeave={() => sethomedata(false)} className={` transition-all duration-300  ${homedata ? "block" : "hidden"} w-[1029px]    absolute  mx-auto left-[-290px] top-[55px] border-t-2 border-lightgray  h-[360.51px] bg-white text-primary  p-[38.82px_32.7px_3.7px_84.14px]`}>
                      <img className='absolute top-[-11px] left-[315px]' src={arrow} alt="arrowlightwhite" />
                      <div className="flex w-full justify-between">
                        <div className="flex flex-col gap-[12.94px]">
                          
                          <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
                          <div className="flex flex-col gap-6">
                            {
                              Headerjson.datacatogry.map((item, index) => (
                                <div key={index}>
                                  <Link to={"/error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <div className="flex flex-col gap-6 mt-[43.55px]">
                            {
                              Headerjson.datacatogry.map((item, index) => (
                                <div key={index}>
                                  <Link to={"/error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
                          <div className="flex flex-col gap-6">
                            {
                              Headerjson.datacatogryhotdeal.map((item, index) => (
                                <div key={index}>
                                   {
                                    index === 0 ? (<><Link to={"/Hotdeal"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                    </>):<Link to={"/error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                  }
                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <div className="flex flex-col gap-6 mt-[43.55px]">
                            {
                              Headerjson.datacatogryhotdeal.map((item, index) => (
                                <div key={index}>
                                  {
                                    index === 0 ? (<><Link to={"/Hotdeal"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                    </>):<Link to={"/error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4>
                                  </Link>
                                  }
                                  

                                </div>
                              ))
                            }

                          </div>

                        </div>
                        <div className="flex flex-col gap-[12.94px]">
                          <h1 className='font-poppins font-[500] text-lightgray-white text-[22px]'>Category</h1>
                          <div className="flex flex-col gap-6">
                            {
                              Headerjson.datacatogry.map((item, index) => (
                                <div key={index}>
                                  <Link to={"/error"}>
                                  <h4 className='font-poppins  font-normal text-[16px]'>{item.title}</h4></Link>

                                </div>
                              ))
                            }

                          </div>

                        </div>
                      </div>
                    </div>



                        </>) : <h4>{item.title}</h4>
                      }
                    </NavLink>
                  
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
