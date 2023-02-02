import { Fragment, useEffect ,useState} from "react";
import '../perInfoupdate/newperInfo.styles.scss'



const NewPerInfo = ({fetchedFarmer}) =>{
    
  
   
const[perInfo,setPerInfo] = useState({})

      useEffect(()=>{
        
         if(fetchedFarmer && fetchedFarmer.perinfo){

             setPerInfo(fetchedFarmer.perinfo)

         }


      },[fetchedFarmer])


      if(JSON.stringify(perInfo) === "{}"){
        return <div>Personal Information Not Available...</div>
      }

       
return(

  
    <Fragment>
 
        <div className="perInfoMainDiv">
     
         <h2>Personal Details :-</h2>

           <div className='infoBlock'>
            <div className="firstNameContainer">
            <div><span>First Name:&nbsp;&nbsp;&nbsp;</span>{perInfo.firstName}</div>
            </div>
           </div>
           <div className='infoBlock'>
            <div className="middleNameContainer">
            <div><span>Middle&nbsp;Name:&nbsp;&nbsp;&nbsp;</span>{perInfo.middleName}</div>
            </div>
           </div>
           <div className='infoBlock'>
            <div className="lastNameContainer">
            <div><span>Last&nbsp;Name:&nbsp;&nbsp;&nbsp;</span>{perInfo.lastName}</div>
            </div>
           </div>
           <div className='infoBlock'>
            <div className="adharNoContainer">
            <div><span>Adhar No.:&nbsp;&nbsp;&nbsp;</span>{perInfo.adhar}</div>
            </div>
           </div>
           <div className='infoBlock'>
            <div className="districtNameContainer">
            <div><span>District:&nbsp;&nbsp;&nbsp;</span>{perInfo.district}</div>
           </div>
           </div>
           <div className='infoBlock'>
            <div className="villageNameContainer">
            <div><span>Village:&nbsp;&nbsp;&nbsp;</span>{perInfo.village}</div>
            </div>
           </div>
           <div className='infoBlock'>
           <div className="talukoNameContainer">
            <div><span>Taluko:&nbsp;&nbsp;&nbsp;</span>{perInfo.taluko}</div>
            </div>
           </div>
           <div className='infoBlock'>
           <div className="genderContainer">
            <div><span>Gender:&nbsp;&nbsp;&nbsp;</span>{perInfo.gender}</div>
            </div>
           </div>
           <div className='infoBlock'>
           <div className="homeaddrsContainer">
            <div><span>Home Address:&nbsp;&nbsp;&nbsp;</span>{perInfo.homeAddrs}</div>
            </div>
           </div>
           <div className='infoBlock'>
           <div className="dobContainer">
            <div><span>Date Of Birth:&nbsp;&nbsp;&nbsp;</span>{perInfo.dob}</div>
            </div>
           </div>


           </div>


    </Fragment>
   

)







}



export default NewPerInfo;