// let height = [0,1,0,2,1,0,1,3,2,1,2,1];

// function waterQuantity(height){ // height = 4,2,0,3,2,5

//     let maxLeft = height[0];  // maxLeft = 0;
//     let storeWater = 0;  // storeWater = 0;
//     for(let i = 0; i<height.length; i++){  // i = 0; i<6; true; // i++ i=1; i<6; true
//         if(maxLeft<height[i] || maxLeft==height[i]){  // (maxLeft = 4) => (height[i] = 4) true //  maxLeft = 4) >= height[1] = 2 ; 4>=2
//             maxLeft = height[i];  // maxLeft = height[0] = 4
//         }
//         if(maxLeft-height[i]>0){   // maxLeft - height[0]>0; 4 - 4 > 0 false
//             storeWater = storeWater + ( maxLeft-height[i]);
//         }   
//     }
//     return storeWater;
// }

// console.log(waterQuantity(height));

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
function trap(height) {
    let leftMax = leftMaxArray(height);
    let rightMax = rightMaxArray(height);

    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        let h = Math.min(leftMax[i], rightMax[i]) - height[i];
        if (h > 0) {
            sum += h;
        }
    }
    return sum;
}

function leftMaxArray(height) {
    let leftMax = [];
    let maxSoFar = 0;
    for (let i = 0; i < height.length; i++) {
        leftMax[i] = maxSoFar;
        maxSoFar = Math.max(maxSoFar, height[i]);
    }
    return leftMax;
}

function rightMaxArray(height) {
    let rightMax = [];
    let maxSoFar = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        rightMax[i] = maxSoFar;
        maxSoFar = Math.max(maxSoFar, height[i]);
    }
    return rightMax;
}

console.log(trap(height));
