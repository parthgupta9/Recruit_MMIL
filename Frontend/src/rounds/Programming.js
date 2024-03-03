import React from 'react'
import bg from "../assets/bg.jpg";
import appbg from "../assets/bg-app.jpg";
import './design.css'
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";


const Design = () => {
  return (
    <>
      <div className='main'>
        <img
          src={window.innerWidth <= 900 ? appbg : bg}
          style={{
            height:window.innerWidth < 900 ? "149vh" : "170vh",
          }}
          alt="Your Image"
        />
      </div>
      <div id='first'>
      <a href="/Register">
        <img
          src={mmil}
          alt="Overlay Image"
        />
        </a>
      </div>
      <div className='domains'>
        <div className='fields'>
          <ul>
            <li className='design' ><a href="/Design">Design</a></li>
            <li className='programming'><a href="/Programming">Programming</a></li>
            <li><a href="/Webdev">Web-Dev</a></li>
            <li><a href="/Android">Android</a></li>
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
              <li>The contest will be held on Hackerrank.com .</li>
              <li>It will be of 2.5 hours and will contain 5 questions. </li>
              <li>The contest timing will be from 4pm to 6:30pm <br /> IST on 15-04-24.</li>
              <li>Please sign up on Hackerank.com  <br />before attempting the quiz.</li>
            </ul>
            <h5>Details to be filled by Students.</h5>
            <form action="">
              <label htmlFor="textInput">Phone Number*</label>
              <div className='inputBox'>
                <input
                  id="textInput"
                  className="form"
                  formMethod="POST"
                  type="text"
                  placeholder="Text here"
                  aria-label="type here"
                  required
                />
              </div>
              <p
              style={{
                marginTop: '4rem',
                marginBottom: '4rem'
              }} 
              ><a href="">Click here</a> to go the contest page.</p>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}

export default Design