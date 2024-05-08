function maximumSumSubarray(arr){
    let maxSum = 0;
    for(let i = 0; i<arr.length; i++){
        let sum = 0;
        for(let j = i; j<arr.length; j++){
            sum += arr[j];
            if(sum>maxSum){
                maxSum = sum;
            }
        }
        // if(sum>maxSum){
        //     maxSum = sum;
        // }
    }
    return maxSum;
}

function maxSumSubarray(arr){
    let maxSum = 0;
    let curSum = 0;
    for(let i = 0; i<arr.length; i++){
        curSum += arr[i];
        if(curSum>maxSum){
            maxSum = curSum;
        }
        if(curSum < 0){
            curSum = 0;
        }
    }
    return maxSum;
}

let arr = [-5,4,6,-3,4,-1];
console.log(maximumSumSubarray(arr));
console.log(maxSumSubarray(arr));


var maxSubArray = function(nums) {
    if (nums.length === 0) return 0; // Handle empty array case
    
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let curSum = 0;
    let negSum = nums[0]; // Initialize negSum with the first element
    
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        
        // Update maxSum if curSum is greater
        if (curSum > maxSum) {
            maxSum = curSum;
        }
        
        // Update negSum if curSum is less than negSum
        if (curSum < negSum) {
            negSum = curSum;
        }
        
        // Reset curSum to 0 if it becomes negative
        if (curSum < 0) {
            curSum = 0;
        }
    }
    
    // Return the greater of maxSum and negSum
    return Math.max(maxSum, negSum);
};
