let a1 = [11, 7, 1, 13, 21, 3, 7, 3];
let a2 = [11, 3, 7, 1, 7];

function find(a1, a2) {
    let j = 0;
    for (let i = 0; i < a2.length; i++) {
        let found = false;
        for (let k = 0; k < a1.length; k++) {
            if (a2[i] === a1[k]) {
                found = true;
                a1.splice(k, 1); // Remove the found element from a1
                break;
            }
        }
        if (!found) {
            return "no";
        }
    }
    return "yes";
}

console.log(find(a1, a2));  // Output: yes
