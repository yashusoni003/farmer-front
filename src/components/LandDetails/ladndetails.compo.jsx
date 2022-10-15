import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {data} from '../../data/data'
import './landDetails.style.scss'


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
         handleNavChange(e,6);
    }
    
    
      return (
        <div className='LandDeatils'>
    
          

            <div className = "inp-part">
                
                <TextField  id="outlined-basic" label="landTitle" variant="outlined"  onChange ={
             (e) => {setlandTitle(e.target.value)}}/>
            
             <TextField className = "inp-btn" id="outlined-basic" label="upin" variant="outlined" onChange = {
              (e) => (setUpin(e.target.value))}/>
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
        <MenuItem value={1}>crop Loan</MenuItem>
        <MenuItem value={2}>Agriculture term Loan</MenuItem>
        <MenuItem value={3}>Solar pump set Loan</MenuItem>
        <MenuItem value={4}>Loan for Aplied Agricultural Activities</MenuItem>
        <MenuItem value={5}>Farm Mechanisation Loan</MenuItem>
        <MenuItem value={6}>Agricultural Gold Loan</MenuItem>
        <MenuItem value={7}>Forestry Loan</MenuItem>
        <MenuItem value={8}>Horficulture Loan</MenuItem>
        <MenuItem value={9}>other types of Loan</MenuItem>
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
            <TextField id="outlined-basic" label="loanSize" variant="outlined" onChange = {
            (e) => {setLoanSize(e.target.value)}}/>
            <TextField className = "inp-btn" id="outlined-basic" label="perpose" variant="outlined" onChange = {
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