import { Fragment ,useEffect,useState} from "react"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { handleCancleChange } from "../../../services/updateFarmer";
import { handleEdit } from "../../../services/updateFarmer";
import { updateddata } from "../../../data/updatedData";
import {ValidateName,ValidateNumbers,ValidateDate} from '../../../Validation/validation.compo';
import '../insuranceInfoupdate/newInsurance.styles.scss'


const NewInsurenceInfo = ({fetchedFarmer}) =>{

     const[insuranceInfo,setinsuranceInfo] = useState({});


    const [newcompanyName,setnewcompanyName]  = useState("");
    const [newinsuranceType,setnewInsuranceType]  = useState("");
    const [newapplieddate,setnewAppliedDate]  = useState("");
    const [newcropSeason,setnewcropSeason]  = useState("");
    const [newcropName,setnewcropName]  = useState("");
    const [newfieldName,setnewfieldName]  = useState("");
    const [newupin,setnewUpin]  = useState("");
    const [newarea,setnewarea]  = useState("");
    const[newcertificateNumber,setnewcertificateNumber] = useState("")
    const[newreceiptNumber,setnewreceiptNumber] = useState("")



    useEffect(()=>{     
        
        if(fetchedFarmer && fetchedFarmer.insuranceInfo){

            setinsuranceInfo(fetchedFarmer.insuranceInfo);
            console.log('hey new',insuranceInfo)     
    
        }
    },[fetchedFarmer])

useEffect(()=>{
     console.log(insuranceInfo)
     updateddata.insuranceInfo = insuranceInfo
     console.log(updateddata)
},[insuranceInfo])
  const hadleInsuranceInfoSaveChange = (firstClass,secondClass,attribute,newValue,e,ValidateValue) =>{
        
    e.preventDefault();
    
   
    if(ValidateValue(newValue)){

        alert(`Please Enter Valid ${attribute}`)
        
    }
    else{
        setinsuranceInfo(prevState =>{
            return{...prevState,[attribute]:newValue}
        })

    }

     
      document.getElementsByClassName(firstClass)[0].style.display = 'flex';
      document.getElementsByClassName(secondClass)[0].style.display = 'none';    
     

  }
     
   if(JSON.stringify(insuranceInfo) === "{}"){
    return <div>Insurance Not Available!</div>
   }
    return(


   <Fragment>
         <div className="insuranceMainDiv">
 
           <h2>Insurance Details :-</h2>

<div className="infoBlock">
            <div className="componyNameContainer"> 
            <div><span>Company Name:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.companyName}</div>
            <button className="normalBt"type='button' onClick={() => handleEdit('componyNameContainer','componyNameInpContainer')}>Edit</button>
            </div>
            <div className="componyNameInpContainer"style={{display:"none"}}>
            <FormControl sx={{ minWidth:230 }} size="medium">
                <InputLabel id="demo-select-small">Company Name</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id=""
                      value={newcompanyName}
                      label="Company Name"
                      onChange={(e)=>{
                         setnewcompanyName(e.target.value)
                         }}>
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
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('componyNameContainer','componyNameInpContainer','companyName',newcompanyName,e,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('componyNameContainer','componyNameInpContainer')}>Cancle</button>
            </div>
</div>

<div className="infoBlock">
            <div className="isnsuranceTypeContainer">
            <div><span>Insurance Type:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.insuranceType}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('isnsuranceTypeContainer','insuranceTypeInpContainer')}>Edit</button>
            </div>
            <div className="insuranceTypeInpContainer"style={{display:"none"}}>
            <FormControl className = "inp-btn" sx={{ minWidth:230 }} size="small">
                <InputLabel id="demo-select-small">Insurance Type</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id=""
                        value={newinsuranceType}
                        label="Insurance Type"
                        onChange={(e)=>{
                            setnewInsuranceType(e.target.value)
                        }}>
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
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('isnsuranceTypeContainer','insuranceTypeInpContainer','insuranceType',newinsuranceType,e,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('isnsuranceTypeContainer','insuranceTypeInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="appliedDateContainer">
            <div><span>Applied Date:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.applieddate}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('appliedDateContainer','appliedDateInpContainer')}>Edit</button>
            </div>
            <div className="appliedDateInpContainer"style={{display:"none"}}>
            <FormControl sx={{ minWidth:100 }} size="small">
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <Stack spacing={3} >
                    <DesktopDatePicker
                     label="Date of Birth"
                     inputFormat="MM/DD/YYYY"
                     value={newapplieddate.toString()}
                     onChange={(value)=>{setnewAppliedDate(value)}}
                     renderInput={(params) => <TextField  {...params} />}
                     />  
                 </Stack>
                </LocalizationProvider>z
             </FormControl>
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('appliedDateContainer','appliedDateInpContainer','applieddate',new Date(newapplieddate).toLocaleDateString(),e,ValidateDate)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('appliedDateContainer','appliedDateInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="cropseasonContainer">
            <div><span>Crop Season:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.cropSeason}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('cropseasonContainer','cropseasonInpContainer')}>Edit</button>
            </div>
            <div className="cropseasonInpContainer"style={{display:"none"}}>
            <FormControl className = "inp-btn" sx={{ minWidth:230 }} size="small">
                <InputLabel id="demo-select-small">Crop Season</InputLabel>
                    <Select
                     labelId="demo-select-small"
                     id=""
                     value={newcropSeason}
                     label="Crop Season"
                     onChange={(e)=>{
                         setnewcropSeason(e.target.value)
                     }}>
                     <MenuItem value="Crop Season">
                      <em>None</em>
                     </MenuItem>
                     <MenuItem value={"Kharif"}>Kharif</MenuItem>
                     <MenuItem value={"Ravi"}>Ravi</MenuItem>
                    </Select>
              </FormControl>
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('cropseasonContainer','cropseasonInpContainer','cropSeason',newcropSeason,e,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('cropseasonContainer','cropseasonInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="cropNameContainer">
            <div><span>Crop Name:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.cropName}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('cropNameContainer','cropNameInpContainer')}>Edit</button>
            </div>
            <div className="cropNameInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Crop Name"type="text" onChange={(e) => setnewcropName(e.target.value)} />
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('cropNameContainer','cropNameInpContainer','cropName',newcropName,e,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('cropNameContainer','cropNameInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="fieldNameContainer">
            <div><span>Field Name:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.fieldName}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('fieldNameContainer','fieldNameInpContainer')}>Edit</button>
            </div>
            <div className="fieldNameInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Field Name" type="text" onChange={(e) => setnewfieldName(e.target.value)} />
             <button className="normalBt"  type="button"onClick={(e) => hadleInsuranceInfoSaveChange('fieldNameContainer','fieldNameInpContainer','fieldName',newfieldName,e,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('fieldNameContainer','fieldNameInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="upinNoContainer">
            <div><span>Upin:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.upin}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('upinNoContainer','upinNoInpContainer')}>Edit</button>
            </div>
            <div className="upinNoInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Upin"type="text" onChange={(e) => setnewUpin(e.target.value)} />
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('upinNoContainer','upinNoInpContainer','upin',newupin,e,ValidateNumbers)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('upinNoContainer','upinNoInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="areaContainer">
            <div><span>Area:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.area}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('areaContainer','areaInpContainer')}>Edit</button>
            </div>
            <div className="areaInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Area"type="text" onChange={(e) => setnewarea(e.target.value)} />
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('areaContainer','areaInpContainer','area',newarea,e,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('areaContainer','areaInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="certificateNoContainer">
            <div><span>Certificate No.:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.certificateNumber}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('certificateNoContainer','certificateNoInpContainer')}>Edit</button>
            </div>
            <div className="certificateNoInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Certificate No."type="text" onChange={(e) => setnewcertificateNumber(e.target.value)} />
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('certificateNoContainer','certificateNoInpContainer','certificateNumber',newcertificateNumber,e,ValidateNumbers)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('certificateNoContainer','certificateNoInpContainer')}>Cancle</button>
            </div>
</div>
<div className="infoBlock">
            <div className="recieptNoContainer">
            <div><span>Reciept No.:&nbsp;&nbsp;&nbsp;</span>{insuranceInfo.receiptNumber}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('recieptNoContainer','recieptNoInpContainer')}>Edit</button>
            </div>
            <div className="recieptNoInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Reciept No." type="text" onChange={(e) => setnewreceiptNumber(e.target.value)} />
             <button className="normalBt" type="button"onClick={(e) => hadleInsuranceInfoSaveChange('recieptNoContainer','recieptNoInpContainer','receiptNumber',newreceiptNumber,e,ValidateNumbers)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('recieptNoContainer','recieptNoInpContainer')}>Cancle</button>
            </div>
</div>


</div>
   </Fragment>



    )
}

export default NewInsurenceInfo;