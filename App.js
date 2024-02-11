import React,{useState} from 'react'
import Resume from './Resume/Resume'
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
  const [formData, setFormData] = useState({ name: '', rollNo: '',year:'',email:''});
  const handleNameChange = (name) => {
    setFormData((prevData) => ({ ...prevData, name }));
  };

  const handleRollNoChange = (rollNo) => {
    setFormData((prevData) => ({ ...prevData, rollNo }));
  };
  const handleYearChange = (year) => {
    setFormData((prevData) => ({ ...prevData, year }));
  };
   const handleEmailChange = (email) => {
    setFormData((prevData) => ({ ...prevData,email }));
  };

  const handleSaveData = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form data saved successfully');
        // Redirect or navigate to the next page (e.g., '/Congrats')
      } else {
        throw new Error('Failed to save form data');
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };
  return (
<>
<div>
<BrowserRouter>
<Routes>
 
  <Route path='/' element={<Splashscreen/>}/>
  <Route path="/Start" element={<Try/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/First" element={<FirstSlide onSaveYear={handleYearChange}/>}></Route>
  <Route path="/Name" element={<Name onSaveName={handleNameChange}/>}></Route>
  <Route path="/RollNo" element={<RollNo onSaveRollNo={handleRollNoChange}/>}></Route>
  <Route path="/Branch" element={<Branch/>}></Route>
  <Route path="/Email" element={<Email onSaveEmail={handleEmailChange}/>}></Route>
  <Route path="/Phone" element={<Phone/>}></Route>
  <Route path="/Domain" element={<Domain onSaveData={handleSaveData}/>}></Route>
  <Route path="/Congrats" element={<Congrats/>}></Route>
</Routes>

</BrowserRouter>
    </div>
</>
  )
}

export default App
