import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc} from '../../Validation/validation.compo';
import {data} from '../../data/data'
import { ToastContainer, toast } from 'react-toastify';

import {postData} from '../../services/postData'

const BusinessLinks = ({handleNavChange}) => {

     const[aggrilink,setAggriLink] = useState("")
      const[membershiplink,setMembershipLink] = useState("")
   
    const [err,setErr] = useState("");
    
    
    const  HandlePrevClick = (e) =>{
    
      handleNavChange(e,7)
    }
    
    const HandleSubmitClick =async (e) =>{
        toast("Wow so easy!");

        const obj = {
        aggrilink,
        membershiplink,
        }

        data.farmerlinkages = obj

        await postData(data);
         handleNavChange(e,8);
    }

    
      return (
        <div className='BuissnessLinks'>
    
               <div>Aggribusiness Linkages:</div>

                <div className = "inp-part">        
                <TextField id="outlined-basic" label="Link" variant="outlined"  onChange ={
                        (e) => {setAggriLink(e.target.value)}}/>             
                </div>

            

              <div>Corporative membership:</div>
              <div className = "inp-part">        
                <TextField id="outlined-basic" label="Link" variant="outlined"  onChange ={
                        (e) => {setMembershipLink(e.target.value)}}/>      
              </div>
          
          <div className = "inp-part">
          <Button variant="outlined" onClick={HandlePrevClick}>Previous</Button>
          <Button  className = "inp-btn"variant="outlined" onClick={HandleSubmitClick}>Submit</Button>
          </div>
          
    
        </div>
      )
    }
    
    export default BusinessLinks


