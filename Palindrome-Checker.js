function palindrome(str) {

    let tempStr= str.replace(/[^a-zA-Z0-9]/g, '');
  
    str=tempStr.toLowerCase();
  
    console.log(str)
  
    let size=0;
    let bool=false;
  
    if(str.length%2==0){
      size= str.length/2;
      console.log("Even Str: "+size);
      
    }
    else{
      size= str.length+1;
      size=size/2;
      console.log("Odd Str: "+size);
    }
  
    //console.log(str[str.length-1])
    for(let i=0; i<size; i++ ){
      
      
      if(str[i]==str[str.length-1-i]){
        bool=true;
      }
      else{
        bool= false;
        break;
      }
    }
    return bool;
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));