function telephoneCheck(str) {
    if(str.indexOf("(") ===-1 && str.indexOf(")") >-1 ){
      console.log("heyy")
      return false;
    }
    // console.log(str.length)
    // console.log(str.indexOf("(")-str.indexOf(")"))
  
    if(str.indexOf("(")-str.indexOf(")") === 1-str.length){
      return false;
    }
    if(str[0]==="-"){
      return false;
    }
    let count=0;
    for(let i=0; i<str.length; i++){
      if(str[i] ==="-")
      {
        count++;
      }
    }
    if(count>2){
      return false;
    }
  
    let tempStr =str.replace(/-| /g, "");
  
  
    if(tempStr.indexOf("(") < tempStr.indexOf(")") ){
      tempStr =tempStr.replace(/\(|\)/g, "");
    }
  
    console.log(tempStr)
  
  
    if(tempStr.length=== 10){
      return true;
    }else if(tempStr.length === 11 && tempStr[0]==="1"){
      return true;
    }
    return false;
    
  }
  console.log(telephoneCheck("-1 (757) 622-7382"));