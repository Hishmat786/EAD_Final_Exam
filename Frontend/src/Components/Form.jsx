import React, { useState } from 'react'
import "./style.css"
function Form() {

    const [title, settitle] = useState("Fitness Champion")
    const [discription, setDiscription] = useState("Complete 10 workouts.")
    const [requirement, setRequirement] = useState("10")

    function handlesubmit(){
        alert("submit")
    }
    
  return (
    <div className='form-container'>
        <h1>Add/Edit Award</h1>
        <form action="submit" onSubmit={handlesubmit} className='form'>
        <input type="text" id="awardTitle" placeholder="Award Title" value={title}/>
        <input type="text" id="awardDescription" placeholder="Award Description" value={discription}/>
        <input type="text" id="awardRequirement" placeholder="Requirements (e.g., 10)" value={requirement}/>
        <button onSubmit={handlesubmit} >Submit</button>
        </form>
    </div>
  )
}

export default Form
