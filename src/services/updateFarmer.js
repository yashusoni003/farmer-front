

 export const handleEdit = (firstClass,secondClass) =>{       

    document.getElementsByClassName(firstClass)[0].style.display = 'none';
    document.getElementsByClassName(secondClass)[0].style.display = 'flex';          
 }


 


 export const handleCancleChange = (firstClass,secondClass) =>{

    document.getElementsByClassName(firstClass)[0].style.display = 'flex';
   document.getElementsByClassName(secondClass)[0].style.display = 'none';   
    
 }



