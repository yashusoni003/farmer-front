import { useEffect } from "react";
import { Fragment,useState} from "react";
import { handleCancleChange } from "../../../services/updateFarmer";
import { handleEdit } from "../../../services/updateFarmer";
import { updateddata } from "../../../data/updatedData";
import {ValidateName,ValidateAccountNumber,ValidateIFSc} from '../../../Validation/validation.compo';


import '../bankInfoupdate/newBankInfo.styles.scss'



const NewBankInfo = ({fetchedFarmer}) =>{

         
const[bankInfo,setbankInfo] = useState({})
   
const [newbankName, setnewBankName] = useState("");
const [newbranchName ,setnewBranchName]  =  useState("");       
const [newtaluka,setnewTaluka]  =  useState("");    
const [newaccountNumber ,setnewAccountNumber]  =  useState("");    
const [newifsc ,setnewIfsc]  =  useState("");    


  useEffect(()=>{

         
       if(fetchedFarmer && fetchedFarmer.bankInfo){
         setbankInfo(fetchedFarmer.bankInfo)
       }
   

  },[fetchedFarmer])

  useEffect(()=>{

      updateddata.bankInfo = bankInfo

  },[bankInfo])

  

  const handleBankInfoSaveChange = (firstClass,secondClass,attribute,newValue,ValidateValue) =>{

         
    if(ValidateValue(newValue)){

        alert(`Please Enter Valid ${attribute}`)
    }
      
else{
    setbankInfo(prevState =>{
     return{...prevState,[attribute]:newValue}
    })

}
  
    document.getElementsByClassName(firstClass)[0].style.display = 'flex';
    document.getElementsByClassName(secondClass)[0].style.display = 'none';    

  }

  if(JSON.stringify(bankInfo) === "{}"){
    return <div>BankInfo Not Available!</div>
  }

return(
 
      <Fragment>
        <div className="bankInfoMainDiv">

        <h2>Bank Details :-</h2>
    <div className="infoBlock">
            <div className="bankNameContainer">
            <div><span>Bank&nbsp;Name:&nbsp;&nbsp;&nbsp;</span>{bankInfo.bankName}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('bankNameContainer','bankNameInpContainer')}>Edit</button>
            </div>
            <div className="bankNameInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Bank Name"type="text" onChange={(e) => setnewBankName(e.target.value)} />
             <button className="normalBt" type="button"onClick={() => handleBankInfoSaveChange('bankNameContainer','bankNameInpContainer','bankName',newbankName,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('bankNameContainer','bankNameInpContainer')}>Cancle</button>
            </div>
   </div>
   <div className="infoBlock">
            <div className="branchNameContainer">
            <div><span>Branch&nbsp;Name:&nbsp;&nbsp;&nbsp;</span>{bankInfo.branchName}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('branchNameContainer','branchNameInpContainer')}>Edit</button>
            </div>
            <div className="branchNameInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Branch Name"type="text" onChange={(e) => setnewBranchName(e.target.value)}/>
             <button className="normalBt" type="button"onClick={() => handleBankInfoSaveChange('branchNameContainer','branchNameInpContainer','branchName',newbranchName,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('branchNameContainer','branchNameInpContainer')}>Cancle</button>
            </div>
   </div>
   <div className="infoBlock">
            <div className="talukaNameContainer">
            <div><span>Taluka:&nbsp;&nbsp;&nbsp;</span>{bankInfo.taluka}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('talukaNameContainer','talukaNameInpContainer')}>Edit</button>
            </div>
            <div className="talukaNameInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Taluko" type="text" onChange={(e) => setnewTaluka(e.target.value)}/>
             <button className="normalBt" type="button"onClick={() => handleBankInfoSaveChange('talukaNameContainer','talukaNameInpContainer','taluka',newtaluka,ValidateName)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('talukaNameContainer','talukaNameInpContainer')}>Cancle</button>
            </div>
   </div>
   <div className="infoBlock">
            <div className="accountNoContainer">
            <div><span>Account No.:&nbsp;&nbsp;&nbsp;</span>{bankInfo.accountNumber}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('accountNoContainer','accountNoInpContainer')}>Edit</button>
            </div>
            <div className="accountNoInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Account No."type="text" onChange={(e) => setnewAccountNumber(e.target.value)}/>
             <button className="normalBt" type="button"onClick={() => handleBankInfoSaveChange('accountNoContainer','accountNoInpContainer','accountNumber',newaccountNumber,ValidateAccountNumber)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('accountNoContainer','accountNoInpContainer')}>Cancle</button>
            </div>
   </div>
   <div className="infoBlock">
            <div className="ifscNoContainer">
            <div><span>Ifsc&nbsp;No.:&nbsp;&nbsp;&nbsp;</span>{bankInfo.ifsc}</div>
            <button className="normalBt" type='button' onClick={() => handleEdit('ifscNoContainer','ifscNoInpContainer')}>Edit</button>
            </div>
            <div className="ifscNoInpContainer"style={{display:"none"}}>
            <input placeholder="Enter Ifsc"type="text" onChange={(e) => setnewIfsc(e.target.value)}/>
             <button className="normalBt" type="button"onClick={() => handleBankInfoSaveChange('ifscNoContainer','ifscNoInpContainer','ifsc',newifsc,ValidateIFSc)}>Save</button>
             <button className="inverseBt" type="button" onClick={() => handleCancleChange('ifscNoContainer','ifscNoInpContainer')}>Cancle</button>
            </div>
   </div>






   </div>
</Fragment>
)


}

export default NewBankInfo;
