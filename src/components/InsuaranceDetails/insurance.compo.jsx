import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button';
import {data} from '../../data/data'
import {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc} from '../../Validation/validation.compo';
import './insurance.style.scss'


const InsuranceInfo = ({handleNavChange}) => {
    const [companyName,setcompanyName]  = useState("");
    const [insuranceType,setInsuranceType]  = useState("");
    const [applieddate,setAppliedDate]  = useState("");
    const [cropSeason,setcropSeason]  = useState("");
    const [cropName,setcropName]  = useState("");
    const [fieldName,setfieldName]  = useState("");
    const [upin,setUpin]  = useState("");
    const [area,setarea]  = useState("");
    const[certificateNumber,setcertificateNumber] = useState("")
    const[receiptNumber,setreceiptNumber] = useState("")
    const [recieveInfo,setrecievInfo] = useState("")
    const [receivedDate,setreceivedDate] = useState("")
    const [err,setErr]=useState("")


    const HandlePrevClick = (e) =>{
        handleNavChange(e,5)
    }

    const HandleNextClick=(e)=>{

         const valcompanyName = ValidateName(companyName)
         const valinsuranceType = ValidateName(insuranceType)
         const valcropSeason =    ValidateName(cropSeason)
         const valcropName = ValidateName(cropName)
         const valfieldName = ValidateName(fieldName)
         const valupin = ValidateUpin(upin)
         const valarea = ValidateNumbers(area)
         const valcertificateNumber = ValidateSurveyNum(certificateNumber)
         const valreceiptNumber = ValidateSurveyNum(receiptNumber)


    //    if(!companyName && !insuranceType && !cropSeason && !cropName && !fieldName && !upin && !area && !certificateNumber && !receiptNumber)  
    //  else  if(!valcompanyName || !applieddate || !valinsuranceType || !valcropSeason  || !valcropName || !valfieldName || !valupin || !valarea || !valcertificateNumber || !valreceiptNumber ){
    //          setErr("somthing is missing or Input is Invalid!");
    //            return;
    //  }
     const obj = {
        companyName,
        insuranceType,
        applieddate:`${applieddate.$D}/${applieddate.$M+1}/${applieddate.$y}`,
        receivedDate:`${receivedDate.$D}/${receivedDate.$M+1}/${receivedDate.$y}`,
        cropSeason,
        cropName,
        fieldName,
        upin,
        area,
        certificateNumber,
        receiptNumber,
     }
     data.InsuranceInfo=obj;
     console.log(data);
      handleNavChange(e,7);
    } 
  return (
    <div className='insuinfo'>
<div className='inp-part'>
<FormControl sx={{ minWidth:230 }} size="large">
      <InputLabel id="demo-select-small">Company Name</InputLabel>
      <Select
        labelId="demo-select-small"
        id=""
        value={companyName}
        label="Company Name"
        onChange={(e)=>{
            setcompanyName(e.target.value)
        }}
      >
        <MenuItem value="Company Name">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"HDFC Bank"}>HDFC Bank</MenuItem>
        <MenuItem value={"SBI Bank"}>SBI Bank</MenuItem>
        <MenuItem value={"Federal Bank"}>Federal Bank</MenuItem>
        <MenuItem value={"Lic Bank"}>Lic Bank</MenuItem>
        <MenuItem value={"Other Company"}>Other Company</MenuItem>
      </Select>

    </FormControl>
    <FormControl className = "inp-btn" sx={{ minWidth:230 }} size="large">
      <InputLabel id="demo-select-small">Insurance Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id=""
        value={insuranceType}
        label="Insurance Type"
        onChange={(e)=>{
            setInsuranceType(e.target.value)
        }}
      >
        <MenuItem value="Insurance Type">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Pradhan Matri fasal Bima Yojana"}>Pradhan Matri fasal Bima Yojana</MenuItem>
        <MenuItem value={"Restructured weather based crop insurance scheme (RWBCIS)"}>Restructured weather based crop insurance scheme (RWBCIS)</MenuItem>
        <MenuItem value={"Bangla Shasya Bima Schema"}>Bangla Shasya Bima Schema</MenuItem>
        <MenuItem value={"Coconut Palm Insurance Scheme"}>Coconut Palm Insurance Scheme</MenuItem>
        <MenuItem value={"Other Crop Insurance"}>Other Crop Insurance</MenuItem>
      </Select>

    </FormControl>
    
      </div>  

      <div className = "inp-part">
      <FormControl sx={{ minWidth:230 }} size="large">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} >
      <DesktopDatePicker
          label="Applied Date"
          inputFormat="MM/DD/YYYY"
          value={applieddate}
          onChange={(value)=>{setAppliedDate(value)}}
          renderInput={(params) => <TextField  {...params} />}
        />
     
      </Stack>
    </LocalizationProvider>
    </FormControl>
    <FormControl className = "inp-btn" sx={{ minWidth:230 }} size="large">
      <InputLabel id="demo-select-small">Crop Season</InputLabel>
      <Select
        labelId="demo-select-small"
        id=""
        value={cropSeason}
        label="Crop Season"
        onChange={(e)=>{
            setcropSeason(e.target.value)
        }}
      >
        <MenuItem value="Crop Season">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Kharif"}>Kharif</MenuItem>
        <MenuItem value={"Ravi"}>Ravi</MenuItem>
      </Select>
    </FormControl>
      </div>
         

<div className='inp-part'>
<TextField id="outlined-basic" sx={{ minWidth:230 }}  label="crop Name" variant="outlined" onChange={(e)=>{setcropName(e.target.value);}}/>
<TextField className = "inp-btn" id="outlined-basic" sx={{ minWidth:230 }}  label="fieldName" variant="outlined" onChange={(e)=>{setfieldName(e.target.value);}}/>
</div>



<div className='inp-part'>
<TextField id="outlined-basic" sx={{ minWidth:230 }}  label="Upin" variant="outlined" onChange={(e)=>{setUpin(e.target.value);}}/>
<TextField className ="inp-btn" id="outlined-basic" sx={{ minWidth:230 }} label="area" variant="outlined" onChange={(e)=>{setarea(e.target.value);}}/>
</div>
<div className='inp-part'>
<TextField id="outlined-basic" sx={{ minWidth:230 }} label="certificate number" variant="outlined" onChange={(e)=>{setcertificateNumber(e.target.value);}}/>
<TextField className = "inp-btn"id="outlined-basic" sx={{ minWidth:230 }} label="receipt Number" variant="outlined" onChange={(e)=>{setreceiptNumber(e.target.value);}}/>
</div>
   

  <div className = "inp-part">
  <FormControl sx={{ minWidth:230 }} size="large">
      <InputLabel id="demo-select-small">Insurance Status</InputLabel>
      <Select
        labelId="demo-select-small"
        id=""
        value={recieveInfo}
        label="Insurance Status"
        onChange={(e)=>{
            setrecievInfo(e.target.value)
        }}
      >
        <MenuItem value="Recieved or Not">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Yes"}>Yes</MenuItem>
        <MenuItem value={"No"}>No</MenuItem>
      </Select>

    </FormControl>
    <FormControl className = "inp-btn" sx={{ minWidth:230 }} size="large">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} >
      <DesktopDatePicker
          label="Received Date"
          inputFormat="MM/DD/YYYY"
          value={receivedDate}
          onChange={(value)=>{setreceivedDate(value)}}
          renderInput={(params) => <TextField  {...params} />}
        />
     
      </Stack>
    </LocalizationProvider>
    </FormControl>

  </div>



<div style={{color:"red"}}>{err}</div>

<div className = "inp-part">
<Button variant="outlined" onClick={HandlePrevClick} >Previous</Button>
<Button className = "inp-btn" variant="outlined" onClick={HandleNextClick} >Next</Button>
</div>

    </div>

  )
}

export default InsuranceInfo