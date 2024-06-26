/* Find the mid number of an given array 

Input : arr=[7, 1, 5, 3, 10]                Input : arr=[5, 3, 2, 4, 1]

Output : 5                                  Output : 3

*/

function findMid(arr){
  
 arr.sort((a,b) => a-b);

 const n = Math.floor(arr.length/2);

 if(arr.length%2 === 0){ return (arr[n-1] + arr[n]);}  // Not using divided by 2
 else{ return arr[n];}

};

let arr = [7, 1, 5, 3, 10]; 
console.log(findMid(arr));