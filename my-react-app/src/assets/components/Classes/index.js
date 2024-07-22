import React, { Component } from 'react'
class human {
    constructor() {
        this.age = 25;
    }
    printAge() {
        console.log(this.age)
    }
}

class person extends human {
    constructor() {
        super();
        this.name = "abc";
        this.age = 50;
    }

    printName() {
        console.log(this.name);
    }
}

const persons = new person();
persons.printName();
persons.printAge();

//ES7 
// No need of constructor to declare varaiables... and methods are arrow functions
// no need to call super() also
class human {
    age = 25;

    printAge = () => console.log(this.age);
}

class person extends human {
    name = "abc";
    age = 50;
    printName = () => console.log(this.name);
}

const persons2 = new person();
persons2.printAge();