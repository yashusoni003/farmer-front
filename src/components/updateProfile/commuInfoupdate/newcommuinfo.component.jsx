import { useEffect, Fragment,useState} from "react";
import  '../commuInfoupdate/newcommuInfo.styles.scss'


const NewCommuInfo = ({fetchedFarmer}) =>{

     
    const [commuInfo,setcommuInfo] = useState({})

     useEffect(()=>{


        if(fetchedFarmer && fetchedFarmer.comminfo){

            setcommuInfo(fetchedFarmer.comminfo)
        }
     },[fetchedFarmer])

     if(JSON.stringify(commuInfo) === "{}"){
        return <div>Communication Information Not Available!</div>
      }


    return(

     
        <Fragment>

           <div className="commuInfoMainBlock">

            <h2>Communication Details :-</h2>
            <div className="infoBlock">
            <div className="mobileNoContainer">
            <div><span>Mobile&nbsp;No.:&nbsp;&nbsp;&nbsp;</span>{commuInfo.mobileNumber}</div>
            </div>
           </div>

           <div className="infoBlock">
            <div className="emailContainer">
            <div><span>Email:&nbsp;&nbsp;&nbsp;</span>{commuInfo.email}</div>
            </div>
           </div>

           </div>

        </Fragment>
      

    )
}

export default NewCommuInfo;