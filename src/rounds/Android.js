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
            height:window.innerWidth < 900 ? "125vh" : "170vh",
          }}
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
            <li className='design'><a href="/Design">Design</a></li>
            <li><a href="/Programming">Programming</a></li>
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
              <li>You are required to make a Unit Converter app. </li>
              <li>Task details can be found <a href="">here</a>.</li>
              <li>The task deadline is 1pm IST on 16-04-2023. </li>
              <li>Task should be submitted below.</li>
              <li>Apk should be uploaded on Google drive and attached below.</li>
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
              <label htmlFor="textInput">Github link*</label>
              <div className='inputBox'>
                <input
                  id="textInput"
                  className="form"
                  formMethod="POST"
                  type="text"
                  placeholder="Paste here"
                  aria-label="type here"
                  required
                />
              </div>
              <label htmlFor="textInput">G-drive Link*</label>
              <div className='inputBox'>
                <input
                  id="textInput"
                  className="form"
                  formMethod="POST"
                  type="text"
                  placeholder="Paste here"
                  aria-label="type here"
                />
              </div>
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>





    </>

  )
}

export default Design