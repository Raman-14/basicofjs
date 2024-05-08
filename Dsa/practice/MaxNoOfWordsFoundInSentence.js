var mostWordsFound = function(sentences) {
    let max = 0;
    let sent = [","];
    for(let i = 0; i<sentences.length; i++){
             sent = sentences[i].split(" ");
        for(let j = 0; j<sentences.length; j++){
            if(sent.length>max){
                max = sent.length;
            }
        }
    }
    return max;
};

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences));