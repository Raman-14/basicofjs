var numIdenticalPairs = function(nums) {
    nums.sort((a,b) => a-b);
    let pair = 0;
    let i = 0;
    let j = 1;
    while(i<nums.length){
        if(nums[i] === nums[j]){
            pair++;
        }
        i +=2;
        j +=2;
    }
    return pair;
};

let nums = [1,2,3,1,1,3];

var numIdenticalPairs1 = function(nums) {
    if(nums.length === 1)
            return 0;
        nums.sort((a,b) => a-b);
        let i=0;
        let counter=0;
        let j=1;
        while(i<nums.length-1)
        {      
        if(j==nums.length && i==nums.length-2)
            {
                break ;
            }
            if(nums[i]!=nums[j])
            {
                i++;
                j=i+1;
            }  
            else    
            {
                j++;
                counter++;
            }
            
        }
        return counter;
    };
    
console.log(numIdenticalPairs1(nums));