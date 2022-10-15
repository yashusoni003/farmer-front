import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './bankDetails.style.scss'
import {data} from '../../data/data'
import {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc} from '../../Validation/validation.compo';

import { postData } from '../../services/postData';

 const Bankdetails = ({handleNavChange}) => {

const [bankName, setBankName] = useState("");
const [branchName ,setBranchName]  =  useState("");    
const [district ,setDistrict]  =  useState("");    
const [taluko,setTaluko]  =  useState("");    
const [accountNumber ,setAccountNumber]  =  useState("");    
const [ifcs ,setIfsc]  =  useState("");    
const[err ,setErr] = useState("");


const HandlePrevclick = (e) => {    
  handleNavChange(e,3);
}

const handleSubmit=async(e)=>{
  const obj = {
    bankName,branchName,district,taluko,accountNumber,ifcs
   }
   data.bankdetails = obj;
   console.log(data);
     await postData(data);
}


const HandleNextclick = (e) => {
console.log("click")
  const valBankName = ValidateName(bankName);
  const  valBranchName = ValidateName(branchName);
  const  valdistrict =   ValidateName(district);
  const valtaluko   =   ValidateName(taluko);
  const valaccountNumber = ValidateAccountNumber(accountNumber);
  const valifcs = ValidateIFSc(ifcs);

  if( !valBankName|| !valBranchName||  !valdistrict ||  !valtaluko   || !valaccountNumber  || !valifcs ){        
    setErr("somthing is missing or Input is Invalid!")
    return;
    }

     const obj = {
      bankName,branchName,district,taluko,accountNumber,ifcs
     }
     data.bankdetails = obj;
     console.log(data);

     handleNavChange(e,5);

}
  return (
    <div className='Bankdetails'>
        
        
        <div className ='inp-part'>
      <TextField id="outlined-basic" label="Bank Name" variant="outlined" sx={{ minWidth:230 }} onChange = {
      (e) => {setBankName(e.target.value)}}/>
       
      <TextField className = "inp-btn" id="outlined-basic" sx={{ minWidth:230 }} label="Branch Name" variant="outlined" onChange = {
      (e) => {setBranchName(e.target.value)}}
       />
        </div>
        
        <div className='inp-part'>
      <TextField id="outlined-basic" label="District" variant="outlined" sx={{ minWidth:230 }} onChange = {
        (e) => {setDistrict(e.target.value)}
      } />
      <TextField className = "inp-btn"id="outlined-basic" sx={{ minWidth:230 }} label="Taluko" variant="outlined" onChange = {
      (e) => {setTaluko(e.target.value)}}/>
        </div>

        <div className='inp-part'>
      <TextField id="outlined-basic" sx={{ minWidth:230 }} label="Account Number" variant="outlined" onChange = { (e) => {setAccountNumber(e.target.value)}}/>
        
      <TextField className = "inp-btn"id="outlined-basic" sx={{ minWidth:230 }} label="IFSC Code" variant="outlined" onChange = {
      (e) => {setIfsc(e.target.value)}}/>
        </div>
        
    <div>
 <div style={{color:"red"}}>{err}</div>
<div className='inp-part'>
    <Button variant="outlined" sx={{ minWidth:230 }} onClick={HandlePrevclick}>Previous</Button>
   <Button className = "inp-btn"variant="outlined" sx={{ minWidth:230 }} onClick={HandleNextclick}>Next</Button>
   <Button className = "inp-btn"variant="outlined" sx={{ minWidth:230 }} onClick={handleSubmit}>submit</Button>
</div>
    </div>
         </div>
  )
}

export default Bankdetails