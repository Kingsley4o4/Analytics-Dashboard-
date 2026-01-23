

import React from "react";
import "./statcard.css";
import ActivityChart from "../Chart/ActivityChart";
import SparkLine from "../Chart/SparkLine";
// 
import ProgressBarTrack from "./ProgressBarTrack";
import Img1 from "../StatCard/Img/img1.png"
import Img2 from "../StatCard/Img/img2.png"
import Img3 from "../StatCard/Img/img3.png"
import Img4 from "../StatCard/Img/img4.png"
import Img5 from "../StatCard/Img/img5.png"
import Img6 from "../StatCard/Img/img6.png"
import { ArrowBigDown, ArrowDown, ChevronUp,ChevronDown } from "lucide-react";

import Leaderboard from "../StatCard/Leaderboard/Leaderboard"



     
function StatCard() {
 
 
   
  return (
    <div className="Statcard">
      <div className="Statcard-Wrapper">
        <div className="firstCard">
          <div className="box-1">
            <p>Active User</p>
            <h3>
              24<span className="gray">/80</span>
            </h3>
          </div>
          <div className="box-2">
            <p>Answered Questions</p>
            <h3>3,296</h3>
          </div>
          <div className="box-3">
            <p>Av. Session Length</p>
            <h3>2m 34s</h3>
          </div>
          <div className="secondBox">
            <div className="box-1">
              <p>Starting Knowledge</p>
              <h3>64%</h3>
              <SparkLine />
            </div>
            <div className="box-2">
              <p>Current Knowledge</p>
              <h3>60%</h3>
              <SparkLine />
            </div>
            <div className="box-3">
              <p>Knowledge Gain</p>
              <h3>+4%</h3>
              <SparkLine />
            </div>
          </div>
        </div>

        <div className="secondCard">
          <ActivityChart />
        </div>
      </div>
      {/* TOPIC SECTION */}
      <div className="topicCard">
        <div className="topicCardWrapper">
          <div className="firstTopicCard">
            {/* <h5>Weakest Topics</h5>
             <span>hello</span> */}

            {/* put in her */}
            <ProgressBarTrack />
          </div>

          <div className="secondTopicCard">
            <h5 style={{ color: "gray" }}> Strongest Topics </h5>
            <h5 className="progressBardetails">Covid Protocols </h5>
            {/* green */}

            <div className="progressBar">
              <div className="progressImage">
                <img src={Img1} alt="" />
               
              
                
              </div>

              <div className="progressLineGreen"></div>
              <div
                style={{ width: "50px" }}
                className="ProgressFillGreen"
              ></div>
              <div
                style={{
                  marginTop: "20px",
                  color: "gray",
                  fontWeight: "500",
                  marginLeft: "11px",
                }}
              >
                <span>60%</span>
                <span>Correct</span>
              </div>
            </div>
            <h5 className="progressBardetails">Cyber Security Basics </h5>
            <div className="progressBar">
              <div className="progressImage">
                <img src={Img5} alt="" />
              </div>

              <div
                style={{ width: "200%" }}
                className="progressLineGreen"
              ></div>
              <div className="ProgressFillGreen"> </div>
              <div
                style={{
                  marginTop: "20px",
                  color: "gray",
                  fontWeight: "500",
                  marginLeft: "11px",
                }}
              >
                <span>60%</span>
                <span>Correct</span>
              </div>
            </div>
            <h5 className="progressBardetails">Social Media Policies</h5>
            <div className="progressBar">
              <div className="progressImage">
                <img src={Img4} alt="" />
              </div>

              <div className="progressLineGreen"></div>
              <div className="ProgressFillGreen"> </div>
              <div
                style={{
                  marginTop: "20px",
                  color: "gray",
                  fontWeight: "500",
                  marginLeft: "11px",
                }}
              >
                <span style={{ paddingLeft: "4px" }}>60%</span>
                <span>Correct</span>
              </div>
            </div>

            {/* green */}
          </div>
        </div>

        {/* LEADERBOARD CARD */}
        <div>
          <div className="leaderCardWrapper">
            <div className="leaderTopicCard">

              <Leaderboard/>

              {/* come later */}
            </div>

            <div className="secondleaderTopicCard">
             <Leaderboard showImage ={false}/>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;

    