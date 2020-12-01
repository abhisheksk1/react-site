import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Content2.css";
import Three from "../Image/Three.png"

const Content2 = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        <p className="install">
                            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE
                            SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
                        </p>    
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <img className="img-responsive image3" src={Three} alt=""/>    
                        <p className="img-info">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                    </div>    
                    <div className="col-md-12">
                        <hr/>
                        <h6 className="hr-heading">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
                        <p class="work">CHEMICALS & PROCESS<span class="vertical-line"></span>
                            POWER<span class="vertical-line"></span> 
                            WATER & WASTE WATER<span class="vertical-line"></span>
                            OILS & GAS<span class="vertical-line"></span>
                            PHARMA<span class="vertical-line"></span>
                            SUGARS & DISTILLERIES<span class="vertical-line"></span>
                            PAPER & PULP<span class="vertical-line"></span>
                            MARINE & DEFENCE<span class="vertical-line"></span>
                            METAL & MINING<span class="vertical-line"></span>
                            FOOD & BEVERAGE<span class="vertical-line"></span>
                            PETROCHEMICAL & REFINERIES<span class="vertical-line"></span>
                            SOLAR<span class="vertical-line"></span>
                            BUILDING<span class="vertical-line"></span> 
                            HVAC<span class="vertical-line"></span>
                            FIRE<span class="vertical-line"></span> 
                            FIGHTING<span class="vertical-line"></span>
                            AGRICULTURE & RESIDENTIAL
                        </p>
                    </div>
                </div>    
            </div>     
        </>
    )
}

export default Content2
