let arr = [-1,2,1,4];
let target = 1;

// thought process
// index nahi maanga hai output mein toh
// number ko sort kr lo
// aur fir two pointer lga lo

// function closest(arr, target){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i++; j<arr.length; j++){
//             for(let k = j++; k<arr.length; k++){

//             }

//         }
//     }
// }

function threeSumClosest(arr, target){
    let closestSum = 1000000;

    arr.sort((a, b) => a - b);

    for(let i = 0; i<arr.length-2; i++){

        let j = i+1;
        let k = arr.length-1;

        while(j<k){
            let sum = arr[i] + arr[j] + arr[k];

            if(Math.abs(target-sum)<Math.abs(target-closestSum)){
                closestSum = sum;
            }

            if(sum<target){
                j++;
            }else{
            k--;
            }
        }
    }
    return closestSum;
}

console.log(threeSumClosest(arr, target));