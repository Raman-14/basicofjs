let a1 = [1,2,3,5,6,8,4];
let n = 8;

function findMissingNum(a1, n){
  const totalSum = (n * (n + 1))/2;

  let arraySum = 0;
  for(let i = 0; i<a1.length; i++){
    arraySum = arraySum + a1[i];
  }

  return totalSum - arraySum;
}

console.log(findMissingNum(a1, n));