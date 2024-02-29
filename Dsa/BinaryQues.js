array = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let target = 2;
let end = array.length-1;
let start = 0;

function search(array, target, start, end){
    // console.log(array);
    while(start<=end){
        // console.log
        let middle = Math.round((start+end)/2);
        if(array[middle]==target){
            return middle;
        }else if(array[middle]<target){
            start = middle + 1;
            // result = middle; // to find previous next
        }else if(array[middle]>target){
            end = middle - 1;
            // result = middle; //  to find the immediate next

        }
    }
    return -1;
}

// console.log(search(array, target, start, end));

// logic to find peak of rotated array
    // {5, 6, 7, 8, 9, 10, 1, 2, 3}
    // point = (start+end)/2  //  start = 0 , end = 8, middle = 4 (9)  //   start = 5, end = 8, middle = 6 (1)  //  start = 5, end = 5 (10), middle = 5
    // condition 1 : previous < point > next  //  8 < 9 > 10 false   //   10 < 1 > 2 false  //   9 < 10 > 1 true
    // condition 2 : point > array[end]  //    9 > 3 true --  9 - x = increasing && x - 3 decreasing   //  1 > 3  false
    // start = point + 1;  
    // condition 3 : point < array[start]  // 1 < 10  true  --  10 - 1 ke bich mein avi v peak hai jaha se wo decrease ho gaya
    //  end = point - 1;


// }

    function findPeak(array){
        // console.log(35)
        let start = 0;
        let end = array.length - 1;
        while(start<=end){
            let middle = Math.round((start + end)/2);
            // console.log(start,end,middle)
            if(array[middle] > array[middle - 1] && array[middle] > array[middle + 1]){
                return middle;
            }else if(array[middle] > array[end]){
                start = middle + 1;
            // }else if(array[middle] < array[start]){
             } else{
                end = middle - 1;
            }
        }
        return -1;
    }

    let start1 = 0;
    let end1 = array.length-1;
    let peak = findPeak(array)
    console.log(56,peak);

    let subArrayLeft = array.slice(start1, peak+1);
    let subArrayRight = array.slice(peak+1, end+1);

    console.log(search(array, target, start1, peak));
    console.log(search(array, target, peak+1, end1));