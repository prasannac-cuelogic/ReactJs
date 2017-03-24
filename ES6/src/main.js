"use strict"

var a = 'Test1';
let b = 'Test2'

function testVar() {
    var a = 'Test1';
    if (true) {
        var a = 50;
        console.log(a);
    }
    console.log(a);
}

testVar();


function testlet() {
    let a = 30;
    if (true) {
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

testlet();


const colors = [];

colors.push("green");
colors.push("red");

console.log("colors", colors);