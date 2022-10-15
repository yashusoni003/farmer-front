const {generateID} = require('./getFarmerId');

export const postData = async (data) => {
  console.log(data);
  const {
    bankdetails,
    communicationDetails,
    farmlocationDetails,
    personalInfo,
    yeildInfo,
  } = data;
  const generatedId = await generateID("gujrat",personalInfo.distict);
  const body = {
    farmId:generatedId,
    profilePic: "https://i.ibb.co/9vSkJnM/farmer-villager-india.jpg",
    userId: communicationDetails.mobileNumber,
    perinfo: {
      firstName: personalInfo.firstName,
      middleName: personalInfo.middleName,
      lastName: personalInfo.lastName,
      adhar: personalInfo.adhar,
      gender: "male",
      district: personalInfo.district,
      taluko: personalInfo.taluko,
      village: personalInfo.village,
      homeAddrs: personalInfo.homeAddrs,
      dob: "13/01/2002",
    },
    comminfo: {
      mobileNumber: communicationDetails.mobileNumber,
      email: communicationDetails.email || "testin@test.com",
    },
    farmInfo: [
      {
        title: "navi vadi",
        shape: "https://i.ibb.co/GdKRHGT/asf2.png",
        surveyNum: farmlocationDetails.surveyNum,
        upin: farmlocationDetails.upin,
      },
      {
        title: "juni vadi",
        shape: "https://i.ibb.co/R7nh28N/asd.png",
        surveyNum: farmlocationDetails.surveyNum,
        upin: farmlocationDetails.upin,
      },
    ],
    yeildInfo: {
      landTitle: yeildInfo.landTitle,
      year: yeildInfo.year,
      cropName: yeildInfo.cropName,
      quintity: yeildInfo.quintity,
      unit: yeildInfo.unit,
      totalPrice: yeildInfo.totalPrice,
      cropType: yeildInfo.cropType,
      harvestTech: yeildInfo.harvestTech,
    },
    bankInfo: {
      bankName: bankdetails.bankName,
      branchName: bankdetails.branchName,
      taluka: bankdetails.taluko,
      accountNumber: bankdetails.accountNumber,
      ifsc: bankdetails.ifsc,
    },
  };
//   const body = {
//     profilePic:"https://i.ibb.co/9vSkJnM/farmer-villager-india.jpg",
//     userId:"1234567",
//     farmId:generatedId,
// perinfo:{
//   firstName:"guautam",
//   middleName:"ahir",
//   lastName:"mesniya",
//   adhar:"669179941308",
//   gender:"male",
//   district:"dwarka",
//   taluko:"khambalia",
//   village:"kuvadiya",
//   homeAddrs:"kuvadiya gam 361305",
//   dob:"13/01/2002"
//   },
//   comminfo:{
//       mobileNumber:"9313903585",
//     email:"ahirdilp@gmail.com"
//  },
//  farmInfo:[{
//    title:"navi vadi",
//     shape:"https://i.ibb.co/GdKRHGT/asf2.png",
//     surveyNum:"76",
//     upin:"12702033000760000"
// },{
//     title:"juni vadi",
//     shape:"https://i.ibb.co/R7nh28N/asd.png",
//     surveyNum:"110",
//     upin:"12702033001100000"
// }],
//   yeildInfo:{
//   landTitle:"vadi",
//     year:"2021",
//     cropName:"grountnut",
//     quintity:"200",
//     unit:"20kg",
//     totalPrice:"1000",
//     cropType:"rabi",
//     harvestTech:"harvesting"
//   },
//   bankInfo:{
//     bankName:"Union Bank of India",
//     branchName:"dwarka",
//     taluka:"dwarka",
//     accountNumber:"756302010002027",
//     ifsc:"UBIN0575631"
//   }

// }
  
  try {
    const response = await fetch("https://hack-roso.onrender.com/postfarmer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    
    const res = await response.json();
    console.log(res);
  } catch (err) {
    console.log("error", err);
  }
};

// const body = {
//     profilePic:"https://i.ibb.co/9vSkJnM/farmer-villager-india.jpg",
//     userId:"8155977453",
//     farmId:"GJ10DWK123",
// perinfo:{
//   firstName:"guautam",
//   middleName:"ahir",
//   lastName:"mesniya",
//   adhar:"669179941308",
//   gender:"male",
//   district:"dwarka",
//   taluko:"khambalia",
//   village:"kuvadiya",
//   homeAddrs:"kuvadiya gam 361305",
//   dob:"13/01/2002"
//   },
//   comminfo:{
//       mobileNumber:"9313903585",
//     email:"ahirdilp@gmail.com"
//  },
//  farmInfo:[{
//    title:"navi vadi",
//     shape:"https://i.ibb.co/GdKRHGT/asf2.png",
//     surveyNum:"76",
//     upin:"12702033000760000"
// },{
//     title:"juni vadi",
//     shape:"https://i.ibb.co/R7nh28N/asd.png",
//     surveyNum:"110",
//     upin:"12702033001100000"
// }],
//   yeildInfo:{
//   landTitle:"vadi",
//     year:"2021",
//     cropName:"grountnut",
//     quintity:"200",
//     unit:"20kg",
//     totalPrice:"1000",
//     cropType:"rabi",
//     harvestTech:"harvesting"
//   },
//   bankInfo:{
//     bankName:"Union Bank of India",
//     branchName:"dwarka",
//     taluka:"dwarka",
//     accountNumber:"756302010002027",
//     ifsc:"UBIN0575631"
//   }

// }