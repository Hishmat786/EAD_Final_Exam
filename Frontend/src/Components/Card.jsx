import React from 'react'
import "./Card.css"

function Card() {
  return (
    <div className='card'>
      <div className="award-card" id="award-1">
        <span className="delete-icon">&times;</span>
        <h3>Fitness Champion</h3>
        <p>Complete 10 workouts.</p>
        <div className="progress-bar">
          {/* <div className="progress" style="width: 50%;"></div> */}
        </div>
        <button className="update-button">Update Progress</button>
        <button className="update-button">Edit</button>
      </div>
    </div>
  )
}

export default Card
