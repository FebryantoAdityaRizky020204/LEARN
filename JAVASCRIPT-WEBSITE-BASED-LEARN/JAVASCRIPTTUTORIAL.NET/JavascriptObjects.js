{{ 
    console.log('halo');
}}

console.log("start here");
//  TODO: JavaScript Objets Method
let person = {
    firstName: 'John',
    lastName: 'Doe'
}

person.greet = function() {
    console.log('Hello');
}

person.greet()

//! ATAU - Sama Saja
function greet() {
    console.log('Hello');
}

person.greet = greet;
person.greet();


//! ATAU - ShotHand [Sama Saja]
let personDua = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log('Hello');
    },
    // This Value
    getFullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}
console.log(personDua.getFullName());
personDua.greet();

// TODO: JavaScript Constructor Function
function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName
    }
}

let persons2 = new Person('John', 'Die')
console.table(persons2.getFullName());
// ! The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.
// ? To resolve this, you can use the prototype so that all instances of a custom type can share the same methods.
function Person(firstName, lastName){
    // ini untuk mencegah kesalahan penulisan, tanpa new, karena jika tidak menggunakan itu, tidak bisa menggunakan 'this'
    if (!new.target) {
        return new Person(firstName, lastName);
    }
    this.firstName = firstName
    this.lastName = lastName

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName
    }
}

// TODO: JavaScript Prototype



