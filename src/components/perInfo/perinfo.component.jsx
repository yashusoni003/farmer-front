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
import './perInfo.style.scss'


const PerInfo = ({handleNavChange}) => {
    const [firstName,setFirstName]  = useState("");
    const [lastName,setLastName]  = useState("");
    const [middleName,setMiddleName]  = useState("");
    const [adhar,setAdhar]  = useState("");
    const [gender,setGender]  = useState("");
    const [distict,setDistict]  = useState("");
    const [taluko,setTaluko]  = useState("");
    const [village,setVillage]  = useState("");
    const[homeAddrs,setHomeAddrs] = useState("")
    const[dob,setDOB] = useState()
    const [err,setErr]=useState("")

    const HandleNextClick=(e)=>{
     if(!firstName || !lastName || !middleName || !adhar || !gender || !distict || !taluko || !village || !homeAddrs || !dob ){
      setErr("something is missing");
      return;
     }
     const obj = {
      firstName,
      middleName,
      lastName,
      adhar,
      gender,
      distict,
      taluko,
      village,
      homeAddrs,
      dob:`${dob.$D}/${dob.$M+1}/${dob.$y}`
     }
     data.personalInfo=obj;
     console.log(data);
      handleNavChange(e,1);
    } 
  return (
    <div className='perinfo'>
<div className='space-bw mar'>
         <TextField sx={{ minWidth:300 }} id="outlined-basic" label="First Name" variant="outlined"  onChange={(e)=>{
               setFirstName(e.target.value);
         }}/>
         <TextField sx={{ minWidth:300 }} id="outlined-basic" label="Middle Name" variant="outlined" onChange={(e)=>{
               setMiddleName(e.target.value);
         }}/>
         <TextField sx={{ minWidth:300 }} id="outlined-basic" label="Last Name" variant="outlined" 
         onChange={(e)=>{
          setLastName(e.target.value);
    }}/>
</div>
<div className='space-bw'>
<TextField id="outlined-basic" sx={{ minWidth:300 }}  label="District" variant="outlined" onChange={(e)=>{setDistict(e.target.value);}}/>
<TextField id="outlined-basic" sx={{ minWidth:300 }}  label="Taluko" variant="outlined" onChange={(e)=>{setTaluko(e.target.value);}}/>
<TextField id="outlined-basic" sx={{ minWidth:300 }}  label="Village" variant="outlined" onChange={(e)=>{setVillage(e.target.value);}}/>
</div>
<div className='mar space-bw'>
         <FormControl sx={{ minWidth:400 }} size="large">
      <InputLabel id="demo-select-small">Gender</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={gender}
        label="Age"
        onChange={(e)=>{
           setGender(e.target.value);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        <MenuItem value={"others"}>Others</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ minWidth:400 }} size="large">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} >
      <DesktopDatePicker
          label="Date of Birth"
          inputFormat="MM/DD/YYYY"
          value={dob}
          onChange={(value)=>{setDOB(value)}}
          renderInput={(params) => <TextField  {...params} />}
        />
     
      </Stack>
    </LocalizationProvider>
    </FormControl>
</div>
<div className='mar'>
         <TextField id="outlined-basic" sx={{ minWidth:600 }} label="Aadhar card" variant="outlined" onChange={(e)=>{setAdhar(e.target.value);}}/>
</div>

<div className='mar'>
<TextField sx={{ minWidth:600 }} id="outlined-basic" label="Home Address" variant="outlined" onChange={(e)=>{setHomeAddrs(e.target.value);}}/>
</div>
<div style={{color:"red"}}>{err}</div>
<Button variant="outlined" onClick={HandleNextClick} >Next</Button>
    </div>

  )
}

export default PerInfo



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
