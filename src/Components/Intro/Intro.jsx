import React, { useContext } from "react";
import "./Intro.css";
import Typical from "react-typical";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi ! I Am</span>
          <span>Arun Patwa</span>
          <h1>
              {" "}
              <Typical 
              loop={Infinity}
              steps={[
              "Enthusiatic Dev 🌐",
              1000,
              "Software Engineering Student 💻😎",
              1000,
              "IIT Mandi 2020-24🤩",
              1000,
              " Google Qwiklabs Challege Solver",
              1000,
              ]}/>
              </h1> 
          <span>
            Frontend and Software Developer 
            .I am Tech Enthusiastic, hardworking, and self-motivated person.
            Currently looking for an opportunity to utilize my technical skills in a challenging working environment and become a valuable asset to the organization
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/arunpatwa"><img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/in/arun-patwa-093694155/"><img src={LinkedIn} alt="" /></a>
            <a href="https://www.instagram.com/arun_s_patwa/"> <img src={Instagram} alt="" /></a>
            
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-32%", left: "80%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "-6rem", top: "23rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Software" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;