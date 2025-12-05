function stringChop(str, size) {
  // your code here
  let ans = []
  let i = 0 ;
  while(i<str.length){
    let s = i ;
    if(s+size<str.length){
      ans.push(str.substring(i,i+size))
      i += size ;
    }
    else {
      ans.push(str.substring(i))
      return ans ;
    }
  }
   
  return ans ;
}
  
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
