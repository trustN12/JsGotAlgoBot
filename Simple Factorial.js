/* 

Task
Implement a function named factorial that has one parameter: an integer, n.
 It must return the value of n! (i.e., n factorial).


Sample Input 
4
Sample Output 
24

*/
function factorials(n){

  let res =1;

  for(let i=2; i<=n; i++){
    res *= i;
  }
  return res;
};

console.log(factorials(4)); // 4! = 4 x 3 x 2 x 1 = 24
