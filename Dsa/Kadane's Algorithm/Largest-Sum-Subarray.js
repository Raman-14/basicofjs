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