import React from 'react'
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.jpg"; 
import './design.css'
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import {vector} from '../assets/Vector.png'


const Design = () => {
  return (
    <>
     <div className='main'>
      <img
        src={window.innerWidth <= 900 ? appbg : bg}
        alt="Your Image"
    />
      </div>
      <div id='first'>

      <img
          src={mmil}
          alt="Overlay Image"
          
        />
      </div>
      <div className='domains'>
          <div className='fields'>
            <ul>
                <li className='design'>Design</li>
                <li>Programming</li>
                <li>Web Dev</li>
                <li>Android</li>
            </ul>
          </div>
      </div>
      <div className='container'>
        <div className='rounds' >
           <p>Tasks</p>
            <div className='instructions'>
               <p>Round 2</p>
               <h1 className='heading '> Technical Round</h1>
               <h6 className='task'>Task round to check your skills</h6>
            <h5>Instructions for Students</h5>
            <ul>
                <li>Pay attention to details and follow the instructions provided</li>
                <li> Use this opportunity to showcase your skills and approach to problem-solving. </li>
                <li>The students has to complete the task in before the deadline</li>
                <li>The link to the task has been provided below.</li>
            </ul>
            <button className='button'><a href='#'>Click here</a></button>
            </div>
        </div>
      </div>
 
  

  
    </>
   
  )
}

export default Design