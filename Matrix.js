/*  

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal 1+5+9 = 15 . The right to left diagonal 3+5+9 = 17 . Their absolute difference is |15-17|=2 .

*/


function diagonalDifference(arr) {
  // Write your code here
 let a = arr.reduce((total, value, i, arr)=>{
     return total+value[i];
 }, 0);
 
 let b = arr.reduce((total, value, i, arr)=>{
      return total+value[arr.length-1-i];
 }, 0);
 
 let res = Math.abs(a-b);
 return res;
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
 