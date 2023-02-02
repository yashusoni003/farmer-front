import { Fragment, useEffect,useState} from "react";
import { handleCancleChange } from "../../../services/updateFarmer";
import { handleEdit } from "../../../services/updateFarmer";




const NewCreditInfo = ({fetchedFarmer}) =>{


     const[creditArray,setcreditArray] = useState([]);

     const[accountNumber,setAccountNumber] = useState("");
     const[newaccountNumber,setnewAccountNumber] = useState("");

     useEffect(()=>{
      
      if(fetchedFarmer){
           console.log('tada',fetchedFarmer.creditinfo)
          
           setcreditArray([fetchedFarmer.creditinfo]);
          
      }
     },[fetchedFarmer])



  const handleCreditInfoSaveChange = (firstClass,secondClass,setValue,newValue,attribute,index) =>{
   
    //  console.log(e.target) 
    // //  const creditObj = creditArray.find((item,index) => item[index]._id === e.target.id);
    //  setcreditArray(creditArray.map((creditObj,index) => {
        
    //     if(creditObj[index]._id === e.target.id){
    //         return {...creditObj[index],[accountNumber]:newValue}
    //     }else{
    //         return creditObj
    //     }
    //  }))
    console.log('here is credit array',creditArray)

    
      const updateObject = {...creditArray[0][index],[attribute]:newValue};
      console.log('update',updateObject)
//    console.log('heh',creditArray[0][index])
      const newData = creditArray[0]
    //  console.log('newData',newData)
      newData[index] = updateObject;

      setcreditArray([newData]);

        setValue(newValue);

        console.log(creditArray[0][0])

    document.getElementsByClassName(firstClass)[0].style.display = 'block';
      document.getElementsByClassName(secondClass)[0].style.display = 'none';    

  }   


     if(creditArray.length === 0){
          return <div>Loading...</div>
     }
        
        return(

      
        <Fragment>
    { creditArray.map((creditObj,index)=>{

        // console.log(creditObj[index].accountNumber)
        // console.log(creditArray)
        // console.log(creditArray.length === 0)

       
            // setAccountNumber(creditObj[index].accountNumber)

      return(      
          <div>
              <div className={`accountNoContainer${index}`}>
              <div>{creditObj[index].accountNumber}</div>
              <button type='button' onClick={() => handleEdit(`accountNoContainer${index}`,`accountNoInpContainer${index}`)}>Edit</button>
              </div>
              <div className={`accountNoInpContainer${index}`}style={{display:"none"}}>
              <input type="text" onChange={(e) => setnewAccountNumber(e.target.value)} />
               <button type="button" id={creditObj[index]._id}onClick={(e) => handleCreditInfoSaveChange(`accountNoContainer${index}`,`accountNoInpContainer${index}`,setAccountNumber,newaccountNumber,'accountNumber',index)}>Save</button>
               <button type="button" onClick={() => handleCancleChange(`accountNoContainer${index}`,`accountNoInpContainer${index}`)}>Cancle</button>
              </div>
          </div>


      )     

      

     })


    
    }
</Fragment>
            )


     

   
}


export default NewCreditInfo