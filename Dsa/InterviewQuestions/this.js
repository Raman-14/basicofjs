// object method ke andar 'this' refer kiya jaata hai object ko

const obj = {
    name: 'Raman',
    greet: function(){
        console.log('hello, ' + this.name);
    }
};

obj.greet();

// jab function ko as a constructor use kiya jaata hai new keyword ke sath, this refer kiya jaata hai newly created instance ko object ka.

// constructors ka use object ka multiple instance bnane ke liye kiya jaata hai similar properties aur method ke sath.

function person(name){
    this.name = name;
}

const person1 = new person('alice');
console.log(person1.name);