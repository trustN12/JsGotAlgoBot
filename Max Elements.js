/*   

input : [4, 5, 7, -11, 1, -2, 7, 6]

output : 2

EXplanation : in this array the largest number is 7 and the maximum count is 2times, on 2nd and 6th index respectively.

*/

function maxEle(arr){

  arr.sort((a,b) => b-a);

  
  let maxEle = arr[0];

  let result = arr.filter(cb => cb === maxEle);

  console.log(result.length);


};

maxEle([4, 5, 7, -11, 1, -2, 7, 6]);