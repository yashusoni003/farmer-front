import React from 'react'
import { Link } from "react-router-dom";
import './regphase.style.scss'

function RegPhase() {
  return (
    <div className='regPhase'>
      <div className="title">Farmer360</div>
      <div className="buttons">
        <div>
          <Link to="/regst" style={{color:"white",textDecoration:"none"}}>New regstration of farmer</Link></div>
        <div>existing farmer</div>
      </div>
    </div>
  )
}

export default RegPhase