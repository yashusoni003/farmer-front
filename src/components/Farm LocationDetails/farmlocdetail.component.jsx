import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { data } from '../../data/data'
import './farmLocation.style.scss'
import {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc} from '../../Validation/validation.compo';



export const FieldBox = ({ farm }) => {
  return (
    <>
      <div className="farm-container">
        <div className="fieldImg"><img src="https://i.ibb.co/GdKRHGT/asf2.png" alt="" srcset="" /></div>
        <div className="fieldLoc">
          <div>district:<span>{farm?.district}</span></div>
          <div>taluka:<span>{farm.taluka}</span></div>
          <div>village:<span>{farm.village}</span></div>
        </div>
        <div className="fieldLoc">
          <div>owner:<span>{farm.owner}</span></div>
          <div>landTitle: <span>{farm.landTitle}</span></div>
          <div>UPIN:<span>{farm.UPIN}</span></div>
        </div>
        <div className="fieldLoc">
          <div>totalArea:<span>{farm.totalArea}</span></div>
          <div>landUse:<span>{farm.landUse}</span></div>
          <div>newSurveyNumber:<span>{farm.newSurveyNumber}</span></div>
        </div>
      </div>
    </>
  )
}

const Farmlocdetail = ({ handleNavChange }) => {


  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [village, setVillage] = useState("");
  const [surveyNum, setSurveyNum] = useState("");
  const [farm, setFarm] = useState(false);
  const [myfarm, setMyFarm] = useState([]);
  const [upin, setUpin] = useState("");
  const [err, setErr] = useState("")


  const HandlePrevClick = (e) => {

    handleNavChange(e, 1)
  }

  const HandleNextClick = (e) => {


    const valdistict = ValidateName(district)
    const valtaluko = ValidateName(taluka)
    const valvillage = ValidateName(village)
    const valsurveyNum = ValidateSurveyNum(surveyNum)
        console.log(valdistict)
        console.log(valtaluko)
        console.log(valvillage)
        console.log(valsurveyNum)
    if (valdistict || valtaluko || valvillage || valsurveyNum) {
      setErr("somthing is missing!")
      return;
    }
    const obj = myfarm;
    data.farmlocationDetails = obj;
    // const myfarms= obj.map((farm)=>{
    //   return(
    //     {
    //       title: farm.title,
    //       shape: farm.shape,
    //       surveyNum: farm.surveyNum,
    //       upin: farm.upin
    //     })
      
    //   })
    //   console.log(myfarms);
    handleNavChange(e, 3);
  }

  
  const handleCheck = async () => {
    try {
      const response = await fetch(`https://hack-roso.onrender.com/getland/${upin}`);
      const res = await response.json();
      console.log(res);
      res ? setFarm(res) : setErr("not found !!!");

    } catch (err) {
      setErr("error !!!")
      console.log("error", err);
    }
  }
  const handleCheckByname = async () => {
    if (!district || !taluka || !village || !surveyNum)  return;
    const body={district,taluka,village,newSurveyNumber:surveyNum};
    try {
      const response = await fetch(`https://hack-roso.onrender.com/getlandbyname/`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const res = await response.json();
      console.log(res);
      res ? setFarm(res) : setErr("not found !!!");

    } catch (err) {
      setErr("error !!!")
      console.log("error", err);
    }
  }
  return (
    <div className='Farmloc'>

      <div className='space-bw mar'>
        <TextField id="outlined-basic" label="District" variant="outlined" onChange={
          (e) => { setDistrict(e.target.value) }} />
        <TextField id="outlined-basic" label="Taluka" variant="outlined" onChange={
          (e) => (setTaluka(e.target.value))} />
        <TextField id="outlined-basic" label="Village" variant="outlined" onChange={
          (e) => { setVillage(e.target.value) }} />
        <TextField id="outlined-basic" label="Survey Number" variant="outlined" onChange={(e) => { setSurveyNum(e.target.value) }} />
      </div>
      <Button variant="outlined" onClick={handleCheckByname}>view Details</Button>
      <h1>OR</h1>
      <div className='mar'>
        <TextField id="outlined-basic" label="Upin Number" variant="outlined" onChange={
          (e) => { setUpin(e.target.value) }} />

        <div style={{ color: "red" }}>{err}</div>
        <div className='mar'>
          <Button variant="outlined" className='view-btn' onClick={handleCheck}>View Details</Button>
        </div>

      </div>
      <div className="inp-part">
        <Button variant="outlined" onClick={HandlePrevClick}>Previous</Button>
        <Button className="inp-btn" variant="outlined" onClick={HandleNextClick}>Next</Button>
      </div>

      <div className="outerfarmcont" hidden={!farm}>
        
        {/* <div className="farm-container">
          <div className="fieldImg"><img src="https://i.ibb.co/GdKRHGT/asf2.png" alt="" srcset="" /></div>
          <div className="fieldLoc">
            <div>district:<span>{farm?.district}</span></div>
            <div>taluka:<span>{farm.taluka}</span></div>
            <div>village:<span>{farm.village}</span></div>
          </div>
          <div className="fieldLoc">
            <div>owner:<span>{farm.owner}</span></div>
            <div>landTitle: <span>{farm.landTitle}</span></div>
            <div>UPIN:<span>{farm.UPIN}</span></div>
          </div>
          <div className="fieldLoc">
            <div>totalArea:<span>{farm.totalArea}</span></div>
            <div>landUse:<span>{farm.landUse}</span></div>
            <div>newSurveyNumber:<span>{farm.newSurveyNumber}</span></div>
          </div>
      </div> */}
        <FieldBox farm={farm} />
        <Button variant="outlined" onClick={() => {
          if(!myfarm.includes(farm))
          setMyFarm([...myfarm,farm]) }}>ADD</Button>
      </div>





      <div className="outerfarmcont" hidden={!myfarm.length}>
      <h1>MY FARM</h1>
        {
        myfarm.map((farm)=>{
           return <FieldBox farm={farm}/>
        })
      }
      </div>

    </div>

  )
}

export default Farmlocdetail