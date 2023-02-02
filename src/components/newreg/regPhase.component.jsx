import React from 'react'
import { Link } from "react-router-dom";
import './regphase.style.scss'

function RegPhase() {
  return (
    <div className='regPhase'>
      <div className='regPhaseNavBar'>
          <img src="adminLogo.svg"></img>
        <div className="title">Farmer360</div>
          <h2>Admin Id:200199</h2>
      </div>
      <div className="buttons">
        <div>
          <Link to="/regst" style={{color:"white",textDecoration:"none"}}>New regstration of farmer</Link></div>
        <div><Link to="/farmerProf" style={{color:"white",textDecoration:"none"}}>existing farmer</Link></div>
      </div>
    </div>
  )
}

export default RegPhase