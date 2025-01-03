import React from 'react'
import "./form.css"
function Form() {

    function handlesubmit(){
        alert("submit")
    }
  return (
    <div className='form-container'>
        <h1>Add/Edit Award</h1>
        <form action="submit" onSubmit={handlesubmit} className='form'>
        <input type="text" id="awardTitle" placeholder="Award Title" value="Fitness Champion"/>
        <input type="text" id="awardDescription" placeholder="Award Description" value="Complete 10 workouts."/>
        <input type="text" id="awardRequirement" placeholder="Requirements (e.g., 10)" value="10"/>
        <button onSubmit={handlesubmit} >Submit</button>
        </form>
    </div>
  )
}

export default Form
