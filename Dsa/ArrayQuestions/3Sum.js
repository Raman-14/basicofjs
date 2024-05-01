

function threeSum(nums) {
    let n = nums.length;
    // sbse pehle dekh lenge array ka size three hai v ya nai
    if (n < 3) {
        return [];
    }  
    let result = [];

    // fir sort kr lenge
    nums.sort((a, b) => a - b);

    // fixing one element : n1
    for (let i = 0; i < n - 2; i++) {
        // To avoid duplicate triplets
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let n1 = nums[i];
            let target = -n1;
            let left = i + 1;
            let right = n - 1;

            while (left < right) {
                let sum = nums[left] + nums[right];
                if (sum === target) {
                    result.push([n1, nums[left], nums[right]]);
                    // To avoid duplicate solutions
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
}
// Example usage:
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]
