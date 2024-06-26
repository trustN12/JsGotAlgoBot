/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 4 places after the decimal.
Sample Input :
arr = [10, 12, -7, 1, 3, 1]

Sample Output
0.8333
0.1667
0.0000
*/

function plusMinus(arr){
 
let positiveCount =0;
let negativeCount =0;
let zeroCount = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]>0) positiveCount++;
    else if(arr[i]<0) negativeCount++;
    else zeroCount++;
}

let positiveRatio = positiveCount/arr.length;
let negativeRatio = negativeCount/arr.length;
let zeroRatio = zeroCount/arr.length;

console.log(positiveRatio.toFixed(4));
console.log(negativeRatio.toFixed(4));
console.log(zeroRatio.toFixed(4));

};

plusMinus( [10, 12, -7, 1, 3, 1]);


