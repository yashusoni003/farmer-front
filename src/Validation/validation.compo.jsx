const ValidateName = (name) =>{     
   
    const bool1 = /^[a-z A-Z]+$/.test(name);
    const bool2 = /^[ ]+$/.test(name);
        
      return bool1 && bool2;
}

// it will return true for numeric values input

const ValidateNumbers = (name) =>{

    const bool1 = /^[0-9]+$/.test(name);
    const bool2 = /^[ ]+$/.test(name);
        
     return bool1 && bool2;
}

const ValidateAccountNumber = (name) =>{

  const bool1 = /^[0-9]+$/.test(name);
  const bool2 = /^[ ]+$/.test(name);

     const bool3  = false;

        if(bool1 && bool2 && (name.length()<=17 && name.length>=9))
            bool3 = true

      return bool3;
}
const ValidateUpin = (name) =>{

    const str1 =  name.substring(0,4);
    const bool1 =  /^[a-z A-Z]+$/.test(str1);
    const bool2 = /^[ ]+$/.test(name);
    const str2 = name.substring(4);
    const bool3 =  /^[0-9]+$/.test(str2)
    const bool4 = (name.length == 12)

    return bool1 && bool2 && bool3 && bool4;
}

const ValidateSurveyNum = (name)=>{
  const bool2 = /^[ ]+$/.test(name);
   return bool2
}

const ValidateIFSc = (name)=>{

        const bool1 =  /^[A-Z 0-9]+$/.test(name);
        const  bool2 = /^[ ]+$/.test(name);

          return bool1 && bool2;
}



export {ValidateName,ValidateAccountNumber,ValidateNumbers,ValidateUpin,ValidateSurveyNum,ValidateIFSc};
