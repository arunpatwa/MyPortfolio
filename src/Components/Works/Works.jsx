import React, { useContext } from "react";
import "./Works.css";
import react_icon from "../../img/react_icon.png";
import flask from "../../img/flask.png";
import node_express from "../../img/node_express.png";
import python from "../../img/Python.png";
import skills from "../../img/skills.jpg";
import all from "../../img/all.png";
import Cpp from "../../img/C++.png";
import mongoDB from "../../img/mongoDB.png";
// import blockchain from "../../img/blockchain2.png";

// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
// import thumbup from "../../img/thumbup.png";
// import Crown from "../../img/crown.png";
// import glassesimoji from "../../img/glassesimoji.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Skills And Experience
          </span>
          <span>Data Structure
            <br />Web Development
            <br /> Data Science</span>
          <span>
            I am proficient in C++ and Python.

            <br />
            I have good problem-solving skills.
            <br />
            I am comfortable working on both Windows and Linux.

            <br />

          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 60 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >

          <div className="w-secCircle">
            <img src={all} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={mongoDB} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={skills} alt="" />
          </div>{" "}

          <div className="w-secCircle">
            <img src={react_icon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Cpp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={python} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={node_express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={flask} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;