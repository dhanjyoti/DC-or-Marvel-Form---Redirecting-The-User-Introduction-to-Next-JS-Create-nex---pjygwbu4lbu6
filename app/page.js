'use client'
import React, { useEffect, useState } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import Summary from "./Summary";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState('');
  const [age, setAge] = useState("");


  return (
    <div>
      {(step === 1 || !age) && (
        <div id="start-page">

          <h1>Step 1: Select Form Type and Enter Age</h1>
          <label>
            Enter your age:
            <input type="number" value={age} onChange={({target})=>setAge(target.value)}/>
          </label>
          <br />
          <label>
            Select Form Type:
            <select onChange={(e) => setStep(parseInt(e.target.value))}>
              <option value={1}>--Select--</option>
              <option value={2}>Form A</option>
              <option value={3}>Form B</option>
            </select>
          </label>
          <br />


        </div>
      )}
      {step === 2 && (
        <div>
          <FormA age={age} onSubmit={(value)=>{
            setFormData({show:value, step})
            setStep(4)
          }}/>
        </div>
      )}
      {step === 3 && (
        <div>
          <FormB age={age} onSubmit={(value)=>{
            setFormData({show:value, step})
            setStep(4)
          }}/>
        </div>
      )}
      {(step === 2 || step === 3) && age ? (
        <button id="go-back" onClick={() => {
          setStep(1)
          setAge('')
        }}>Go Back</button>
      ) : null}

      {step === 4 && (
        <div>
          <Summary formData={{age:age, ...formData}}/>
          <button id="start-over" onClick={()=>{
            setStep(1)
            setAge('')
          }}>Start Over</button>
        </div>
      )}
    </div>
  );
}

export default App;