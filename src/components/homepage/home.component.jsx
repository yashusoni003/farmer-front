import React from 'react'
import { Link } from "react-router-dom";
import './home.style.scss'
// import FontAwesomeIcon from 'https://kit.fontawesome.com/4d5b100cde.js'

const Home = () => {
    const handleClick=()=>{
     
    }
    return (
        <div className='homepage'>
            <div className="mainTitle">
                welcome to 
                <span> Farmer360</span>
            </div>
            <div className="logo">
                 <img className="mainLogo" src = "Asset 2.png"></img>
            </div>
            <div className="input-form">
                <div className="userId">
                    <div className="user-icon">
                      <img  className = "user-logo"src = 'user-icon.png' alt="No Photo!"></img>
                    </div>
                    <div className="user-inp">
                          <div className="admin">admin</div>
                          <input type="text" name="" id="" autoFocus/>
                    </div>
                </div>
                <div className="password">
                    <div className="pass-icon">
                          <img  className="pass-logo" src="pass-icon.png" alt="No Photo!"></img>
                    </div>
                    <div className="pass-inp">
                          <div className="password-inp">password</div>
                          <input type="text" name="" id="" />
                    </div>
                </div>


                <div className="login-btn" onClick={handleClick}>
                <Link to="/regphase" className="login-btn">login</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;




