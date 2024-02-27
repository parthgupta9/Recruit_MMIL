
import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.jpg";
import './Programming.css'
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import Navbar from './Navbar';


const Programming = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    return (
        <>

            <div style={{ position: "relative" }}>
                <img
                    src={windowSize.width <= 900 ? appbg : bg}
                    alt="Your Image"
                    style={{
                        width: windowSize.Width < 900 ? "100vw" : "100vw",
                        height: windowSize.Width < 900 ? "140vh" : "140vh",
                        objectFit: "cover",
                    }}
                />
                <Navbar />

                <div
                className="mainCard"
                >
                    <p
                    className="mainHeading"
                    >
                        Rounds
                    </p>
                    <div
                    className="card"
                        style={{
                            backgroundColor: '#FFFAE7',
                            color: '#000'
                        }}>
                        <div>
                            <p className="roundNo">Round 2</p>
                            <i
                                className={'fa-solid fa-chevron-down'}
                                style={{ position: 'absolute', right: '40px', top: '160px', fontSize: '20px' }}
                            ></i>
                            <p className="roundName">Technical Round</p>
                            <p className="roundDescription">Task round to check your skills.</p>
                            <p>Instructions for Students</p>
                            <ul
                                style={{
                                    fontSize: '16px',
                                }}
                            >
                                <li>The contest will be held on <br /> Hackerank.com</li>
                                <li>It will be of 2.5 hours and will contain 5 questions.</li>
                                <li>The contest timing will be from 4pm to <br /> 6:30pm IST on 15-04-24.</li>
                                <li>Please sign uponHAckerank.com <br /> before attempting the quiz.</li>
                            </ul>
                            <p>Details to be filled by students.</p>
                            <div
                                style={{
                                    border: "1px solid #000",
                                    borderRadius: "12px",
                                    padding: "6px",
                                    width: "60%",
                                    margin: "auto",
                                    marginTop: "8px",
                                }}
                            >
                                <input
                                    className="form"
                                    // formMethod="POST"
                                    style={{
                                        width: "100%",
                                        border: "none",
                                        background: "none",
                                        borderBottom: "1px solid #000",
                                        padding: "6px",
                                        color: "#000",
                                        outline: 'none',
                                    }}
                                    required
                                    type="text"
                                    // value={userData.name}
                                    // onChange={handleChange}
                                    // onFocus={handleShowTickmark}
                                    placeholder="Phone Number*"
                                    aria-label="type here"
                                />
                            </div>
                            <p><a href="">Click Here</a> to go the contest page.</p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
};

export default Programming