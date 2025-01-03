import React, { useEffect, useState } from 'react'
import "./style.css"
function Form() {

    const [title, settitle] = useState("Fitness Champion")
    const [discription, setDiscription] = useState("Complete 10 workouts.")
    const [requirement, setRequirement] = useState("10")

    const [data, setData] = useState({title:"",discription:"",requirement:""})

    useEffect(async()=>{
      const awards = await axios.post("localhost:27017:api/awards")
          console.log(awards.data)
    })

    function handlesubmit(){
        setData({
          ...data,
          title:awardTitle.value,
          discription:awardDescription.value,
          requirement:awardRequirement.value
        })
        console.log(data)
    }

  return (
    <div className='form-container'>
        <h1>Add/Edit Award</h1>
        <form action="submit" onSubmit={handlesubmit} className='form'>
        <input type="text" id="awardTitle" placeholder="Award Title" value={title} onChange={()=>settitle(awardTitle.value)}/>
        <input type="text" id="awardDescription" placeholder="Award Description" value={discription} onChange={()=>setDiscription(awardDescription.value)}/>
        <input type="text" id="awardRequirement" placeholder="Requirements (e.g., 10)" value={requirement} onChange={()=>setRequirement(awardRequirement.value)}/>
        <button onSubmit={handlesubmit} >Submit</button>
        </form>
    </div>
  )
}

export default Form
