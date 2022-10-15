import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import {data} from '../../data/data'
import firebase from "firebase/app";
import { Link } from "react-router-dom";

import "firebase/auth";


const AuthFarmer = ({handleNavChange}) => {
const [mobileNumber,setMobileNumber] = useState("");
const [email,setEmail] = useState("");
const [otp1,setOtp1] = useState("");
const [otp2,setOtp2] = useState("");
const [otpValid,setotpValid] = useState(false);
const [err,setErr]=useState("")
const [viewOtpForm, setViewOtpForm] = useState(false);

const [user, setUser] = useState(false);


const firebaseConfig = {
  apiKey: "AIzaSyA-zrxqcao06JDlvaKDS5jrDmGNv9Zx3LY",
  authDomain: "hack-12.firebaseapp.com",
  projectId: "hack-12",
  storageBucket: "hack-12.appspot.com",
  messagingSenderId: "552503882953",
  appId: "1:552503882953:web:b22aa6e446f4ad9a580918"
};

useEffect(() => {
  if(!window.recaptchaVerifier){
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: function (response) {
        console.log("Captcha Resolved");
        this.onSignInSubmit();
      },
      defaultCountry: "IN",
    }
  );}
}, []);


// setTimeout(function() {
  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //   "recaptcha-container",
  //   {
  //     size: "invisible",
  //     callback: function (response) {
  //       console.log("Captcha Resolved");
  //       this.onSignInSubmit();
  //     },
  //     defaultCountry: "IN",
  //   }
  // );



// },2000);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     setUser(user);
//   }
// });

const loginSubmit = (e) => {
  e.preventDefault();
  console.log(window.recaptchaVerifier)

  let phone_number = "+91" + mobileNumber;
  let appVerifier = window.recaptchaVerifier;

  auth
    .signInWithPhoneNumber(phone_number, window.recaptchaVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      console.log("otp sent");
      setViewOtpForm(true);
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      alert(error.message);
    });
};

const otpSubmit = (e) => {
  e.preventDefault();

  let opt_number = otp1;

  window.confirmationResult
    .confirm(opt_number)
    .then((confirmationResult) => {
      console.log(confirmationResult);
      console.log("success");
      setotpValid(true);
      // window.open("/", "_self");
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      alert(error.message);
    });
};

const signOut = (e) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.open("/signin", "_self");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

const HandleNextclick = (e) =>{

  if(!mobileNumber){
   setErr("somthing is missing!")
   return;
  }
  const obj = {
mobileNumber,
  }
  data.communicationDetails=obj;
  console.log(data)
  handleNavChange(e,2);

}



// const HandlePrevClick = (e) =>{

//      handleNavChange(e,0)
// }

// const HandleNextclick = (e) =>{

//      if(!mobileNumber){
//       setErr("somthing is missing!")
//       return;
//      }
//      const obj = {
// mobileNumber,
//      }
//      data.communicationDetails=obj;
//      console.log(data)
//      handleNavChange(e,2);

// }


  return (
    <div className='commdetails'>
      <div id="recaptcha-container"></div>
         <div className='inp-part'>
         <TextField id="outlined-basic" sx={{ minWidth:230 }} label="mobile number" variant="outlined" onChange = {
          (e)=>{ setMobileNumber(e.target.value)}}/>
         <TextField className = "inp-btn"id="outlined-basic" sx={{ minWidth:230 }}  label="Email" variant="outlined" onChange =
         {(e) =>{ setEmail(e.target.value)}}/>
         </div>

         <Button variant="outlined" onClick={(e)=>{loginSubmit(e)}}>sendOTP</Button>


<div  hidden={!viewOtpForm}>


         <div className='inp-part'>
         <TextField id="outlined-basic" label="OTP" sx={{ minWidth:230 }}  variant="outlined" onChange = {
          (e)=>{setOtp1(e.target.value);
          }}/>
         <TextField className = "inp-btn"id="outlined-basic" label="OTP" sx={{ minWidth:230 }}  variant="outlined" onChange = {
          (e)=>{setOtp2(e.target.value);
          }}/>
         </div>
  
         <div className='inp-part'>
         <Button variant="outlined" onClick={(e)=>{otpSubmit(e)}}>Verify</Button>
         <Button className = "verifySecond"variant="outlined">Verify</Button>
         </div>
         </div>


         <div style={{color:"red"}}>{err}</div>
         <div  className = "inp-part"  hidden={!otpValid}>
         <div >
          
         <Button className = "inp-btn" variant="outlined" onClick={(e)=>{HandleNextclick(e)}} >
        Next     
          </Button>
         </div>

         </div>
         
        

    </div>
  )
}

export default AuthFarmer;