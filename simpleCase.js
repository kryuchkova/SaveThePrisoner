function processData(input) {
function isBigEnough(value) {
  return value > 0;
}
var inputArr = input.split("").map(Number).filter(isBigEnough);
var m = inputArr[2];     
var s = inputArr[3];    
var n = inputArr[1];
    
var prisonersArray = new Array();

while(prisonersArray.length < 1){    
  for (var i = s, j = 0 ; i <= n; i++, j++) {
       prisonersArray[j]= i; //zero indexing solved 
          
    }
}
    
    
var nums = prisonersArray;    

for (var z = nums.length, u = 1; z < n; z++, u++)
      
{
    
    nums.push(u);
    
}
    
      
  
    
 console.log(nums);

    
 var deadman = nums[m - 1]; // -1 because of zero indexing
 

        
    
    
    
    
    

console.log(deadman);    
    

}

