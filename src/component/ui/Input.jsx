import React from 'react'

const Input = ({classname,type,placeholder}) => {
  return (
    <>
    <input className={`bg-[#f5f5f5] font-Nunito text-[16px] tracking-[-2%] text-[#999999] rounded p-[15px_0_13px_14px] outline-none border-none ${classname}`}  type={type} placeholder={placeholder} />
    </>
  )
}

export default Input