// splice() method in javascript ek versatile method hai array ko modify krne ka
// element ko add, remove, replace krke

// Syntax ------>
// array.splice(startIndex, deleteCount, item1, item2, ...);

// startIndex --->  The index at which to start modifying the array. If negative, it indicates an offset from the end of the array. If startIndex is greater than the length of the array, no elements will be removed, and new elements will be added at the end of the array.

// deleteCount (optional): The number of elements to remove from the array, starting from the startIndex. If omitted or if greater than the number of elements remaining in the array after startIndex, all elements from startIndex to the end of the array will be removed.

// item1, item2, ... (optional): Elements to insert into the array at the startIndex position. If specified, these elements will be inserted into the array in the order they are provided.

// 1. Removing Elements:

let arr = [1,2,3,4,5];
let removed = arr.splice(1,2); // 1st index se 2 element remove ho jaayega
console.log(arr); // Output: [1,4,5]
console.log(removed); // Output: [2,3]

// 2. Inserting Elements:

let arr1 = [1,2,3,4,5];
arr1.splice(2,0,'a','b'); // Insert 'a' and 'b' at index 2
console.log(arr1); // Output: [1,2,'a','b',3,4,5]

// 3. Replacing Elements:

let arr3 = [1,2,3,4,5];
arr3.splice(2,1,'x','y'); // Replaces element at index 2 with 'x' and 'y'
console.log(arr3); // Output: [1,2,'x', 'y', 4,5]