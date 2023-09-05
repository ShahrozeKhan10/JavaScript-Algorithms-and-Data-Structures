function rot13(str) {
    let temp="";
    for(let i=0; i<str.length; i++){
      switch(str[i]){
        case 'A':
        temp += 'N';
        break;
  
        case 'B':
        temp += 'O';
        break;
  
        case 'C':
        temp += 'P';
        break;
  
        case 'D':
        temp += 'Q';
        break;
  
        case 'E':
        temp += 'R';
        break;
  
        case 'F':
        temp += 'S';
        break;
  
        case 'G':
        temp += 'T';
        break;
  
        case 'H':
        temp += 'U';
        break;
  
        case 'I':
        temp += 'V';
        break;
  
        case 'J':
        temp += 'W';
        break;
  
        case 'K':
        temp += 'X';
        break;
  
        case 'L':
        temp += 'Y';
        break;
  
        case 'M':
        temp += 'Z';
        break;
  
        case 'N':
        temp += 'A';
        break;
  
        case 'O':
        temp += 'B';
        break;
  
        case 'P':
        temp += 'C';
        break;
  
        case 'Q':
        temp += 'D';
        break;
  
        case 'R':
        temp += 'E';
        break;
  
        case 'S':
        temp += 'F';
        break;
  
        case 'T':
        temp += 'G';
        break;
  
        case 'U':
        temp += 'H';
        break;
  
        case 'V':
        temp += 'I';
        break;
  
        case 'W':
        temp += 'J';
        break;
  
        case 'X':
        temp += 'K';
        break;
  
        case 'Y':
        temp += 'L';
        break;
  
        case 'Z':
        temp += 'M';
        break;
  
        default: 
        temp += str[i];
      }
    }
    return temp;
  }
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
  