import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {data} from '../../data/data'
import './landDetails.style.scss'
import { ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc } from '../../Validation/validation.compo';
import { useEffect } from 'react';

const LandDetail = ({handleNavChange}) => {


    const [landTitle,setlandTitle] = useState("");
    const [upin,setUpin] = useState("");
    const [LoanType,setLoanType] = useState("");
    const [bankName,setBankName]  = useState("");
    const [ifsc,setIfsc] = useState("");
    const [accountNumber,setAccountNumber] = useState("");
    const [loanSize,setLoanSize] =  useState("");
    const [perpose,setPerPose] = useState("");
    const [err,setErr]=useState("")
    
    const HandlePrevClick = (e) => {    
        handleNavChange(e,4);
    }
    
    const HandleNextClick = (e) => {
      const vallandTitle = ValidateName(landTitle)
      const valupin = ValidateNumbers(upin)
      // const valloanType = ValidateName(LoanType)
      const valbankname = ValidateName(bankName)
      const valifsc = ValidateIFSc(ifsc)
      const valaccountNumber = ValidateAccountNumber(accountNumber)
      const valloansize = ValidateNumbers(loanSize)
      const valperpose  =  ValidateName(perpose)
      
      
         if(vallandTitle || valupin  || valbankname || valifsc || valaccountNumber || valloansize || valperpose){
          setErr("somthing is missing or Input is Invalid!")
          return;
         }
         if(!landTitle || !upin || !LoanType || !bankName || !ifsc || !accountNumber || !loanSize || !perpose){
          setErr("somthing is missing!")
          return;
         }
       const obj = {
        landTitle,
        upin,
        LoanType,
        bankName,
        ifsc,
        accountNumber,
        loanSize,
        perpose
       }
       data.credit = obj;
       console.log(data);
         handleNavChange(e,6);
    }


//   const gatBy=(er)=>{
//       const arr = data.farmlocationDetails.filter((item)=>{item.landTitle == er });
// console.log(arr);
//     }
    
    
      return (
        <div className='LandDeatils'>
            <div className = "inp-part">
                
                {/* <TextField  id="outlined-basic" label="landTitle" variant="outlined"  onChange ={
             (e) => {setlandTitle(e.target.value)}}/> */}

<FormControl sx={{  minWidth: 230 }} size="large">
      <InputLabel id="demo-select-small">land Title</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        sx={{ minWidth:230 }}
        value={landTitle}
        label="Age"
        onChange={(e)=>{
          setlandTitle(e.target.value);
          
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          
         data && data.farmlocationDetails&&
          data.farmlocationDetails.map((farm)=>{ return(
            <MenuItem value={farm.landTitle}>{farm.landTitle}</MenuItem>)
          })
        }
        {/* <MenuItem value={"Ravi"}>Ravi</MenuItem> */}
      </Select>
    </FormControl>
            
             <TextField className = "inp-btn" id="outlined-basic" label="upin" variant="outlined" onChange = {
              (e) => (setUpin(e.target.value))}  />
            </div>
            
               <div class = "inp-part">
                    
    <FormControl sx={{ minWidth:230 }} >
      <InputLabel id="">Loan Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={LoanType}
        label=""
        onChange={(e)=>{
            setLoanType(e.target.value)
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"crop Loan"}>crop Loan</MenuItem>
        <MenuItem value={"Agriculture term Loan"}>Agriculture term Loan</MenuItem>
        <MenuItem value={"Solar pump set Loan"}>Solar pump set Loan</MenuItem>
        <MenuItem value={"Loan for Aplied Agricultural Activities"}>Loan for Aplied Agricultural Activities</MenuItem>
        <MenuItem value={"Farm Mechanisation Loan"}>Farm Mechanisation Loan</MenuItem>
        <MenuItem value={"Agricultural Gold Loan"}>Agricultural Gold Loan</MenuItem>
        <MenuItem value={"Forestry Loan"}>Forestry Loan</MenuItem>
        <MenuItem value={"Horficulture Loan"}>Horficulture Loan</MenuItem>
        <MenuItem value={"other types of Loan"}>other types of Loan</MenuItem>
      </Select>
    </FormControl>

          <TextField className = "inp-btn"id="outlined-basic" label="bankName" variant="outlined" onChange = {
            (e) => {setBankName(e.target.value)}}/>

               </div>
  

               <div className = "inp-part">
               <TextField id="outlined-basic" label="ifsc" variant="outlined" onChange = {
            (e) => {setIfsc(e.target.value)}}/>
            <TextField className = "inp-btn"id="outlined-basic" label="accountNumber" variant="outlined" onChange = {
            (e) => {setAccountNumber(e.target.value)}}/>
               </div>
          
            <div className = "inp-part">
            <TextField id="outlined-basic" label="loan Amount" variant="outlined" onChange = {
            (e) => {setLoanSize(e.target.value)}}/>
            <TextField className = "inp-btn" id="outlined-basic" label="purpose" variant="outlined" onChange = {
            (e) => {setPerPose(e.target.value)}}/>
            </div>
            
        
          
          <div style={{color:"red"}}>{err}</div>
    
            <div className = 'inp-part'></div>
          <Button variant="outlined" onClick={HandlePrevClick}>Previous</Button>
          <Button className = "inp-btn"variant="outlined" onClick={HandleNextClick}>Next</Button>
    
        </div>
      )
    }
    
    export default LandDetail