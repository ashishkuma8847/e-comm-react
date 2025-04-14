import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="page_404">
      <div className="max-w-[700px] w-full mx-auto">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center font-poppins  text-primary-blue">Eror 404</h1>
              </div>

              <div className="contant_box_404 font-poppins">
                <Link to={"/"}>
               <button className="bg-primary-blue cursor-pointer text-white  p-[12px_25px] rounded">Go To Home</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
