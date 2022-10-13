import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import {data} from '../../data/data'
import './farmLocation.style.scss'

const Farmlocdetail = ({handleNavChange}) => {


const [district,setDistrict] = useState("");
const [taluka,setTaluka] = useState("");
const [village,setVillage] = useState("");
const [surveyNum,setSurveyNum]  = useState("");
const [upin,setUpin] = useState("");
const [err,setErr]=useState("")


const HandleNextClick = (e) =>{
  
     if(!district || !taluka || !village || !surveyNum ){
      setErr("somthing is missing!")
      return;
     }
   const obj = {
    district,
    taluka,
    village,
    surveyNum,
    upin
   }
   data.farmlocationDetails = obj;
     handleNavChange(e,3);
}


  return (
    <div className='Farmloc'>

      <div className='space-bw mar'>
         <TextField id="outlined-basic" label="District" variant="outlined"  onChange ={
         (e) => {setDistrict(e.target.value)}}/>
         <TextField id="outlined-basic" label="Taluka" variant="outlined" onChange = {
         (e) => (setTaluka(e.target.value))}/>
         <TextField id="outlined-basic" label="Village" variant="outlined" onChange = {
         (e) => {setVillage(e.target.value)}}/>
         <TextField id="outlined-basic" label="Survey Number" variant="outlined" onChange = {(e) => {setSurveyNum(e.target.value)}}/>
      </div>
      <h1>OR</h1>
      <div className='mar'>
      <TextField id="outlined-basic" label="Upin Number" variant="outlined" onChange = {
      (e) => {setUpin(e.target.value)}}/>
      <Button variant="outlined" className='view-btn'>View Details</Button>

      <div style={{color:"red"}}>{err}</div>
        
      </div>
      <Button variant="outlined" onClick={HandleNextClick}>Next</Button>

    </div>
  )
}

export default Farmlocdetail