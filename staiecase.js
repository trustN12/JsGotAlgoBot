/*  print this
n=4

   #
  ##
 ###
####

*/



function staircase(n){

for(let i=1; i<=n; i++){

let stair = [];

for(let j=0; j<n-i; j++){
  stair.push(' ');
}

for(let k=0; k<i; k++){
  stair.push('#');
}

console.log(stair.join(''));

}

};

staircase(5);