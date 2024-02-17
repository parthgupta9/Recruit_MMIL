import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import tick from "../assets/Frame 13.png";
import { Link } from "react-router-dom";
import globalData from '../Global';

const Name = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [user, setUser] = useState({
    name: " ",
  });

  const [tickmark, showTickmark] = useState(false);

  const handleShowTickmark = (e) => {
    showTickmark(true)
  };

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  function handleActive1() {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  }
  function handleActive2() {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
  }
  function handleActive3() {
    setIsActive3(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive4(false);
  }
  function handleActive4() {
    setIsActive4(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  }

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovering4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovering4(false);
  };

  const Postdata = async (e) => {
    e.preventDefault();
    const { name } = user;

    const res = await fetch("/name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
    }
  };

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={bg}
        alt="Your Image"
        style={{
          width: "105vw",
          height: "105vh",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", // Adjust as needed
          opacity: "0.6",
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "26rem",
          height: "28rem"
        }}
      >
        {/* Your card content goes here */}
        <h2
          style={{
            marginLeft: "70px",
            marginRight: "40px",
            fontSize: "47px",
            height: "90px",
            color: "white",
            // width:'320px',
            fontStyle: "Montserrat",
          }}
        >
          LET'S BEGIN!
        </h2>
        <p
          style={{
            display: 'block',
            marginLeft: "90px",
            marginRight: "65px",
            fontSize: "24px",
            color: "white",
            fontStyle: "Montserrat",
            // marginTop: "-10px",
          }}
        >
          Choose your domain ?
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering1 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive1 ? "#1a1a1a" : "#FFE454",
              color: isHovering1 ? "#FFE454" : "#1a1a1a",
              color: isActive1 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              //   width: "80px",
            }}
            onFocus={handleShowTickmark}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            onClick={handleActive1}
          >
            Design
          </a>
          <br />
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering2 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive2 ? "#1a1a1a" : "#FFE454",
              color: isHovering2 ? "#FFE454" : "#1a1a1a",
              color: isActive2 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              //   width: "80px",
            }}
            onFocus={handleShowTickmark}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            onClick={handleActive2}
          >
            Programming
          </a>
          <br />
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering3 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive3 ? "#1a1a1a" : "#FFE454",
              color: isHovering3 ? "#FFE454" : "#1a1a1a",
              color: isActive3 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              //   width: "80px",
            }}
            onFocus={handleShowTickmark}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            onClick={handleActive3}
          >
            Web-Dev
          </a>
          <br />
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering4 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive4 ? "#1a1a1a" : "#FFE454",
              color: isHovering4 ? "#FFE454" : "#1a1a1a",
              color: isActive4 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              //   width: "80px",
            }}
            onFocus={handleShowTickmark}
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            onClick={handleActive4}
          >
            Android-Dev
          </a>
        </div>

        {/* <Link
          to="/Resume"
          style={{
            display: "inline-block",
            marginLeft: "40%",
            marginTop: "24px",
            opacity: tickmark ? '1' : '0',
          }}
        > */}

        {globalData.myGlobalVariable === '1st year' ? (
          <Link
            to="/Congrats"
          >
            <img
              src={tick}
              alt=""
              style={{
                display: "inline-block",
                marginLeft: "40%",
                marginTop: "24px",
                opacity: tickmark ? '1' : '0',
              }}
            // onClick={Postdata}
            ></img>
          </Link>
        ) :(
          <Link
            to="/Resume"
          >
            <img
              src={tick}
              alt=""
              style={{
                display: "inline-block",
                marginLeft: "40%",
                marginTop: "24px",
                opacity: tickmark ? '1' : '0',
              }}
            // onClick={Postdata}
            ></img>
          </Link>
        )}

        {/* <img
          src={tick}
          alt=""
        // onClick={Postdata}
        ></img> */}
        {/* </Link> */}

        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: "absolute",
            marginTop: "-20%",
            top: "-2%",
            left: "30%",
            width: "40%",
            height: "20%",
            opacity: 1,
          }}
        />
      </div>
    </div >
  );
};

export default Name;
