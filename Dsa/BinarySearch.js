array = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19];
let target = 7;
function search(array, target){
    let start = 0;
    let end = array.length-1;
    while(start<=end){
        // console.log("L6",start,end);
        let middle = Math.round((start+end)/2);
        // console.log("L8",middle);
        // console.log("L9",array[middle],array[middle]==target, array[middle]<target, array[middle]>target);

        if(array[middle] == target){
            return middle;
        }else if(array[middle]<target){ // 9<7; false ,  3<7 true
            start = middle+1; // start = 2+1; 3 // array ko chhota kr diye 3 se end tk mein khojenge
        }else if(array[middle]>target){ // 9>6; true
            end = middle-1; // end 8-1; end=7 // array ko chhota kr diye start se 7 tk mein khojenge
        }
    }
    return -1;
}

// search(array);
// console.log(search(array,target));

// start = 0
// end = 4
// start<= end = true
//middle = 0+4/2 = 2
// array[middle]==2 ; 3==2; false
// array[middle<2; 3<2; false
// array[middle] > 2; 3>2 true
// start = middle; start = 2;

//start <= end ; 2<=4; true
// middle = 2+4/2; middle=3
//array[middle]==2; 4==2; false
// array[middle] < 2; 4<2; false
// array[middle] > 2; 4>2; true
// start = middle; start = 3;

function immediateNextSearch(array,target){
    // array = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19];
    // sorted array , target is missing, example 7 is not there we need to find immediate next value to it; example 8
    // start = 0;
    // end = 17;
    // middle = 8;
    // array[middle] = 10;
    // array[middle] == target; 
    // array[middle] < target; 10<7; false
    // array[middle] > target; 10>7; true
    // end = middle-1; 8-1=7;
    
    // start = 0;   // 4   // 6  // 6
    // end = 7; //   7  //  7  // 5
    // while(start<=end) //  6<=5  //  
    // middle = 3;  // 4+7/2; 5;   //  6
    // array[middle] = 4;     //   6   //   8
    // array[middle] < target; 4<7; true      //   6<7 ; true  //   8<7 ; false
    // start = middle +1;   //   start = 5+1 ; 6
    //  array[middle] > target; 8>7 ; true;
    // end = middle - 1 ;  end = 6-1; 5;
    // start = 4;
    //   

    // solution
    // array[middle] > target 
    // end = middle - 1 
    // result = middle

    let start = 0;
    let end = array.length-1;
    let result = -1;
    while(start<=end){
        // console.log("L6",start,end);
        let middle = Math.round((start+end)/2);
        // console.log("L8",middle);
        // console.log("L9",array[middle],array[middle]==target, array[middle]<target, array[middle]>target);

        // if(array[middle] == target){
        //     return middle;
        if(array[middle]<target){ // 9<7; false ,  3<7 true
            start = middle+1; // start = 2+1; 3 // array ko chhota kr diye 3 se end tk mein khojenge
        }else if(array[middle]>target){ // 9>6; true
            end = middle-1; // end 8-1; end=7 // array ko chhota kr diye start se 7 tk mein khojenge
            result = middle;
        }
    }
    return result;
}
    

function immediatePreviousSearch(array,target){
    // sorted array , target is missing, example 7 is not there we need to find immediate previous value to it; example 6
    
    // solution
    // array[middle] < target
    // start = middle + 1
    // result = middle

    let start = 0;
    let end = array.length-1;
    let result = -1;
    while(start<=end){
        // console.log("L6",start,end);
        let middle = Math.round((start+end)/2);
        if(array[middle]<target){ // 9<7; false ,  3<7 true
            start = middle+1; // start = 2+1; 3 // array ko chhota kr diye 3 se end tk mein khojenge
            result = middle;
        }else if(array[middle]>target){ // 9>6; true
            end = middle-1; // end 8-1; end=7 // array ko chhota kr diye start se 7 tk mein khojenge
        }
    }
    return result;
}
array = [1,2,3,4,5,6,12,13,14,15,16,17,18,19];
// console.log(immediateNextSearch(array,target));

console.log(immediatePreviousSearch(array,target));

// n+n/2 +n/4 +n/8 +... = O(logN)