/* 
Find the maximum and minimum sum in an given array and the difference between them.

Input : arr = [2, 5, 7, 9]

Outpout : 14 21 7



Explain : 2+5+7=14
          5+7+9=21
         (21-14)=7
      
*/
function minMax(arr){

  //sorting in ascending order
  arr.sort((a,b)=>a-b);

  let minSum = arr[0]+arr[1]+arr[2];
  let maxSum = arr[1]+arr[2]+arr[3];

  let res = maxSum-minSum;

  console.log(minSum+" "+maxSum+" "+res);
};

minMax([2, 5, 7, 9]);