import React from 'react';
import Trophy from "../Image/Trophy.png";
import Trophygain from "../Image/Trophygain.png"
import "./Content.css";

const Content = () => {
    return (
        <>
            <div className="container">
                <div className="column">
                    <div className="trophy">
                        <img src={Trophy} alt="Trophy" width="300px" height="500px"/>
                    </div>
                </div>
                <div className="column">
                    <div className="wrap">
                        <h4 className="cri"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                        <p className="unorder-para">
                            <ul><span>&#8226;</span> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products
                                for various projects across the globe to save energy.
                            </ul>
                            <ul><span>&#8226;</span>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star 
                                rated energy efficient smart pumps with IoT enabled control panel. 
                            </ul>
                        </p>
                        <img src={Trophygain} alt="" height="370px" width="800px" className="img"/>
                        <p className="para-down">Government of India has awarded the 
                            <span className="bold">"National Energy Conservation Award 2018"</span> .
                             Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of 
                            Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                        </p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Content;
