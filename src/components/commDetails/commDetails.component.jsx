import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import './commdetails.style.scss'
import {data} from '../../data/data'
import firebase from "firebase/app";
import "firebase/auth";
import { sendFarmerId } from '../../services/postData';
import {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc} from '../../Validation/validation.compo';


const CommDetails = ({handleNavChange}) => {
const [mobileNumber,setMobileNumber] = useState("");
const [email,setEmail] = useState("");
const [otp1,setOtp1] = useState("");
const [otp2,setOtp2] = useState("");
const [err,setErr]=useState("")
const [viewOtpForm, setViewOtpForm] = useState(false);
const [user, setUser] = useState(false);
const firebaseConfig = {
    apiKey: "AIzaSyCtWdBTqRVCTQ_wKOS4PC43Az7uq6I8x_Y",
    authDomain: "hack-efb25.firebaseapp.com",
    projectId: "hack-efb25",
    storageBucket: "hack-efb25.appspot.com",
    messagingSenderId: "373619647485",
    appId: "1:373619647485:web:863708ec6e9ced5260ef94"
  };

//   useEffect(() => {
//      console.log("render")
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: function (response) {
//           console.log("Captcha Resolved");
//           this.onSignInSubmit();
//         },
//         defaultCountry: "IN",
//       }
//     );
//   }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  const loginSubmit = (e) => {
    e.preventDefault();

    const valMobileNumber =  ValidateNumbers(mobileNumber)
     if(!valMobileNumber && mobileNumber.length != 10){
      setErr("somthing is missing or Input is Invalid!")
      return;
     }

    let phone_number = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
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

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        //endFarmerId(data);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  const signOut = () => {
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

const HandlePrevClick = (e) =>{

     handleNavChange(e,0)
}

const HandleNextclick = (e) =>{
  const valMobileNumber =  ValidateNumbers(mobileNumber)
     if(!valMobileNumber && mobileNumber.length != 10){
      setErr("somthing is missing or Input is Invalid!")
      return;
     }
     const obj = {
mobileNumber,email
     }
     data.communicationDetails=obj;
     console.log(data)


     console.log(data)
     handleNavChange(e,2);

}

  return (
    <div className='commdetails'>
         <div className='inp-part'>
         <TextField id="outlined-basic" sx={{ minWidth:230 }} label="mobile number" variant="outlined" onChange = {
          (e)=>{ setMobileNumber(e.target.value)}}/>
         <TextField className = "inp-btn"id="outlined-basic" sx={{ minWidth:230 }}  label="Email" variant="outlined" onChange =
         {(e) =>{ setEmail(e.target.value)}}/>
         </div>


         <div className='inp-part'>
         <TextField id="outlined-basic" label="OTP" sx={{ minWidth:230 }}  variant="outlined" onChange = {
          (e)=>{setOtp1(e.target.value);
          }}/>
         <TextField className = "inp-btn"id="outlined-basic" label="OTP" sx={{ minWidth:230 }}  variant="outlined" onChange = {
          (e)=>{setOtp2(e.target.value);
          }}/>
         </div>
     
   

         <div className='inp-part'>
         <Button variant="outlined">Verify</Button>
         <Button className = "verifySecond"variant="outlined">Verify</Button>
         </div>
         <div style={{color:"red"}}>{err}</div>
         <div  className = "inp-part">
         <Button variant="outlined" onClick={HandlePrevClick}>Previous</Button>
         <Button className = "inp-btn" variant="outlined" onClick={HandleNextclick}>Next</Button>
         </div>
         
        
         

    </div>
  )
}

export default CommDetails