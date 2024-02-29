// 1. Divide array into 2 parts
// 2. Get both parts sorted via recursion
// 3. merge the sorted parts

// Explain 3.  arr1 = [3,5,9],  arr2 = [4,6,8]
// size = size of arr1 + arr2
// pehle check krenge 3 is smaller or 4 is smaller, 3 is smaller
// first number is 3 then check the second number of arr1 5 is smaller of 4 is smaller, 4 is smaller , 4 is the second number
// then check 6 is smaller or 5 is smaller, 5 is smaller third number is 5 and goes on
// [ 3,4,5,6,8,9]

function mergeSort(arr){
    if(arr.length==1){
        return arr;
    }

    // Split the array in half
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(middle);

    // Recursively merge sort both halves
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
}

