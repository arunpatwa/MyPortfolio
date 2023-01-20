import React from "react";
// import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Portfolio.css'
// import 'swiper/css'//this did not worked but below worked
import 'swiper/swiper.min.css';

import PathFindingVisualizer from "../../img/pathfinding.png";
import crowdfunding from "../../img/crowdfunding.png";
import datasummarizer from "../../img/datasummarizer.png";
import { Button } from "react-scroll";

// import { themeContext } from "../../Context";

const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* heading  */}
        <span>Projects</span>
        <span>Portfolio</span>
        <span>
        {/* slider  */}
        <Swiper
            spaceBetween={1}
            slidesPerView={1}
            grabCursor={true}
            className='portfolio-slider'
>
        <SwiperSlide>
            <a href="https://crowdfunding-web3app.netlify.app/"><img src={crowdfunding} alt="crowdfunding-app" /></a>
           
        </SwiperSlide>
        </Swiper>

        <Swiper 
            spaceBetween={1}
            slidesPerView={1}
            grabCursor={true}
            className='portfolio-slider'
>
        <SwiperSlide>
        <a href="https://arunpatwa.github.io/path-finding-visualizer/"> <img src={PathFindingVisualizer} alt="path finding visualizer" /></a>
       
            
        </SwiperSlide>
        

        </Swiper>
    
        <Swiper
         spaceBetween={1}
         slidesPerView={1}
         grabCursor={true}
         className='portfolio-slider'
         >
        <SwiperSlide>
            <a href="">
            <img src={datasummarizer} alt="" />
            </a> 
           
        </SwiperSlide>
        </Swiper>
        </span>
    </div>
  )
}

export default Portfolio
