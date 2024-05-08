var findMaxK = function(nums) {
    // if(nums.length>1000 || nums[0]===1000){
    //     return -1;
    // }
    let tempMax = 0;   // tempMax = 0;
    let max = 0;    // max = 0;
    nums.sort((a,b) => a-b);   // nums = -7,-1,1,6,7,10
    let i = 0;    // i = 0;
    let j = nums.length-1;  // j = 5;
    if(nums[i]>0){
        return -1;
    }
    while(i<j){  // 0<5; true
        if(Math.abs(nums[i])===nums[j]){
            tempMax = nums[j];
            i++;
            j--;
        }
        if(tempMax>max){
            max = tempMax;
        }
        if(nums[j]>Math.abs(nums[i])){
            j--;
        }
        if(nums[j]<Math.abs(nums[i])){
            i++;
        }
    }
    if(max===0){
        return -1;
    }
    return max;
};


let nums = [14,33,40,-33,8,-24,-42,30,-18,-34];
console.log(findMaxK(nums));

var findMaxL = function(nums) {
    result = -1
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(-nums[i], i+1) > 0) 
            if (Math.abs(nums[i]) > result) result = Math.abs(nums[i])            
        }

    return result
};
console.log(findMaxL(nums));