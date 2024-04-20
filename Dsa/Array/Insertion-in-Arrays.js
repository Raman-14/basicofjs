// two possible way to insert an array:-
// insert element at the end of the array
// insert element at the desired index in the array

// special case ----> need to be considered that whether the array is already full or not. if the array is full, then the new element can not be inserted.


let arr = [1,2,3,4,5];
let N = 10;
let len = 5;
let pos = 3;

// insert at end in arr[]
function insert(arr, N, len){
    if(len<N){
        arr[len] = 8;
    }else{
        console.log("array is full");
    }
}
// insert(arr, N, len);
console.log(arr.toString());

//insert an element at position, pos in arr[]

function ins(arr, N, len, pos){
    if(len<N){
        let idx = pos - 1;
        for(let i = len-1; i>=idx; i--){
            arr[i+1] = arr[i];
        }
        arr[idx] = 8;
    }
}

ins(arr,N,len,pos);
console.log(arr.toString());

