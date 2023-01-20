import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import WebDev from "../../img/code4.png";
import SoftDev from "../../img/code.png";
import Education from "../../img/education4.png";

import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Education </span>
        <span>Services</span>
        <span>
          I am a Tech Enthusiastic and learning the Skills
          <br />
          Looking for the Opportunity to grow my skills and Career
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Education}
            heading={"Education"}
            detail={
              `Electrical Engineering student at IIT Mandi
              🔹CGPA : 7.07/10  
              🔹Class 12th: 91.6 % 🔹Class 10th: 9.4 CGPA`
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={SoftDev}
            heading={"Software Developer"}
            detail={`🔹Data Structure and Algorithms
            🔹Problem Solving Skills  
            🔹Created Path Finding Visualizer  on Graph Algorithms`}
          />
          
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
           
           emoji={WebDev}
            heading={"Web Developer"}
            detail={"🔹C++🔹Python🔹HTML🔹 ReactJS 🔹JavaScript🔹 Nodejs🔹Express🔹Flask"}
          />
          
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;