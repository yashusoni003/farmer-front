import { Fragment, useEffect,useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { handleCancleChange } from "../../../services/updateFarmer";
import { handleEdit } from "../../../services/updateFarmer";
import { updateddata } from "../../../data/updatedData";
import {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum} from '../../../Validation/validation.compo';
import '../updateYieldInfo/newYeild.styles.scss'




const NewYieldInfo = ({fetchedFarmer}) =>{


     const[yeildInfoArray,setyeildInfoArray] = useState([]);

     const [newlandTitle,setnewLandTitle] = useState("")
     const [newyear,setnewYear] = useState("");
     const [newcropName,setnewCropName] = useState("");
     const [newquintity,setnewquintity]  = useState("")
     const [newunit,setnewUnit] = useState("");
     const [newtotalPrice,setnewtotalPrice] = useState("");
     const [newcropType, setnewCropType] = useState("");
     const [newharvestTech, setnewHarvestTech] = useState("");
    
     
     useEffect(()=>{
      
      if(fetchedFarmer && fetchedFarmer.yeildInfo){
    
          
           setyeildInfoArray([fetchedFarmer.yeildInfo]);
          
      }
     },[fetchedFarmer])

     useEffect(()=>{

      console.log('a joieye',yeildInfoArray[0])
       updateddata.yeildInfo = yeildInfoArray[0]

     },[yeildInfoArray[0]])


  const handleYeildInfoSaveChange = (firstClass,secondClass,newValue,attribute,index,ValidateValue) =>{
   

       if(ValidateValue(newValue)){

        alert(`Please Enter Valid ${attribute}`)
       }
    else{
        const updateObject = {...yeildInfoArray[0][index],[attribute]:newValue};
    
     // console.log('heh',creditArray[0][index])
    
        const newData = yeildInfoArray[0] 
        newData[index] = updateObject; 
        setyeildInfoArray([newData]);
    }
    

     // console.log(yeildInfoArray[0][0])

      document.getElementsByClassName(firstClass)[0].style.display = 'flex';
      document.getElementsByClassName(secondClass)[0].style.display = 'none';    

  }   


     if(yeildInfoArray.length === 0){
          return <div>Yeild Information Not Available!</div>
     }
        
        return(

      
        <Fragment>
            <div className="yieldInfoMainDiv">
                <h2>Yield Details :-</h2>
    { yeildInfoArray[0].map((yeildObj,index)=>{


      return(      
        <Fragment>
        <div className="infoBlock">
              <div className={`landTitleContainer${index}`}>
                 <div><span>Land Title:&nbsp;&nbsp;&nbsp;</span>{yeildObj.landTitle}</div>
                 <button className="normalBt" type='button' onClick={() => handleEdit(`landTitleContainer${index}`,`landTitleInpContainer${index}`)}>Edit</button>
              </div>
              <div className={`landTitleInpContainer${index}`}style={{display:"none"}}>
                 <input placeholder="Enter Land Title" type="text" onChange={(e) => setnewLandTitle(e.target.value)} />
                 <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`landTitleContainer${index}`,`landTitleInpContainer${index}`,newlandTitle,'landTitle',index,ValidateName)}>Save</button>
                 <button className="inverseBt" type="button" onClick={() => handleCancleChange(`landTitleContainer${index}`,`landTitleInpContainer${index}`)}>Cancle</button>
              </div>
        </div>
        <div className="infoBlock">
                <div className={`yearContainer${index}`}>
                    <div><span>Year:&nbsp;&nbsp;&nbsp;</span>{yeildObj.year}</div>
                    <button className="normalBt" type='button' onClick={() => handleEdit(`yearContainer${index}`,`yearInpContainer${index}`)}>Edit</button>
                </div>
                <div className={`yearInpContainer${index}`}style={{display:"none"}}>
                    <input placeholder="Enter Year" type="text" onChange={(e) => setnewYear(e.target.value)} />
                    <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`yearContainer${index}`,`yearInpContainer${index}`,newyear,'year',index,ValidateNumbers)}>Save</button>
                    <button className="inverseBt" type="button" onClick={() => handleCancleChange(`yearContainer${index}`,`yearInpContainer${index}`)}>Cancle</button>
                </div>
        </div>
        <div className="infoBlock">
                <div className={`cropNameContainer${index}`}>
                    <div><span>Crop Name:&nbsp;&nbsp;&nbsp;</span>{yeildObj.cropName}</div>
                    <button className="normalBt" type='button' onClick={() => handleEdit(`cropNameContainer${index}`,`cropNameInpContainer${index}`)}>Edit</button>
                </div>
                <div className={`cropNameInpContainer${index}`}style={{display:"none"}}>
                    <input placeholder="Enter Crop Name" type="text" onChange={(e) => setnewCropName(e.target.value)} />
                    <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`cropNameContainer${index}`,`cropNameInpContainer${index}`,newcropName,'cropName',index,ValidateName)}>Save</button>
                    <button className="inverseBt" type="button" onClick={() => handleCancleChange(`cropNameContainer${index}`,`cropNameInpContainer${index}`)}>Cancle</button>
                </div>
        </div>
        <div className="infoBlock">
                <div className={`quntityContainer${index}`}>
                    <div><span>Quintity:&nbsp;&nbsp;&nbsp;</span>{yeildObj.quintity}</div>
                    <button className="normalBt" type='button' onClick={() => handleEdit(`quntityContainer${index}`,`quntityInpContainer${index}`)}>Edit</button>
                </div>
                <div className={`quntityInpContainer${index}`}style={{display:"none"}}>
                    <input placeholder="Enter Quintity" type="text" onChange={(e) => setnewquintity(e.target.value)} />
                    <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`quntityContainer${index}`,`quntityInpContainer${index}`,newquintity,'quintity',index,ValidateNumbers)}>Save</button>
                    <button className="inverseBt" type="button" onClick={() => handleCancleChange(`quntityContainer${index}`,`quntityInpContainer${index}`)}>Cancle</button>
                </div>
        </div>
        <div className="infoBlock">
                <div className={`unitContainer${index}`}>
                    <div><span>Unit:&nbsp;&nbsp;&nbsp;</span>{yeildObj.unit}</div>
                    <button className="normalBt" type='button' onClick={() => handleEdit(`unitContainer${index}`,`unitInpContainer${index}`)}>Edit</button>
                </div>
                <div className={`unitInpContainer${index}`}style={{display:"none"}}>
                <FormControl className = "inp-btn"sx={{ minWidth: 100}} size="small">
      <InputLabel id="demo-select-small">unit</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={newunit}
        label="Age"
        onChange={(e)=>{
          setnewUnit(e.target.value)
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
                    <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`unitContainer${index}`,`unitInpContainer${index}`,newunit,'unit',index,ValidateSurveyNum)}>Save</button>
                    <button className="inverseBt" type="button" onClick={() => handleCancleChange(`unitContainer${index}`,`unitInpContainer${index}`)}>Cancle</button>
                </div>
        </div>
        <div className="infoBlock"> 
                <div className={`totalPriceContainer${index}`}>
                    <div><span>Total Price:&nbsp;&nbsp;&nbsp;</span>{yeildObj.totalPrice}</div>
                    <button className="normalBt" type='button' onClick={() => handleEdit(`totalPriceContainer${index}`,`totalPriceInpContainer${index}`)}>Edit</button>
                </div>
                <div className={`totalPriceInpContainer${index}`}style={{display:"none"}}>
                    <input placeholder="Enter Total Price" type="text" onChange={(e) => setnewtotalPrice(e.target.value)} />
                    <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`totalPriceContainer${index}`,`totalPriceInpContainer${index}`,newtotalPrice,'totalPrice',index,ValidateNumbers)}>Save</button>
                    <button className="inverseBt" type="button" onClick={() => handleCancleChange(`totalPriceContainer${index}`,`totalPriceInpContainer${index}`)}>Cancle</button>
                </div>
        </div>
        <div className="infoBlock">
                <div className={`cropTypeContainer${index}`}>
                    <div><span>Crop Type:&nbsp;&nbsp;&nbsp;</span>{yeildObj.cropType}</div>
                    <button className="normalBt" type='button' onClick={() => handleEdit(`cropTypeContainer${index}`,`cropTypeInpContainer${index}`)}>Edit</button>
                </div>
                <div className={`cropTypeInpContainer${index}`}style={{display:"none"}}>
                <FormControl sx={{  minWidth: 100 }} size="small">
      <InputLabel id="demo-select-small">Crop Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        sx={{ minWidth:230 }}
        value={newcropType}
        label="Age"
        onChange={(e)=>{
          setnewCropType(e.target.value);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Kharif"}>Kharif</MenuItem>
        <MenuItem value={"Ravi"}>Ravi</MenuItem>
      </Select>
                </FormControl>
                    <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`cropTypeContainer${index}`,`cropTypeInpContainer${index}`,newcropType,'cropType',index,ValidateName)}>Save</button>
                    <button className="inverseBt" type="button" onClick={() => handleCancleChange(`cropTypeContainer${index}`,`cropTypeInpContainer${index}`)}>Cancle</button>
                </div>
        </div>
        <div className="infoBlock">
                <div className={`harvestTechContainer${index}`}>
                    <div><span>Harvest Tech:&nbsp;&nbsp;&nbsp;</span>{yeildObj.harvestTech}</div>
                    <button className="normalBt" type='button' onClick={() => handleEdit(`harvestTechContainer${index}`,`harvestTechInpContainer${index}`)}>Edit</button>
                </div>
                <div className={`harvestTechInpContainer${index}`}style={{display:"none"}}>
                <FormControl className = "inp-btn"sx={{ minWidth: 100}} size="small">
      <InputLabel id="demo-select-small">Harvest Tech</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={newharvestTech}
        label="Age"
        onChange={(e)=>{
          setnewHarvestTech(e.target.value)
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Machine Thresher"}>Machine Thresher</MenuItem>
      </Select>
                </FormControl>
                    <button className="normalBt" type="button" id={yeildObj._id}onClick={(e) => handleYeildInfoSaveChange(`harvestTechContainer${index}`,`harvestTechInpContainer${index}`,newharvestTech,'harvestTech',index,ValidateName)}>Save</button>
                    <button className="inverseBt"type="button" onClick={() => handleCancleChange(`harvestTechContainer${index}`,`harvestTechInpContainer${index}`)}>Cancle</button>
                </div>
        </div>


        </Fragment>
      )     

      

     })


    
    }
    </div>
</Fragment>
            )


     

   
}


export default NewYieldInfo