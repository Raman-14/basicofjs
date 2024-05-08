// class Solution {
//     public int countPairs(List<Integer> nums, int target) {
//         Collections.sort(nums);
//         int left = 0;
//         int right = nums.size()-1;
//         int count = 0;
//         while(left<right)
//         {
//             if(nums.get(left)+nums.get(right)<target)
//             {
//                 count+=right-left;
//                 left++;
//             }
//             else
//             {
//                 right--;
//             }
//         }
//         return count;
//     }
// }

var countPairs = function(nums, target){
    let num = nums.sort((a,b) => a-b);
    let left = 0;
    let right = nums.length-1;
    let count = 0;
    while(left<right){
        if(num[left]+num[right]<target){
            count += right-left;
            left++;
        }else{
            right--;
        }
    }
    return count;
}

let nums = [-6,2,5,-2,-7,-1,3]
let target = -2
console.log(countPairs(nums, target));
