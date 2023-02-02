import React,{Fragment, useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {data} from '../../data/data'
import './yeildInfo.style.scss'
import {ValidateName,ValidateNumbers} from '../../Validation/validation.compo';
 const Yeildinfo = ({handleNavChange}) => {

const[yeildArray,setYeildArray] = useState([]);  
const [landTitle,setLandTitle] = useState("")
const [year,setYear] = useState("");
const [cropName,setCropName] = useState("");
const [quintity ,setQuintity] = useState("");
const [unit,setUnit] = useState("");
const [totalPrice,setTotalprice] = useState("");
const [cropType, setCropType] = useState("");
const [harvestTech, setHarvestTech] = useState("");
const [err,setErr]=useState("")
const [limit,setLimit] = useState(2);
const [clicks,setClicks] = useState(1)

const handleAddYeild = () =>{

      if(clicks === limit){
        alert('Number Of Yeild To Add Has Been reached!')
      }else{

        const vallandTitle = ValidateName(landTitle)
        const valyear = ValidateNumbers(year)
          const valcropname = ValidateName(cropName)
          const valquintity = ValidateNumbers(quintity)
          const valtotalPrice= ValidateNumbers(totalPrice)
  
      if(valyear || valcropname || valquintity ||  valtotalPrice){
         setErr("somthing is missing or Input is Invalid!")
         return;
      }
      setClicks(clicks+1)
      const obj = {
        landTitle,year,cropName,quintity,unit,totalPrice,cropType,harvestTech
      }
       setErr("")
       setYeildArray([...yeildArray,obj]);


      }
}

const handleCancleYeild = () =>{

if(clicks === 1){
  return
}

  setClicks(clicks-1)
     
}

useEffect(()=>{  
  console.log(yeildArray);
  data.yeildInfo = yeildArray
  console.log(data)
},[yeildArray])

const HandlePrevClick  = (e) =>{
   handleNavChange(e,2)
}

const HandleNextclick = (e) => {
  console.log(landTitle);


  if(yeildArray.length >= clicks){
    handleNavChange(e,4);
    return;
  }

  const vallandTitle = ValidateName(landTitle)
  const valyear = ValidateNumbers(year)
  const valcropname = ValidateName(cropName)
  const valquintity = ValidateNumbers(quintity)
  // const valunit = ValidateName(unit)
  const valtotalPrice= ValidateNumbers(totalPrice)
  // const valcroptype = ValidateName(cropType)
  // const valharvestTech = ValidateName(harvestTech)


  
      if( valyear || valcropname || valquintity ||  valtotalPrice){
         setErr("somthing is missing or Input is Invalid!")
         return;
      }
     
      const obj = {
        landTitle,year,cropName,quintity,unit,totalPrice,cropType,harvestTech
      }

      setYeildArray([...yeildArray,obj])
      // data.yeildInfo = obj;

  //  console.log(data);
      handleNavChange(e,4);
}



  return (
    <Fragment>

      {
      
        [...Array(clicks)].map((_,index) =>{
          
          return(
              
              <div className = "yeildInfo">
                <h3>Yeild {index+1}</h3>
                      <div className='inp-part'>
                      <FormControl sx={{  minWidth: 230 }} size="large">
                      <InputLabel id="demo-select-small">land Title</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        sx={{ minWidth:230 }}
                        value={landTitle}
                        label="Age"
                        onChange={(e)=>{
                          setLandTitle(e.target.value);
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
                      {/* <TextField id="outlined-basic" label="Land Title" variant="outlined" sx={{ minWidth:230}} onChange = {
                      (e) => setLandTitle(e.target.value)}/> */}
                      <TextField className = "inp-btn"id="outlined-basic" sx={{ minWidth:230 }} label="Year" variant="outlined" onChange = {
                       (e) => {setYear(e.target.value)}}/>
                      </div>
                
                <div className='inp-part'>
                <FormControl sx={{  minWidth: 230 }} size="large">
                      <InputLabel id="demo-select-small">Crop Type</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        sx={{ minWidth:230 }}
                        value={cropType}
                        label="Age"
                        onChange={(e)=>{
                          setCropType(e.target.value);
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Kharif"}>Kharif</MenuItem>
                        <MenuItem value={"Ravi"}>Ravi</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField className = "inp-btn"id="outlined-basic" sx={{ minWidth:230 }} label="CropName" variant="outlined" onChange = {
                    (e) => {setCropName(e.target.value)}}/>
                </div>
                
                <div className='inp-part'>
                <TextField id="outlined-basic" sx={{ minWidth:230 }} label="Quintity" variant="outlined" onChange = {
                  (e) => setQuintity(e.target.value)}/>
                {/* <TextField className = "inp-btn"id="outlined-basic" label="Unit" variant="outlined" sx={{ minWidth:230 }} onChange = {
                   (e) => {setUnit(e.target.value)}}/> */}
                
                <FormControl className = "inp-btn"sx={{ minWidth: 230}} size="large">
                      <InputLabel id="demo-select-small">unit</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={unit}
                        label="Age"
                        onChange={(e)=>{
                          setUnit(e.target.value)
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"KG"}>KG</MenuItem>
                        <MenuItem value={"20KG"}>20KG</MenuItem>
                        <MenuItem value={"100KG"}>100KG</MenuItem>
                      </Select>
                    </FormControl>
                </div>
                
                
                <div className='inp-part'>
                <TextField id="outlined-basic" sx={{ minWidth:230 }} label="Total Price" variant="outlined" onChange = {
                  (e) => {setTotalprice(e.target.value)}}/>
                <FormControl className = "inp-btn"sx={{ minWidth: 230}} size="large">
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
                        <MenuItem value={"Machine Thresher"}>Machine Thresher</MenuItem>
                      </Select>
                    </FormControl>
                </div>
                
                
                
                 <div>
                 <div style={{color:"red"}} >{err}</div>
                 </div>
              </div>
          ) 
        })
        
        
      }
      <div style={{display:"flex",columnGap:"50px"}}>
        <Button  variant="outlined" sx={{ minWidth:230 }} onClick={handleAddYeild}>Add Another Yeild</Button>
       {clicks>1 && <Button variant="outlined" sx={{ minWidth:230 }} onClick={handleCancleYeild}>Cancle</Button>}
      </div>
      <div className='inp-part'>
          <Button variant="outlined" sx={{ minWidth:230 }} onClick={HandlePrevClick}>Previous</Button>
          <Button className = "inp-btn"variant="outlined" sx={{ minWidth:230 }} onClick={HandleNextclick}>Next</Button>
      </div>

    </Fragment>

    
  )


}


export default Yeildinfo