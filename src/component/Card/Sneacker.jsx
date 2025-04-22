import React from "react";
import sneackerimage from "../../../public/images/sneacker.png";
const Sneacker = ({width,container,height,imgclass,headingstyle,pstyle,buttonstyle,spanstyle,section}) => {
  return (
    <>
      <section className={section}>
        <main className={`${height} bg-primary-blue `}>
          <div className={`${container}`}>
            <div className="flex relative  text-white">
              <div className={`${width}  justify-center flex flex-col  `}>
                <h1 className={`${headingstyle} font-poppins  `}>
                  Adidas Men Running Sneakers
                </h1>
                <p className={`${pstyle} font-poppins  `}>
                  Performance and design. Taken right to the edge.
                </p>
                <button className={ `${buttonstyle} font-poppins `}>
                  SHOP NOW
                </button>
                <span className={`${spanstyle} bg-white `}></span>
              </div>
              <img
                className={`${imgclass} absolute `}
                src={sneackerimage}
                alt="sneackerimage"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Sneacker;
