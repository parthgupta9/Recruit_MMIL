// Splashscreen.js
import React, { useEffect } from 'react';
import vector from '../assets/Vector.png';
import image from '../images/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 1.png';
import '../splashscreen/Splashscreen.css';

import Try from '../splashscreen/Try'
import { Link } from 'react-router-dom';
const Splashscreen = ({ onSplashComplete }) => {
  useEffect(() => {
    const handleComplete = () => {
      if (typeof onSplashComplete === 'function') {
        onSplashComplete();
      }
    };

    setTimeout(handleComplete, 3000);

    // Cleanup function to clear the timeout in case the component unmounts before the timeout is reached
    return () => clearTimeout(handleComplete);
  }, [onSplashComplete]);

  return (
   <>
    <div className='splash' >
      <div className="cover">
        <img src={vector} className="icon" alt="" />
        <img src={image} className="icon" id="static-icon" alt="" />
      </div>

    </div>
   <Try/>
   </>
  );
};

export default Splashscreen;

