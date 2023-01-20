import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {
  const today=new Date();
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Copyright &copy; {today.getFullYear()} Arun Patwa. All right reserved </span>
        <div className="f-icons">
          <a href="https://github.com/arunpatwa"><Gitub color="white" size={"3rem"} /></a>

          <a href="https://www.instagram.com/arun_s_patwa/"><Insta color="white" size={"3rem"} /></a>

          <a href="https://www.facebook.com/arun.patwa.583/"><Facebook color="white" size={"3rem"} /></a>
          
          <a href="https://www.linkedin.com/in/arun-patwa-093694155/"><Linkedin color="white" size={"3rem"} /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;