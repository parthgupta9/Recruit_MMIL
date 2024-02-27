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
            <div className='webdev'>
               <p>Round 2</p>
               <h1 className='heading '> Technical Round</h1>
               <h6 className='task'>Task round to check your skills</h6>
            <h5>Instructions for Students</h5>
            <ul>
                <li>You are required to choose ANY ONE task from here </li>
                <li> The task deadline is 1pm IST on 16-04-2023. </li>
                <li>The students has to complete the task in before the deadline</li>
                <li>Task should be submitted below.</li>
            </ul>
           <div className='details'>
           <p>Phone No*</p>
          <input
            className="form"
            type="text"
            aria-label="type here"
          />
        </div>
        <div className='details'>
        <p>Github Link*</p>
          <input
            className="form"
            type="text"
            aria-label="type here"
          />
        </div>
        <div className='details'>
            <div className='website'>Website Link(github/netlify)*
            </div>
            
          <input
            className="form"
            type="text"
            aria-label="type here"
          />
        </div>
           </div>
            </div>
        </div>
    
 
  

  
    </>
   
  )
}

export default Design