import { useState } from "react";
import cross from "/svg/cross.svg";
import plus from "/svg/plus.svg";
import minus from "/svg/minus.svg";
import cartjson from "../../json/Cart.json";
import Popupcart from "../Card/Popupcart";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart ,removeCartItem,updateCartItem} from "../../redux/slice/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCartItems } from "../../redux/slice/getcartslice";

const Cart = () => {
  const [isCheck, setCheck] = useState(false);
  const [addcart, setaddcart] = useState([]);
  const userid = localStorage.getItem("id");

  const dispatch = useDispatch(); // redux state dispatch to select data
  const cartItems = useSelector((state) => state.cart.items); // redux selector to get and select data from slice
  console.log(cartItems)

  // for all price add in single value
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.Product.originalPrice * item.quantity,
    0
  );
  console.log(totalPrice)
  // get cart data 
  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       const response = await axios.get( `${import.meta.env.VITE_BASE_URL}/getcart/${userid}`
  //       );

  //       setaddcart(response.data.cartItems);
  //     } catch (error) {
  //       console.error("Error fetching cart items:", error);
  //     }
  //   };

  //     fetchCart();
  // }, []);






  // get cart data using redux

  // Fetch cart once
  useEffect(() => {
    if (userid) {
      dispatch(fetchCart(userid));
    }
  }, [dispatch]);




  //update quantity
  // const updateCartItem = async (userId, productId, newQuantity) => {
  //   try {
  //     const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/cartupdate`, {
  //       userId,
  //       productId,
  //       quantity: newQuantity,
  //     });

  //     setaddcart((item) =>
  //       item.map((item) =>
  //         item.productId === productId ? { ...item, quantity: newQuantity } : item

  //       )
  //     );

  //   } catch (error) {
  //     console.error(
  //       "Error updating cart item:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };
  //update quantity using redux
 const handleUpdate = (userId, productId, newQty) => {
  console.log({ userId, productId, newQty }); 
  dispatch(updateCartItem({ userId, productId, quantity: newQty }));
};

  // remove data 
  // const removeCartItem = async (userId, productId) => {
  //   try {
  //     const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/cartremove`, {
  //       data: { userId, productId }
  //     });
  //     setaddcart((item) =>
  //       item.filter((item) =>
  //         !(item.productId === productId)
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error removing item:", error.response?.data || error.message);
  //   }
  // };
   // remove data using redux

   const handleRemove = (userId, productId) => {
  dispatch(removeCartItem({ userId, productId }));
};

  return (
    <>
      <section>
        <main>

          <div className=" flex justify-center items-center bg-sidegray py-[14.5px] gap-2 font-normal sm:text-[18px] text-[15px] mb-[42.28px] ">
            <h1 className="text-primary-blue ">Home</h1>
            <h4 className=" text-lightgray-white"> /</h4>
            <h1 className="text-primary-blue"> Hot Deal</h1>
            <h4 className=" text-lightgray-white"> /</h4>
            <h4 className=" text-primary"> Nike Airmax 270 React</h4>
          </div>
          <div className="container">
            {
              cartItems.length === 0  ? (<>
                <h4 className="py-[180px] flex justify-center text-[100px] font-medium">Please Add Cart</h4>
              </>) : (<>

                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="w-full hidden  pb-[23px] border-b-2 border-sidegray mb-[40px] pl-[50.46px] lg:flex justify-between items-center font-poppins font-[500] text-xl">
                      <h4>PRODUCT</h4>
                      <div className="flex items-center max-w-[488px] w-full justify-between">
                        <h4 className="w-[60px]">PRICE</h4>
                        <h4 className="w-[125px]">QTY</h4>
                        <h4 className="w-[113px]">UNIT PRICE</h4>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[111.35px] pb-[62.2px]">
                      {
                        cartItems.map((item, index) => {
                          const handleIncrease = (item) => {
                            if (item?.quantity < 10) {
                              const newQty = item.quantity + 1;
                              handleUpdate(userid, item.productId, newQty);
                            }
                          };

                          const handleDecrease = (item) => {
                            if (item?.quantity > 1) {
                              const newQty = item.quantity - 1;
                              handleUpdate(userid, item.productId, newQty);
                            }
                          };

                          return (
                            <>
                              <div key={index + item + Date.now()}>
                                <div className="flex  flex-row  items-center justify-between">
                                  <div className="flex lg:flex-row flex-col  lg:gap-0 gap-[10px]  lg:items-center max-w-[435.47px] w-full justify-start lg:justify-between">
                                    <img onClick={() => handleRemove(userid, item.productId)}
                                      className="w-[24px] h-[24px] cursor-pointer"
                                      src={cross}
                                      alt="del"
                                    />
                                    <div className="flex md:flex-row flex-col  items-s
                              tart md:items-center gap-[28.7px]">
                                      <img
                                        className="w-[110px] h-[94px] bg-[#F6F6F6]"
                                        src={`${import.meta.env.VITE_BASE_URL_IMG}/${item.Product.headimgage}`}
                                        alt="redshoue"
                                      />

                                      <h4 className="font-poppins text-[13px] sm:text-[18px] text-primary">
                                        {item.Product.name}
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="font-poppins sm:flex-row sm:gap-0 gap-2 flex-col text-[13px] sm:text-[18px] text-primary flex items-center max-w-[488px] w-full justify-between">
                                    <h4>$ {item.Product.originalPrice}</h4>

                                    <div className="flex w-[125px]  bg-sidegray h-[49px] justify-between items-center rounded border-2 border-sidegray">
                                      <div
                                        onClick={() => handleDecrease(item)}
                                        className="w-[27.2px] cursor-pointer h-full flex justify-end items-center"
                                      >
                                        <img src={minus} alt="minus" />
                                      </div>

                                      <h4>{item.quantity}</h4>
                                      <div
                                        onClick={() => handleIncrease(item)}
                                        className="w-[27.2px] cursor-pointer h-full flex justify-start items-center"
                                      >
                                        <img src={plus} alt="plus" />
                                      </div>
                                    </div>

                                    <h4 className="sm:w-[113px]">
                                      ${item.Product.originalPrice * item.quantity}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>

                  <div className="flex md:justify-between md:items-start pb-[156.47px] flex-col gap-[20px] md:gap-0 justify-center items-center md:flex-row">
                    <div className="flex  ">
                      <input
                        className="max-w-[251px] w-full text-primary opacity-[50%] p-[19px_0_17px_20px] h-[60px] font-poppins font-normal text-[16px]  outline-none border-t-2 border-b-2 border-l-2 border-roundedgray rounded-bl-[3px] rounded-tl-[3px]"
                        type="text"
                        placeholder="Voucher code"
                      />
                      <button className="max-w-[127px] cursor-pointer w-full p-[18px_21px_14px_21px] font-poppins h-[60px] font-[500] text-[18px] text-white bg-primary-blue rounded-r-[3px]">
                        Redeem
                      </button>
                    </div>
                    <div className="flex flex-col max-w-[377px] w-full">
                      <div className="flex flex-col gap-[23px]">
                        {cartjson.titledata.map((item, index) => (
                          <div key={item + index + Date.now()}>
                            <div
                              className={`${index === 2 &&
                                "mb-[28px] border-b-2 border-sidegray"
                                } flex  w-full justify-between font-poppins text-[18px] text-primary`}
                            >
                              <h4 className="">{item.title}</h4>
                              {index === 2 ? (
                                <>
                                  <h4 className="pb-[24px] ">{item.value}</h4>
                                </>
                              ) : index === 1 ? (
                                <>
                                  <h4>${item.data}</h4>
                                </>
                              ) : (
                                <>
                                  <h4>${totalPrice}</h4>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex pb-[24px] justify-between font-poppins font-[500] text-primary-dark text-[30px]">
                        <h4>TOTAL</h4>
                        <h4>${totalPrice + 20}</h4>
                      </div>
                      <div
                        onClick={() => setCheck(true)}
                        className="bg-primary-blue flex items-center cursor-pointer justify-center py-4 rounded "
                      >
                        <button className="font-poppins  font-medium text-lg text-white  cursor-pointer ">
                          Check out
                        </button>
                      </div>

                      {isCheck && (
                        <>
                          <div
                            onClick={() => setCheck(false)}
                            className="fixed inset-0  bg-[#2222224D]    z-40"
                          ></div>

                          <div className="fixed  inset-0 flex   m-auto  justify-center items-center z-50">
                            <Popupcart
                              varient={true}
                              data={() => setCheck(false)}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>)
            }
          </div>
        </main>
      </section>
    </>
  );
};

export default Cart;
