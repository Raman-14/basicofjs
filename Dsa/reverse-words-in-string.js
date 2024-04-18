 // Ques 1 : Given an input string s, reverse the order of the words

 // Input: "the sky is blue" -------->>>>>>>  output: "blue is sky the"
 // Input: "hello world "  ------->>>>>>>> output: "world hello"
 // Input: "a good    example" ----->>>>> output:  "example good a"

 // "the sky is blue" => [the,sky,is,blue]
 // [] => [the,sky,is,blue] => blue is sky the

const reverseWords = function(s){
    const splits = s.split(" ");
    const stack = [];

    for(let i of splits){
        stack.push(i);
    }
    let finals = "";
    while(stack.length){
        const current = stack.pop();
        if(current){
            finals += " " + current;
        }
    }
    return finals.trim();
}
// time complexity = O(n)  there are two loops in this function so the time complexity will be 2n but 2 is a constant so O(n)
// space complexity = O(n)
// console.log(reverseWords("the.sky.is.blue"));
// console.log(reverseWords("a good   example"));


// const rvrse = function(s){

//     let word = '';
//     for(let i = 0; i<s.length; i++){
//         while(s[i]!== '.'){
//             word += s[i];
//             i++;
//         }
//         let reverse = '';
//         for(let j = word.length; j>0; j--){
//             reverse += word[j];
//         }
//         reverse += '.';
        
//     }
//     return reverse;
// }

// console.log(rvrse("pqr.mno"));

const rvrse = function(s) {
    let reverse = '';
    let word = '';
    for (let i = 0; i < s.length; i++) {
        while (s[i] !== '.' && i < s.length) {
            word += s[i];
            i++;
        }
        let reversedWord = '';
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        reverse += reversedWord;
        if (i < s.length) {
            reverse += '.';
        }
        word = ''; // Reset the word variable
    }
    return reverse;
}

console.log(rvrse("pqr.mno")); // Output: rqp.onm
