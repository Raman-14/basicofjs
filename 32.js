// how to itirate objects

const person = {
    name: "Raman",
    age: 22,
    "person hobbies": ["guitar", "keyboard", "harmonica"]
}

// ab isko itirate krna hai toh iske liye
// for in loop
// object.keys

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

for(let key of Object.keys(person)){
    console.log(person[key]);
}