import React, { useState, useEffect } from 'react';
import bg from '../assets/bg.jpg'
import vector from '../assets/Vector (1).png'
import unstop from '../assets/unstop-logo 1.png'
import mmil from '../assets/mmil.png'
import { Link } from 'react-router-dom';
import appbg from "../assets/bg-app.svg";
import './Register.css';

const App = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [expandedCard, setExpandedCard] = useState(null);
    const [displayStyle, setDisplayStyle] = useState('none');

    const handleCardClick = (cardName) => {
        setExpandedCard(cardName === expandedCard ? null : cardName);
        setDisplayStyle(displayStyle === 'none' ? 'block' : 'none');
    };

    const updateWindowSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []);

    return (
        <>
            <div>
                <div style={{ position: 'relative'}}>
                    <img
                        src={windowSize.width <= 900 ? appbg : bg}
                        alt="Your Image"
                        style={{
                            width: windowSize.Width < 900 ? "100vw" : "100vw",
                            height: windowSize.Width < 900 ? "100vh" : "100vh",
                            objectFit: "cover",
                        }}
                    />
                    <div className={`card ${expandedCard === "card" ? "expanded" : ""}`} onClick={() => handleCardClick("card")}>
                        <h2
                            style={{
                                fontFamily: 'Montserrat',
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'ExtraBold',
                                letterSpacing: '0',
                            }}>
                            Rounds
                        </h2>
                        <div className="aptitude sub-card">
                            <div>
                                <p className="roundNo">Round 1</p>
                                <p className="roundName">Aptitude Round</p>
                                <p className="roundDescription">Technical and Logical based MCQs round.</p>
                                <div class='aptitude-expanded expanded-text' style={{ display: displayStyle }}>
                                    <ul>
                                        <li class='instructions'>Instruction for Students</li>
                                        <li> Pay attention to details and follow the <br /> instructions provided.</li>
                                        <li> Use this opportunity to showcase your skills <br /> and approach to problem-solving.</li>
                                        <li> The students has to complete the task <br /> before the deadline.</li>
                                        <li>The link to the task has been provided below.</li>
                                        <li><button className="click"><a href="">Click here</a></button></li>
                                    </ul>
                                </div>
                            </div>
                            <i class="fa-solid fa-chevron-right arrow-right1"></i>
                        </div>
                        <div className={`technical sub-card ${expandedCard === "technical" ? "expanded" : ""}`} onClick={() => handleCardClick("technical")}>
                            <div>
                                <p className="roundNo">Round 2</p>
                                <p className="roundName">Technical Round</p>
                                <p className="roundDescription">Task round to check your skills.</p>
                                <div class='technical-expanded expanded-text' style={{ display: displayStyle }}>
                                    <ul>
                                        <li class='instructions'>Instruction for Students</li>
                                        <li> Pay attention to details and follow the <br /> instructions provided.</li>
                                        <li> Use this opportunity to showcase your skills <br /> and approach to problem-solving.</li>
                                        <li> The students has to complete the task <br /> before the deadline.</li>
                                        <li>The link to the task has been provided below.</li>
                                        <li><button className="click"><a href="">Click here</a></button></li>
                                    </ul>
                                </div>
                            </div>
                            <i class="fa-solid fa-chevron-right arrow-right2"></i>
                        </div>
                        <div className="interview sub-card">
                            <div>
                                <p className="roundNo">Round 3</p>
                                <p className="roundName">HR Round</p>
                                <p className="roundDescription">Personal interview and HR interview round <br /> to check your personality  and coordination skills.</p>
                                <div class='interview-expanded expanded-text' style={{ display: displayStyle }}>
                                    <ul>
                                        <li class='instructions'>Instruction for Students</li>
                                        <li> Pay attention to details and follow the <br /> instructions provided.</li>
                                        <li> Use this opportunity to showcase your skills <br /> and approach to problem-solving.</li>
                                        <li> The students has to complete the task <br /> before the deadline.</li>
                                        <li>The link to the task has been provided below.</li>
                                        <li><button className="click"><a href="">Click here</a></button></li>
                                    </ul>
                                </div>
                            </div>
                            <i class="fa-solid fa-chevron-right arrow-right3"></i>
                        </div>
                    </div>
                    <Link to="/First" className='link'>Register Now</Link>
                </div>
            </div>
        </>
    );
};

export default App;