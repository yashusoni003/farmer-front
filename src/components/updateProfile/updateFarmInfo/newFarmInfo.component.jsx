import { Fragment, useEffect,useState} from "react";
import { handleCancleChange } from "../../../services/updateFarmer";
import { handleEdit } from "../../../services/updateFarmer";
import { updateddata } from "../../../data/updatedData";
import {ValidateName,ValidateUpin,ValidateSurveyNum} from '../../../Validation/validation.compo';
import '../updateFarmInfo/newfarmInfo.styles.scss'




const NewFarmInfo = ({fetchedFarmer}) =>{


     const[farmInfoArray,setfarmInfoArray] = useState([]);

     const[newTitle,setnewTitle] = useState("");
     const[newupin,setnewupin] = useState("");
     const[newsurveyNum,setnewsurveyNum] = useState("");
     const[newShape,setnewShape] = useState("");
    
     
     useEffect(()=>{
      
      if(fetchedFarmer && fetchedFarmer.farmInfo){
          
          
           setfarmInfoArray([fetchedFarmer.farmInfo]);
          
      }
     },[fetchedFarmer])



  const handleFarmInfoSaveChange = (firstClass,secondClass,newValue,attribute,index,ValidateValue) =>{
   

       if(ValidateValue(newValue)){

          alert(`Please Enter Valid ${attribute}`)
       }

    else{
        
        const updateObject = {...farmInfoArray[0][index],[attribute]:newValue};
       
  
        const newData = farmInfoArray[0]
  
        newData[index] = updateObject;
  
        setfarmInfoArray([newData]);
        
        updateddata.farmInfo = farmInfoArray[0];
    
    }
        // console.log(farmInfoArray[0][0])

    document.getElementsByClassName(firstClass)[0].style.display = 'flex';
      document.getElementsByClassName(secondClass)[0].style.display = 'none';    

  }   


     if(farmInfoArray.length === 0){
          return <div>Farm Information Not Available!</div>
     }
        
        return(

      
        <Fragment>
            <div className="farmInfoMainDiv">

               <h2>Farm Details :-</h2> 
    { farmInfoArray[0].map((farmdObj,index)=>{

        console.log('farm',farmdObj)

      return(      
        
        <Fragment>
            <h3>Farm&nbsp;-&nbsp;{index+1}</h3>
           <div className="infoBlock"> 
               <div className={`titleContainer${index}`}>
                 <div><span>Title:&nbsp;&nbsp;&nbsp;</span>{farmdObj.title}</div>
                 <button className="normalBt" type='button' onClick={() => handleEdit(`titleContainer${index}`,`titleInpContainer${index}`)}>Edit</button>
              </div>
              <div className={`titleInpContainer${index}`}style={{display:"none"}}>
                 <input placeholder="Enter Farm Title"type="text" onChange={(e) => setnewTitle(e.target.value)} />
                 <button className="normalBt" type="button" id={farmdObj._id}onClick={(e) => handleFarmInfoSaveChange(`titleContainer${index}`,`titleInpContainer${index}`,newTitle,'title',index,ValidateName)}>Save</button>
                 <button className="inverseBt"type="button" onClick={() => handleCancleChange(`titleContainer${index}`,`titleInpContainer${index}`)}>Cancle</button>
              </div>
           </div>
           <div className="infoBlock">
               <div className={`survayNoContainer${index}`}>
                 <div><span>Survey No.:&nbsp;&nbsp;&nbsp;</span>{farmdObj.surveyNum}</div>
                 <button className="normalBt" type='button' onClick={() => handleEdit(`survayNoContainer${index}`,`survayNoInpContainer${index}`)}>Edit</button>
              </div>
              <div className={`survayNoInpContainer${index}`}style={{display:"none"}}>
                 <input placeholder="Enter Survey No."type="text" onChange={(e) => setnewsurveyNum(e.target.value)} />
                 <button className="normalBt" type="button" id={farmdObj._id}onClick={(e) => handleFarmInfoSaveChange(`survayNoContainer${index}`,`survayNoInpContainer${index}`,newsurveyNum,'surveyNum',index,ValidateSurveyNum)}>Save</button>
                 <button className="inverseBt" type="button" onClick={() => handleCancleChange(`survayNoContainer${index}`,`survayNoInpContainer${index}`)}>Cancle</button>
              </div>
           </div>
           <div className="infoBlock">
               <div className={`farmupinContainer${index}`}>
                 <div><span>Farm Upin:&nbsp;&nbsp;&nbsp;</span>{farmdObj.upin}</div>
                 <button className="normalBt" type='button' onClick={() => handleEdit(`farmupinContainer${index}`,`farmupinInpContainer${index}`)}>Edit</button>
              </div>
              <div className={`farmupinInpContainer${index}`}style={{display:"none"}}>
                 <input placeholder="Enter Upin" type="text" onChange={(e) => setnewupin(e.target.value)} />
                 <button className="normalBt" type="button" id={farmdObj._id}onClick={(e) => handleFarmInfoSaveChange(`farmupinContainer${index}`,`farmupinInpContainer${index}`,newupin,'upin',index,ValidateUpin)}>Save</button>
                 <button className="inverseBt" type="button" onClick={() => handleCancleChange(`farmupinContainer${index}`,`farmupinInpContainer${index}`)}>Cancle</button>
              </div>
           </div>
           <div className="infoBlock FarmShap">
               <div className={`shapeContainer${index}`}>
                 <div>Farm Shap:&nbsp;&nbsp;&nbsp;</div>
                 <div><img src={farmdObj.shape}/></div>
                 <button className="normalBt" type='button' onClick={() => handleEdit(`shapeContainer${index}`,`shapeInpContainer${index}`)}>Edit</button>
              </div>
              <div className={`shapeInpContainer${index}`}style={{display:"none"}}>
                 <input placeholder="Enter Shape Url" type="text" onChange={(e) => setnewShape(e.target.value)} />
                 <button className="normalBt" type="button" id={farmdObj._id}onClick={(e) => handleFarmInfoSaveChange(`shapeContainer${index}`,`shapeInpContainer${index}`,newShape,'shape',index)}>Save</button>
                 <button className="inverseBt" type="button" onClick={() => handleCancleChange(`shapeContainer${index}`,`shapeInpContainer${index}`)}>Cancle</button>
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


export default NewFarmInfo