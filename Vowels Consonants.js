/*   
Sample Input 

algo bot don't give a meaow


Sample Output 

a
o
o
o
e
a
e
a
o
l
g
 
b
t

d
n
'
t

g
v


m
w

Explanation 

Observe the following:

Each letter is printed on a new line.
Then the vowels are printed in the same order as they appeared in .
Then the consonants are printed in the same order as they appeared in .

*/





function vowelsAndConsonants(str) {

  //for vowels
  for(let i=0; i<str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
      console.log(str[i]);
    }
  }

  //for consonants
 for(let i=0; i<str.length; i++){
  if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' ){
    console.log(str[i]);
  }
 }
  
};

vowelsAndConsonants(`algo bot don't give a meaow`);

