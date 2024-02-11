import React from 'react'

import FirstSlide from './ques/FirstSlide'
import Splashscreen from './splashscreen/Splashscreen'
import Try from './splashscreen/Try'
import Register from './Register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Name from './Namw/Name'
import Congrats from './congrats/Congrats'
import RollNo from './RollNo/RollNo'
import Branch from './Branch/Branch'
import Email from './Email/Email'
import Phone from './Phone/Phone'
import Domain from './Domain/Domain'


const App = () => {
  return (
<>

    <div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Splashscreen/>}/>
  <Route path="/Start" element={<Try/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/First" element={<FirstSlide/>}></Route>
  <Route path="/Name" element={<Name/>}></Route>
  <Route path="/RollNo" element={<RollNo/>}></Route>
  <Route path="/Branch" element={<Branch/>}></Route>
  <Route path="/Email" element={<Email/>}></Route>
  <Route path="/Phone" element={<Phone/>}></Route>
  <Route path="/Domain" element={<Domain/>}></Route>
  <Route path="/Congrats" element={<Congrats/>}></Route>
</Routes>

</BrowserRouter>
    </div>
</>
  )
}

export default App
