import React, { useEffect } from 'react'
import axios from 'axios';
function AwardList() {

  useEffect( async()=>{
    const awards = await axios.get("localhost:27017:api/awards")
    console.log(awards.data)
  })

  return (
    <div>
        <div className="award-card" id="award-2">
        <span className="delete-icon">&times;</span>
        <h3>Coding Guru</h3>
        <p>Solve 5 challenges.</p>
        <div className="progress-bar">
          {/* <div className="progress" style="width: 40%;"></div> */}
        </div>
        <button className="update-button">Update Progress</button>
        <button className="update-button">Edit</button>
      </div>
      
    </div>
  )
}

export default AwardList
