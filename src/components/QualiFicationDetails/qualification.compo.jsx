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

const Quailfication = ({handleNavChange}) => {


    const[qualification,setQualification] = useState("");
    const [err,setErr] = useState("");
    
    
    const  HandlePrevClick = (e) =>{
    
      handleNavChange(e,6)
    }
    
    const HandleNextClick = (e) =>{


          if(qualification == 0)
            handleNavChange(e,8)


       
                 
       const obj = {
        qualification,
       }
       data.QualificationDetails = obj;
         handleNavChange(e,8);
    }
    
    
      return (
        <div className='Qualific'>
    
                <div className = "inp-part">
                <FormControl sx={{  minWidth: 230 }} size="large">
      <InputLabel id="demo-select-small">Qulifications</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        sx={{ minWidth:230 }}
        value={qualification}
        label="Qulifications"
        onChange={(e)=>{
            setQualification(e.target.value);
        }}
      >
        <MenuItem value="0">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>7th Pass Or Less</MenuItem>
        <MenuItem value={2}>Between 8th and 9th Standard</MenuItem>
        <MenuItem value={3}>10th Pass And Above</MenuItem>
        <MenuItem value={4}>Graduate And Above</MenuItem>
      </Select>
    </FormControl>
    
                </div>

            
          
          <div className = "inp-part">
          <Button variant="outlined" onClick={HandlePrevClick}>Previous</Button>
          <Button  className = "inp-btn"variant="outlined" onClick={HandleNextClick}>Next</Button>
          </div>
          
    
        </div>
      )
    }
    
    export default Quailfication


