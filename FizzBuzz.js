/* Given a number, for each integer in the range from 1 to n inclusive, print one value per line as follows:
         if i is a multiple of 4 and 7 print "FizzBuzz"
         if i is a multiple of 4(but not 7), print "Fizz"
         if i is a multiple of 7(but not 4), print "Buzz"
         if i is not a multiple of 4 and 7, print the value of i

 Input : 12
 
 output : 
1
2
3
Fizz
5
6
Buzz
Fizz
9
10
11
Fizz
13
Buzz
15
Fizz
17
18
19
Fizz
Buzz
22
23
Fizz
25
26
27
FizzBuzz
29
30
 
 */

 function fizzBuzz(n){
  for(let i=1; i<=n; i++){
    if(i%4===0 && i%7===0){ console.log("FizzBuzz");}
    else if(i%4===0){ console.log("Fizz");}
    else if(i%7===0){ console.log("Buzz");}
    else{ console.log(i);}
  }
 };

 let n = 30;
 fizzBuzz(n);
