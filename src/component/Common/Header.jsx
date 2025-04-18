import React, { useState } from 'react'
import arrowdown from "../../../public/svg/arrowdown.svg"
import profile from "../../../public/svg/profile.svg"
import cart from "../../../public/svg/cart.svg"
import search from "../../../public/svg/search.svg"
import icon from "../../../public/svg/icon.svg"
import Headerjson from "../../json/Header.json"
import { Link, NavLink } from 'react-router-dom'
import Popup from './Popup'
const Dropdown = ({ name, items, activeDropdown, setActiveDropdown }) => {
  const down = activeDropdown === name;

  return (
    <>
      <div
        onClick={() => setActiveDropdown(down ? null : name)}
        className="font-proxima cursor-pointer flex flex-col  relative"
      >
        <div className="flex gap-[5.6px] items-center">
          <h1 className="font-[400] text-xl  text-primary-dark ">{name}</h1>
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
              <h1 className={`${index === 0 ? "w-[38.26px]" : "w-[55.26px]"} font-[400]  text-x2l   border-b-2 border-b-transparent hover:border-b-white`}>
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
  const [Click1, setClick1] = useState(false)
  const [cross, setcross] = useState(false)


  return (
    <>
      <section className='border-b-[2px] border-lightgray'>


        <div className="container">
          <div className="pt-[9.74px] md:flex justify-between items-center hidden ">
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
            <div className="flex justify-between w-[366.15px]  items-center">
              <div className="flex justify-between items-center  w-[113.53px] ">
                <img src={profile} className='w-[20px] h-[20px]' alt="profile" />
                <h4 className='font-proxima font-[400] text-xl    text-primary'>My profile</h4>
              </div>
              <div className="w-[75px] p-[16px_25px_19px_26px]  relative">
                <img src={cart} className='' alt="cart" />
                <span className='bg-primary-red top-[5px] border-white border-[2px] right-[15px]  absolute flex justify-center items-center text-white font-poppins font-bold text-[10px] tracking-[0.5px] w-[22px] h-[22px]  rounded-full' >2</span>
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
            <div className={`${Click1 ? "hidden  " : "block "} lg:flex flex w-[134.32px] justify-between items-center`}>
              <img src={icon} alt="icon" />
              <h4 className=' font-poppins font-bold text-[18px]  text-primary-dark'>E-comm</h4>
            </div>



            {
              (<>
              <div className="lg:hidden">
                <div className={`flex gap-1.5 md:hidden md:my-[26px] transition-all duration-300 ${Click1 ? "z-10  translate-0 delay-500  opacity-100" : " -z-50 translate-x-[50px] opacity-0 "} items-center `}>
                  <div className="flex">
                  <img src={icon} alt="logo" />
                  <h6 className='text-lg  tracking-normal font-bold font-poppins text-white'>E-Comm</h6></div>
                 
                </div>
                <div className={`flex flex-col gap-5 absolute top-20 z-10 transition-all duration-500 ${Click1 ? "translate-x-0 delay-300 opacity-100 " : "translate-x-[500px] opacity-0"} `}>
                  { Click1 &&
                    Headerjson.path.map((item, index) => (
                      <NavLink onClick={() => setClick1(false)} key={Date.now() + item + index} className="text-2xl font-[500] font-poppins" to={item.path}>
                        {

                          index === 0 ? (<>

                            <Popup child={item.title} />



                          </>) : <h4>{item.title}</h4>
                        }
                      </NavLink>

                    ))
                  }
                </div>
                <div className={`max-h-1vh lg:hidden h-full ${Click1 ? "w-full" : "w-0"} transition-all duration-500 top-0 right-0 absolute bg-gray-400  `}></div>
              </div></>)
            }


            <button className="grid  lg:hidden  h-[40px] items-center   relative cursor-pointer" onClick={() => (setClick1(!Click1))}>
              <p className={`${Click1 ? "-rotate-45 absolute  z-50 " : "-rotate-0 z-0"} transition-all border-black  w-8 border-2 h-1 duration-500`} ></p>
              <span className={`${Click1 ? "border-transparent" : "border-black"} w-8 border-2 transition-all duration-75 h-1`} ></span>
              <p className={`${Click1 ? "rotate-45 absolute  z-50" : "rotate-0 absolute  z-0"} transition-all border-black  w-8 border-2 h-1 duration-500`}></p>
            </button>
            <div className="hidden  lg:w-[815.49px] sm:w-[515px] sm:text-xl xl:flex  lg:flex relative justify-between items-center font-poppins font-medium lg:text-2xl  text-primary">
              {
                Headerjson.path.map((item, index) => (
                  <div className='' key={Date.now() + item + index}>
                    <NavLink className="" to={item.path}>
                      {

                        index === 0 ? (<>

                          <Popup child={item.title} />



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
