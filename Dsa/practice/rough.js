var smallerNumbersThanCurrent = function(nums) {
    const sorted = nums.slice().sort((a,b) => a - b);
    const result = [];
    for(let i=0; i<nums.length; i++){
	    result.push(sorted.indexOf(nums[i]));
    }
    return result;  
};


let nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));

let num = 2932;