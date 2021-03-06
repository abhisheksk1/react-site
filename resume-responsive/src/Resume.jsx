import React from 'react';
import "./Resume.css";
import Abhi2 from "./image/Abhi2.jpg";


const Resume = () => {
    return (
        <div className="main-container">
            <article>
                <div className="upper container-left">
                    <h1>Abhishek Kumar Pandey</h1>
                    <h3 id="medium">Front-End Web Developer</h3>
                    <h5 className="key-words">
                        Goal oriented person with whom you will want to meet and work. I
                        work well in a team, I am able to resolve conflict and compromise.
                    </h5>
                </div>

                <div id="upper-mid" className="upper container-mid">
                    <img src={Abhi2} alt=""/>
                </div>

                <div className="upper container-right">
                    <ul>
                        <li>Send Email</li>
                        <li>9304843750</li>
                        <li>DurgaPur, India</li>
                        <li>
                            <a target="_blank" href="https://abhishek-77861.web.app/">Visit Portfolio</a>
                        </li>
                        <li>
                            <a target="_blank"  href="https://www.linkedin.com/in/abhishek-kumar-pandey-baa2041b8/">Visit LinkedIn</a>
                        </li>
                    </ul>
                </div>

                <div className="education inline">
                    <h2>EDUCATION</h2>
                    <div className="college">
                        <h3 id="medium" className="m-top">
                            B.Tech in Computer Science and Engineering
                        </h3>
                        <p id="medium" className="university-name">
                            Makaut University, West Bengal
                        </p>
                        <ul id="extra-small" className="percentage">
                            <li className="left" id="extra-small">2019-present</li>
                            <li className="right" id="extra-small">9.61cgpa</li>
                        </ul>
                    </div>
                    <div className="college">
                        <h3 id="medium" className="name top">
                            Higher Secondary Education
                        </h3>
                        <p id="medium" className="university-name">
                            CBSE, New Delhi
                        </p>
                        <ul id="extra-small" className="percentage">
                            <li className="left" id="extra-small">4/2018-4/2019</li>
                            <li className="right" id="extra-small">85%</li>
                        </ul>
                    </div>
                </div>

                <div className="skills inline">
                    <h2>SKILLS</h2>
                    <ul className="m-top">
                        <li>Html</li>
                        <li>Css</li>
                        <li>Bootstrap 4</li>
                        <li>JavaScript</li>
                        <li>React Js</li>
                        <li>Material-UI</li>
                        <li>Python</li>
                        <li>Ds&Algorithm</li>
                        <li>C</li>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div className="work-exp inline">
                    <h2>Work Experience</h2>
                    <h3 id="medium" className="m-top">
                        FreeLancing
                        <br/>
                        <span>PortFolio Website</span>
                    </h3>
                    <p id="extra-small">
                        Jan-2021-Feb-2021
                        <br/>
                        I created a portfolio website. you can check out my more freelancing
                        work from my portfolio.
                        <br/> 
                        feedback about my work
                    </p>
                    <ul>
                        <li>
                            <span>-</span>
                            Abhishek is a very diligent and hard working
                            person. I was really delighted by the portfolio he build for me.
                            His skills blow my mind. I could not have teamed up with a better
                            developer.
                        </li>
                    </ul>
                    <p id="extra-small">
                        contact: <span><a href="">Visit</a></span>
                    </p>
                </div>

                <div className="projects inline">
                    <h2>PERSONAL PROJECTS</h2>
                    <ol>
                        <li className="m-top">
                            Portfolio:-
                        </li>
                        <ul>
                            <li>
                                <span>-</span>
                                I created my Own Portfolio Website using my
                                all the skills. You Can check it out all the codes and live demo
                                of my project's there.
                            </li>
                        </ul>
                        <li className="m-top">
                            Black Jack Game:-
                        </li>
                        <ul>
                            <li>
                                <span>-</span>
                                I created Black Jack Game using Python.
                            </li>
                        </ul>
                        <li className="m-top">
                            Tic Tac Toe:-
                        </li>
                        <ul>
                            <li>
                                <span>-</span>
                                I created Tic Tac Toe using React js, React-toastify etc
                            </li>
                        </ul>
                        <li className="m-top">
                            Whatsapp Clone:-
                        </li>
                        <ul>
                            <li>
                                <span>-</span>
                                Created using react.js, material-ui etc.
                                it has the feature of google sing in.
                            </li>
                        </ul>
                        <li className="m-top">
                            Weather App:-
                        </li>
                        <ul>
                            <li>
                                <span>-</span>
                                using Node.js. ui is created using html and css.
                            </li>
                        </ul>
                    </ol>
                </div>

                <div className="other-initiative inline">
                    <h2>OTHER INITIATIVE</h2>
                    <h4 className="m-top">Blog:- </h4>
                    <p id="extra-small">
                        I will maintain my own blog and share my knowledge regarding
                        programming
                    </p>
                    <h4 className="m-top">Open Source:- </h4>
                    <p id="extra-small">
                        I contributed in some open source projects. which will help me to
                        know how to implement our knowledge in real life.
                    </p>
                </div>

                <div className="achievement inline"></div>
                <div className="language inline">
                    <h2>LANGUAGES</h2>
                    <ul className="m-top">
                        <li className="left">
                            English
                            <br/>
                            <span id="extra-small">Full Professional Proficiency</span>
                        </li>
                        <li className="right">
                            Hindi 
                            <br/>
                            <span id="extra-small">Mother Tongue</span>
                        </li>
                    </ul>
                </div>

                <div className="interest inline">
                    <h2>INTEREST</h2>
                    <ul className="m-top">
                        <li className="interest_li">Cricket</li>
                        <li className="interest_li">Badminton</li>
                        <li className="interest_li">Chess</li>
                        <li className="interest_li">Blog</li>
                    </ul>
                </div>
            </article>
        </div>
    )
}

export default Resume;
