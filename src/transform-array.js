const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) return Throw; 
  
	
  let arr2 = [];
  for(let index=0; index < arr.length; index++){
  	
  	switch (arr[index]){
      case '--discard-next': 
       if (arr[index+1] !== undefined){
        arr2.push(undefined);
        arr2.push(undefined);
        index++;
       } else{
         
       }
       break;
      case '--discard-prev': 
      if (arr[index-1] !== undefined){
        arr2.pop();
        arr2.push(undefined);
      } else{
        
      }
      break;
      case '--double-next': 
      if (arr[index+1] !== undefined){
        arr2.push(arr[index+1]);
        
      } else{
      
      }
      break;
      case '--double-prev': 
      if (arr[index-1] !== undefined){
        arr2.push(arr2[arr2.length-1]);
        
      } else{
      	
      }
      break;
      default: arr2.push(arr[index]);
      
    }
}
return arr2.filter(el => el !== undefined);
};
