import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './qualification.style.scss'
import {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc} from '../../Validation/validation.compo';
import {data} from '../../data/data'
import { postData } from '../../services/postData';

const Quailfication = ({handleNavChange}) => {


    const [tenthPer,settenthPer] = useState("");
    const [twelvePer,setTwelvePer] = useState("");
    const [otherQualification,setotherQualification] = useState("");
    const [err,setErr] = useState("");
    
    
    const  HandlePrevClick = (e) =>{
    
      handleNavChange(e,6)
    }
    const  HandleSubmitClick = async(e) =>{
      const obj = {
        tenthPer,
        twelvePer,
        otherQualification
       }
       data.QualificationDetails = obj;
      await postData(data);
      //handleNavChange(e,6)
    }


    
    const HandleNextClick = (e) =>{


        if(!tenthPer && !twelvePer && !otherQualification)
        handleNavChange(e,8)

        const valtenthPer = ValidateNumbers(tenthPer)
        const valtwelvePer = ValidateNumbers(twelvePer)
        const valotherQualification = ValidateName(otherQualification)

        if(!valtenthPer || !valtwelvePer || !valotherQualification){
            setErr("Somthing is missing or input is Invalid!")
            return;
        }
                 
       const obj = {
        tenthPer,
        twelvePer,
        otherQualification
       }
       data.QualificationDetails = obj;
       console.log(data);

         handleNavChange(e,8);
    }
    
    
      return (
        <div className='Qualific'>
    
                <div className = "inp-part">
                <TextField id="outlined-basic" label="10th Percentage" variant="outlined"  onChange ={
             (e) => {settenthPer(e.target.value)}}/>
                </div>
             <div className = "inp-part">
             <TextField id="outlined-basic" label="12th Percentage" variant="outlined" onChange = {
             (e) => (setTwelvePer(e.target.value))}/>
             </div>
            
            <div className = "inp-part">
            <TextField id="outlined-basic" label="Other Qualifications" variant="outlined" onChange = {
             (e) => {setotherQualification(e.target.value)}}/>
            </div>
             

    
          <div style={{color:"red"}}>{err}</div>
            
          
          <div className = "inp-part">
          <Button variant="outlined" onClick={HandlePrevClick}>Previous</Button>
          <Button  className = "inp-btn"variant="outlined" onClick={HandleNextClick}>Next</Button>
          </div>
          <Button className = "inp-btn"variant="outlined" sx={{ minWidth:230 }} onClick={HandleSubmitClick}>submit</Button>
          
    
        </div>
      )
    }
    
    export default Quailfication


