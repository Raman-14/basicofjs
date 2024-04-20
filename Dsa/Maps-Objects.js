// const map1 = new Map();
// map1.set(4,0);
// map1.set(5,1);
// map1.set(6,2);
// map1.set(7,3);

// map1.forEach((value,key)=>{
//     console.log(`${key}: ${value}`);
// });

// console.log(map1.has(7));
// // console.log(map1.has(3));


function insertElement(arr, pos, K, N) {
    const len = arr.length;

    // Check if there is space left in the array for the new element
    if (len < N) {
        // Space left

        // Calculate the index where the element will be inserted
        const idx = pos - 1;

        // Shift elements to the right starting from idx to make space for the new element
        for (let i = len - 1; i >= idx; i--) {
            arr[i + 1] = arr[i];
        }

        // Insert the element K at index idx
        arr[idx] = K;

        console.log("Element inserted successfully.");
    } else {
        // Array is full
        console.log("Cannot insert element. Array is full.");
    }
}

// Example usage
let arr = [1, 2, 3, 4, 5];
let pos = 3; // Position to insert
let K = 10; // Element to insert
let N = 10; // Maximum size of the array

insertElement(arr, pos, K, N);

console.log("Updated array:", arr);
