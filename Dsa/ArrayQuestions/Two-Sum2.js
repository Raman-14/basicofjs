// isme input array sorted hai
// input : 2,7,11,15
// target : 9
// output mein 1 based index dena hai
// toh ho jaayega 2 ka index 1 aur 7 ka index 2
// output : 1,2

const arr = [1,2,4,5,6,8,9,12,15,18]
const target = 17;

var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length-1;
    let sum = 0;
    while(i<j){
        sum = numbers[i] + numbers[j];
        if(sum<target){
            i++;
        }else if(sum>target){
            j--;
        }else{
            i += 1;
            j += 1;
            return {i,j};
        }
    }
    return -1;
};

console.log(twoSum(arr,target));