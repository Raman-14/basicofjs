// Ques 4 : Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is 
// moving from the very left of the array to the very right. you can only see the k numbers
// in the window. each time the sliding window moves right by one position.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// brut force method
const maxSlidingWindowNaive = function (nums, k) {
    const result = [];
    const n = nums.length;   // n = 8

    for (i = 0; i <= n-k; i++){   // i = 0; i<=8-3, i<=5; 
        let max = nums[i];       //  max = nums[i], max = 1;   
        for(j = 1; j < k; j++){   //  j=1; j<k, 1<3;  // j++; j = 2; j<3
            if(nums[i + j] > max){   //  nums[0+1]  > 1, nums[1], 3 >1;////    nums[0+2] > max; -1>3
                max = nums[j + i];   //  max = nums[j+i], max = nums[1+0], max = nums[1], max = 3;
            }
        }

        result.push(max);   // result = [3]
    }

    return result;
}

// optimised solution - Deque
const maxSlidingWindowQueue = function(nums, k){
    const result = [];
    const deque = [];
    // step - 1 make space for new element in dequeue
for(let i = 0; i < nums.length; i++){
    while(deque.length > 0 && deque[0] <= i-k){
        deque.shift();
    }
    
    // step 2 pop the element of dequeue if it is less than new element
    while(deque.length > 0 && nums[deque[deque.length-1]]< nums[i]){
        deque.pop();
    }
    
    // step 3 push the new element in depue
    deque.push(i);

    //step 4 if(i>=k-1), then deq.front() is our answer for that window
    if(i >= k-1){
        result.push(nums[deque[0]]);
    }
}
return result;
};

let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.log(maxSlidingWindowNaive(nums,k));
console.log(maxSlidingWindowQueue(nums,k))