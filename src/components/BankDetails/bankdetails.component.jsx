import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {data} from '../../data/data'

export const Bankdetails = (handleNavChange) => {

const [bankName, setBankName] = useState("");
const [branchName ,setBranchName]  =  useState("");    
const [district ,setDistrict]  =  useState("");    
const [taluko,setTaluko]  =  useState("");    
const [accountNumber ,setAccountNumber]  =  useState("");    
const [ifcs ,setIfsc]  =  useState("");    
const[err ,setErr] = useState("");


const HandleNextClick = (e) =>{

     if(!bankName || !branchName || !district || !taluko || !accountNumber || !ifcs){
            
      setErr("somthing is missing!")
      return;
     }

     const obj = {
      bankName,branchName,district,taluko,accountNumber,ifcs
     }
     data.bankdetails = obj;
     console.log(data);

    //  handleNavChange(e,5);

}
  return (
    <div className='Bankdetails'>
        
        
        <div className='mar space-bw'>
      <TextField id="outlined-basic" label="Bank Name" variant="outlined" sx={{ minWidth:600 }} onChange = {
      (e) => {setBankName(e.target.value)}}/>
       
      <TextField id="outlined-basic" sx={{ minWidth:600 }} label="Branch Name" variant="outlined" onChange = {
      (e) => {setBranchName(e.target.value)}}
       />
        </div>
        
        <div className='mar space-bw'>
      <TextField id="outlined-basic" label="District" variant="outlined" sx={{ minWidth:600 }} onChange = {
        (e) => {setDistrict(e.target.value)}
      } />
      <TextField id="outlined-basic" sx={{ minWidth:600 }} label="Taluko" variant="outlined" onChange = {
      (e) => {setTaluko(e.target.value)}}/>
        </div>

        <div className='mar space-bw'>
      <TextField id="outlined-basic" sx={{ minWidth:600 }} label="Account Number" variant="outlined" onChange = { (e) => {setAccountNumber(e.target.value)}}/>
        
      <TextField id="outlined-basic" sx={{ minWidth:600 }} label="IFSC Code" variant="outlined" onChange = {
      (e) => {setIfsc(e.target.value)}}/>
        </div>
        
    <div>
 <div style={{color:"red"}}>{err}</div>
<div className='mar space-bw'>

    <Button variant="outlined" sx={{ minWidth:600 }}>Previous</Button>
 <Button variant="outlined" sx={{ minWidth:600 }} onClick={HandleNextClick}>Next</Button>
</div>
    </div>
         </div>
  )
}

export default Bankdetails