import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import './commdetails.style.scss'
import {data} from '../../data/data'
const CommDetails = ({handleNavChange}) => {


const [mobileNumber,setMobileNumber] = useState("");
const [email,setEmail] = useState("");
const [otp1,setOtp1] = useState("");
const [otp2,setOtp2] = useState("");
const [err,setErr]=useState("")

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

  return (
    <div className='commdetails'>
         <div className='space-bw mar'>
         <TextField id="outlined-basic" sx={{ minWidth:450 }} label="mobile number" variant="outlined" onChange = {(e)=>{ setMobileNumber(e.target.value); 
         }}/>
         <TextField id="outlined-basic" sx={{ minWidth:450 }}  label="Email" variant="outlined" onChange =
         {(e) =>{ setEmail(e.target.value)
        } } />
         </div>


         <div className='space-bw'>
         <TextField id="outlined-basic" label="OTP" sx={{ minWidth:450 }}  variant="outlined" onChange = {
          (e)=>{setOtp1(e.target.value);
          }}/>
         <TextField id="outlined-basic" label="OTP" sx={{ minWidth:450 }}  variant="outlined" onChange = {
          (e)=>{setOtp2(e.target.value);
          }}/>
         </div>
     
   

         <div className='space-bw mar'>
         <Button variant="outlined">Verify</Button>
         <Button variant="outlined">Verify</Button>
         </div>
         <div style={{color:"red"}}>{err}</div>
         <Button variant="outlined" onClick={HandleNextclick}>next</Button>
        
         

    </div>
  )
}

export default CommDetails