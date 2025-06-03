import React, { useEffect, useState } from 'react'
import wishlist from "../../../public/svg/wishlist.svg"
import cart from "../../../public/svg/cartblue.svg"
import { Link } from 'react-router-dom'
const Seller = ({ data }) => {
  const [users, setUsers] = useState({ user: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getalldata');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>

      {users.user.map((item, index) => (
        <div className='flex justify-center items-center w-[301px]' key={index}>
          <div className={` border-2 relative  border-lightwhite rounded w-[100%] max-w-[299.5px] flex flex-col justify-center items-center`}>
            {/* Deal Badge */}

            {item.hotdeal && (
              <span className="font-proxima z-50 absolute top-0 left-0 bg-primary-red rounded text-white font-normal text-[18px] w-[64px] h-[33px] flex justify-center items-center">
                {item.hotdeal}
              </span>
            )}

            {/* Product Image */}
            <div className="group  ">
              <img
                src={item.image}
                className="  hover:blur-xs  h-[272.5px] object-cover"
                alt="product"
              />
              <div className=" ">
                <div className="absolute  flex group-hover:w-[112px]  z-20 group-hover:opacity-100 transition-all duration-200 opacity-0  w-0 justify-between items-center top-[120px] left-[90px]">
                  <Link to={"/error"}> <div className=" border-2 rounded-full flex justify-center items-center bg-white border-lightskyblue w-[51px] h-[51px]">
                    <img className="w-[17.8px ] h-[15.6px] " src={wishlist} alt="wishlist" />
                  </div></Link>

                  <Link to={"/cart"}><div className="border-2 rounded-full flex justify-center items-center bg-white border-lightskyblue w-[51px] h-[51px]">
                    <img className="w-[17.77px ] h-[17.83px]  " src={cart} alt="cart" />
                  </div></Link>

                </div></div></div>
            {/* Product Info */}
            <div className="flex flex-col items-center justify-center gap-[6px] pt-[9.5px] pb-[18px]">

              <h4 className="font-poppins font-bold text-[18px] leading-[150%] text-natural-blue text-center">
                {item.name}
              </h4>

              <img
                src="/svg/rate.svg"
                className="w-[123.6px] h-[15.14px]"
                alt="rating"
              />

              <div className="flex items-center gap-[13.14px]">
                <h4 className="font-poppins font-bold text-[18px] leading-[180%] text-primary-blue">
                  {item.originalPrice}
                </h4>

                <div className="flex justify-between items-center w-[122px]">
                  <h4 className="font-poppins font-normal text-[14px] leading-[150%] tracking-[0.5px] line-through text-natural-gray">
                    {item.price}
                  </h4>
                  <h4 className="font-poppins font-bold text-[14px] leading-[150%] text-primary-red">
                    {item.discountPercent}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Seller