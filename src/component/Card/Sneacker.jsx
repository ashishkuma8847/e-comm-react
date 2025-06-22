import CustomButton from "../ui/CustomButton";
import sneackerimage from "/images/sneacker.png";
const Sneacker = ({width,container,height,imgclass,headingstyle,pstyle,buttonstyle,spanstyle,section,relative}) => {
  return (
    <>
      <section className={`${section}   `} >
        <main className={`${height} bg-primary-blue `}>
          <div className={`${container}`}>
            <div className={`${relative} flex relative   text-white`}>
              <div className={`${width}    flex flex-col  `}>
                <h1 className={`${headingstyle} font-poppins  `}>
                  Adidas Men Running Sneakers
                </h1>
                <p className={`${pstyle} font-poppins  `}>
                  Performance and design. Taken right to the edge.
                </p>
                <div className="w-[130px]">
                <CustomButton size="md" variant="default">
                  SHOP NOW
                </CustomButton></div>
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
