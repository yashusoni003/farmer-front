const ValidateName = (name) =>{     
   
  const bool1 = /^[a-z A-Z]+$/.test(name);
  return !bool1;
}


const ValidateNumbers = (name) =>{
    const bool1 = /^[0-9]+$/.test(name);
     return !bool1;
}

const ValidateAccountNumber = (name) =>{

  const temp = /^[0-9]+$/.test(name);

  const secTemp = name.length<=17 && name.length>=9

  return !(temp && secTemp)
 
}
const ValidateUpin = (name) =>{

    // const str1 =  name.substring(0,4);
    // const bool1 =  /^[a-z A-Z]+$/.test(str1);
    // const bool2 = /^[ ]+$/.test(name);
    // const str2 = name.substring(4);
    // const bool3 =  /^[0-9]+$/.test(str2)
    // const bool4 = (name.length == 12)

    // return bool1 && bool2 && bool3 && bool4;
    const bool1 = /^[0-9]+$/.test(name);
     return !bool1;
}

const ValidateSurveyNum = (name)=>{
  const bool2 =  /^[a-z A-Z0-9]+$/.test(name);
   return !bool2
}

const ValidateIFSc = (name)=>{
  const bool1 =  /^[A-Z 0-9]+$/.test(name);
  return !bool1;
}

const ValidateDate = (value)=>{

    let date = new Date(value);
    
      return isNaN(date.getTime())  //return true if date is not valid
}


export {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc,ValidateDate};
