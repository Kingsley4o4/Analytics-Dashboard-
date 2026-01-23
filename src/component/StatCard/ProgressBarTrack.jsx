import React from "react";
import Testlogo from "../StatCard/TESLA.png";
import "./progressbar.css";
import Img1 from "../StatCard/Img/img1.png"
import Img2 from "../StatCard/Img/img2.png"
import Img3 from "../StatCard/Img/img3.png"
import Img4 from "../StatCard/Img/img4.png"
import Img5 from "../StatCard/Img/img5.png"
import Img6 from "../StatCard/Img/img6.png"

const ProgressBarTrack = ({ customClass }) => {
  return (
    <div>
         <h5 style={{color:"gray"}}>Weakest Topics</h5>
             <h5 className="progressBardetails">Food Safety</h5>
      <div className="progressBar">
        <div className="progressImage">
          <img src={Img2} alt="" />
        </div>

        <div className="progressLine"></div>
        <div style={{ width: "50px" }} className="ProgressFill"></div>
          <div style={{marginTop:"20px", color:"gray", fontWeight:"500", marginLeft:"11px"}}>

        <span>60%</span>
        <span>Correct</span>
          </div>
      </div>
      <h5 className="progressBardetails">Compliance Basics Procedures </h5>
      <div className="progressBar">
        <div className="progressImage">
          <img src={Img3} alt="" />
        </div>

        <div style={{ width: "200%" }} className="progressLine"></div>
        <div className="ProgressFill"> </div>
          <div style={{marginTop:"20px", color:"gray", fontWeight:"500", marginLeft:"11px"}}>

        <span>60%</span>
        <span>Correct</span>
          </div>
      </div>
      <h5 className="progressBardetails">Company Networking</h5>
      <div className="progressBar">
        <div className="progressImage">
          <img src={Img6} alt="" />
        </div>
         
         <div className="progressLine"></div>
          <div className="ProgressFill"> </div>
    <div style={{marginTop:"20px", color:"gray", fontWeight:"500", marginLeft:"11px"}}>

        <span>60%</span>
        <span>Correct</span>
          </div>
      </div>
    </div>
  
  );
};

export default ProgressBarTrack;
