import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {data} from '../../data/data'
import './yeildInfo.style.scss'
 const Yeildinfo = ({handleNavChange}) => {

const [landTitle,setLandTitle] = useState("")
const [year,setYear] = useState("");
const [cropName,setCropName] = useState("");
const [quintity ,setQuintity] = useState("");
const [unit,setUnit] = useState("");
const [totalPrice,setTotalprice] = useState("");
const [cropType, setCropType] = useState("");
const [harvestTech, setHarvestTech] = useState("");
const [err,setErr]=useState("")

const HandleNextclick = (e) => {
  
      if(!landTitle || !year || !cropName || !cropName || !quintity || !unit || !totalPrice || !cropType || !harvestTech){
         setErr("somthing is missing!")
         return;
      }
      const obj = {
        landTitle,year,cropName,quintity,unit,totalPrice,cropType,harvestTech
      }
      data.yeildInfo = obj;


      handleNavChange(e,4);
}


  return (
    <div className = "yeildInfo">


      <div className='mar space-bw'>
      <TextField id="outlined-basic" label="Land Title" variant="outlined" sx={{ minWidth:600 }} onChange = {
      (e) => setLandTitle(e.target.value)}/>
      <TextField id="outlined-basic" sx={{ minWidth:600 }} label="Year" variant="outlined" onChange = {
       (e) => {setYear(e.target.value)}}/>
      </div>

<div className='space-bw'>
<FormControl sx={{  minWidth: 190 }} size="large">
      <InputLabel id="demo-select-small">Crop Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        sx={{ minWidth:600 }}
        value={cropType}
        label="Age"
        onChange={(e)=>{
          setCropType(e.target.value);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Kharif</MenuItem>
        <MenuItem value={20}>Ravi</MenuItem>
      </Select>
    </FormControl>
    <TextField id="outlined-basic" sx={{ minWidth:600 }} label="CropName" variant="outlined" onChange = {
    (e) => {setCropName(e.target.value)}}/>
</div>

<div className='space-bw mar'>
<TextField id="outlined-basic" sx={{ minWidth:600 }} label="Quintity" variant="outlined" onChange = {
  (e) => setQuintity(e.target.value)}/>
<TextField id="outlined-basic" label="Unit" variant="outlined" sx={{ minWidth:600 }} onChange = {
   (e) => {setUnit(e.target.value)}}/>
</div>

<div className='space-bw mar'>
<TextField id="outlined-basic" sx={{ minWidth:600 }} label="Total Price" variant="outlined" onChange = {
  (e) => {setTotalprice(e.target.value)}}/>
<FormControl sx={{ minWidth: 600}} size="large">
      <InputLabel id="demo-select-small">Harvest Tech</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={harvestTech}
        label="Age"
        onChange={(e)=>{
          setHarvestTech(e.target.value)
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Machine Thresher</MenuItem>
      </Select>
    </FormControl>
</div>

 <div>
 <Button variant="outlined" sx={{ minWidth:600 }}>Upload Bill</Button>
 </div>

 <div>
 <div style={{color:"red"}} >{err}</div>
 <div className='space-bw mar'>
 <Button variant="outlined" sx={{ minWidth:600 }} >Previous</Button>
 <Button variant="outlined" sx={{ minWidth:600 }} onClick={HandleNextclick}>Next</Button>
 </div>
 </div>
    </div>
  )
}


export default Yeildinfo