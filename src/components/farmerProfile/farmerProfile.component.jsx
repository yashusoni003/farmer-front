import { Fragment, useState } from "react";
import { updateFarmerData } from "../../services/postData";
import NewPerInfo from "../../components/updateProfile/perInfoupdate/newperInfo.component"
import NewCommuInfo from "../updateProfile/commuInfoupdate/newcommuinfo.component";
import NewBankInfo from "../updateProfile/bankInfoupdate/newBankInfo.component";
import NewInsurenceInfo from "../updateProfile/insuranceInfoupdate/newinsuranceInfo.component";
import NewCreditInfo from "../updateProfile/creditUpdate/newcreditInfo.component";
import NewYieldInfo from "../updateProfile/updateYieldInfo/newYieldInfo.component";
import NewFarmInfo from "../updateProfile/updateFarmInfo/newFarmInfo.component";
import { updateddata } from "../../data/updatedData";
import '../farmerProfile/farmerProf.styles.scss'
const FarmerProfile = () => {

    const API_URL = "http://localhost:7000";
    const[farmerId,setfarmerId] = useState();
    const[fetchedFarmer,setfetchedFarmer] = useState("");
    const[notFoundFarmer,setnotFoundFarmer] = useState(false);
    const[utilDiv,setutilDiv] = useState(true);
    
    
      const handleSearchChange = async() =>{

        const response = await fetch(`${API_URL}/getfarmer/${farmerId}`)

         const fetchedFarmerByMobile = await response.json();

         if(fetchedFarmerByMobile){

            setutilDiv(false)
            setnotFoundFarmer(false)
            setfetchedFarmer(fetchedFarmerByMobile)
            document.getElementsByClassName('farmerProfilecontainer')[0].style.display = "flex"

         }
         else if(!fetchedFarmerByMobile){

            const response = await fetch(`${API_URL}/getfarmerbyfarmerid/${farmerId}`)

           const fetchedFarmerByFarmerId = await response.json();

             console.log('byId',fetchedFarmerByFarmerId)

                if(!fetchedFarmerByFarmerId){
                   
                    setutilDiv(false)
                    setnotFoundFarmer(true)
                   document.getElementsByClassName('farmerProfilecontainer')[0].style.display = "none"
                   throw new Error('Could Not Find Farmer for Entered Id!')

                }else{

                    setutilDiv(false)
                    setnotFoundFarmer(false)
                    setfetchedFarmer(fetchedFarmerByFarmerId)
                    document.getElementsByClassName('farmerProfilecontainer')[0].style.display = "flex"
                }

         }
   
         console.log(fetchedFarmer)

      }

     

      

     

   const handleUpdateChange = async() =>{
     
        if(fetchedFarmer){

            console.log(updateddata)
            const result =   await updateFarmerData(updateddata,fetchedFarmer);
             
            if(result){
                alert('Updated Successfully!')
            }else{
                alert('Could Not Update Your Data!')
            }
        }else
        {
            throw new Error("Could Not Proceed!")
        }
        
         

      }

//       if(!fetchedFarmer){
//         console.log(1)
//   return(
//   <Fragment>
//     <div className="searchFarmer"> 
//         <label htmlFor="farmerSearch">Search Farmer by Mobile No. </label>            
//            <input placeholder="Enter Mobile No."type="search" name="farmerSearch" onChange={(e)=>setfarmerId(e.target.value)}/>
//            <button className="inverseBt" onClick={handleSearchChange}>Search</button>
//        </div>
//        <div className="utilDiv">Search For Farmer...</div>
//    </Fragment>

//   )
//       }
      
      
    return(

        <Fragment>

   
        <div className="searchFarmer"> 
           <label htmlFor="farmerSearch">Search Farmer by Mobile No. Or Farmer Id </label>            
              <input placeholder="Enter Mobile No. Or Farmer Id"type="search" name="farmerSearch" onChange={(e)=>setfarmerId(e.target.value)}/>
              <button className="inverseBt" onClick={handleSearchChange}>Search</button>
        </div>

   
      {
          utilDiv && <div className="utilDiv">Search For Farmer...</div>
      }

      {
        notFoundFarmer && <div className="notFoundDiv">Farmer Not Found For Entered Value!</div>
      }


 {

    fetchedFarmer &&  
    (

        <Fragment>


    <div className="farmerProfilecontainer">

        <div className="formalInfoContainer">
           
        {

            fetchedFarmer &&<div className="ProfileimageContainer">
                              <img src={`${fetchedFarmer.profilePic}`} alt="Farmer Img"/>
                            </div>
        }
          

        {

       fetchedFarmer && <div className="FarmerIdContainer">
                          <h3><span>Farmer Id:&nbsp;</span>{fetchedFarmer.farmId}</h3>
                         </div> 
        }
        {
          fetchedFarmer   && <div className="UserIdContainer">
                              <h3><span>User Id:&nbsp;</span>{fetchedFarmer.userId}</h3>
                             </div>

        }
        </div>
            
             
        <div className="perInfoContainer">     
            <NewPerInfo fetchedFarmer={fetchedFarmer}/>   
        </div>
        <div className="commInfoContainer">
             <NewCommuInfo fetchedFarmer={fetchedFarmer}/>
        </div>
        <div className="bankInfoContainer">
            <NewBankInfo fetchedFarmer={fetchedFarmer}/>
        </div>

        <div className="insuranceInfoContainer">
              <NewInsurenceInfo fetchedFarmer={fetchedFarmer}/>
        </div>

   {/* --> CreditInfo file Not Found In FrontEnd! */}

        {/* <div className="creditInfoContainer">
             <NewCreditInfo fetchedFarmer={fetchedFarmer}/>
        </div> */}
        
        <div className="yeildInfoContainer">
               <NewYieldInfo fetchedFarmer={fetchedFarmer}/>
        </div>

        <div className="farmInfoContainer">
               <NewFarmInfo fetchedFarmer={fetchedFarmer}/>
        </div>
    


      <div className="updateBtContainer">
        <button  className="updateBt" onClick={handleUpdateChange}>Update</button>
     </div>
           
    </div>
        
        </Fragment>
    )
 
}

    
        </Fragment>
    )
}

export default FarmerProfile;