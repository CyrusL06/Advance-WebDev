//NPM is the communnity tool library
//Code packages that anyone can use for everyone shared code 

//npm.innit helps us create our configuration file called package.json
//json is configuration file 
//magic happens is when we install NPM package

//npmjs.com is the package 
//instal the package 


 var generateName = require('sillyname');
//import generateName from "sillyname";
var sillyName = generateName();

//GENERATES THE NAME
//USE SOMEBODY CODE FOR OUR PURPOSES
console.log(`Hey my name is ${sillyName}.`);


/////////////////////////////
//SUPERHERP NAME
//////////////////////////////

const superheroes = require("superheroes");


const name = superheroes.random();

console.log(`SUPERHERO NAME IS ${name}!!!`);
