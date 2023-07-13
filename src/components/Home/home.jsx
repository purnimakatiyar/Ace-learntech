import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

import img from "../../logo2.png";

const Home=()=>{
    return(
        <>
            <div className="hero_section">
                <div className="container">
                    <div className="hero_wrapper">
                        <div className="hero_content">
                            <div>
                                <h2>Start Your Journey</h2>
                                <h2>With</h2>
                                <h2 className="highlight">Learn Tech</h2>
                            </div>
                            {/* <p className="description">
                                All resources in one place</p> */}
                          

            <h3><Typewriter
              
              
              onInit={(typewriter) =>{
                typewriter
                
                .typeString("The Ultimate Resource Hub_")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Simplify Your Search_")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Centralized Knowledge Hub_")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Streamline Your Success")
                .start();
          
              
                

              }}
              />
              </h3>





              <div className="hero_btns">
                                <button className="primary_btn">Get Started</button>
                                <button className="secondary_btn">Discover More</button>
                            </div>
                        </div>
                        <div className="img_s">
                            <img src={img} alt=" " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default Home;