function convertToRoman(num) {
    let str =num.toString();
    
    let rules= [["I","V","X"],["X","L","C"],["C","D","M"],["M"]];
    let result=[];
  
    for(let i=str.length-1; i>=0; i--){
      let ni =parseInt(str[str.length-i-1])
      console.log(ni)
      switch(ni){
        case 1:
        case 2:
        case 3:
        result.push(rules[i][0].repeat(ni));
        break;
        case 4:
        result.push(rules[i][0].concat(rules[i][1]));
        break;
        case 5:
        result.push(rules[i][1]);
        break;
        case 6:
        case 7:
        case 8:
        result.push(rules[i][1]+rules[i][0].repeat(ni-5));
        break;
        case 9:
        result.push(rules[i][0]+rules[i][2]);
        break;
      }
  
    }
   return result.toString().replace(/,/gi,"");
  }
  
  console.log(convertToRoman(649));