var twoSum = function(nums, target){
    const map = new Map()
    for(const index in nums){
        const remaining = target - nums[index];
        if(map.has(remaining)) return [index, map.get(remaining)]
        map.set(nums[index], index)
    }
};

const nums = [1,4,5,7,8,9];
const target = 15;
// console.log(twoSum(nums, target));

const numb = [1,4,5,7];
const targ = 12;

let twoSum1 = function(nums, targ){
    const map = new Map()
    for(const index in numb){
        const remaining = targ - nums[index];
        if(map.has(remaining)) return [index, map.get(remaining)]
        map.set(nums[index], index)
    }
}
console.log(twoSum1(numb, targ));