/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Scorpaphin';
animal['name'] = 'Larry';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises.unshift('moo');
noises[2] = 'quack';
noises.push('meow');
noises.push('roar');
console.log(noises.length);
console.log(noises);
console.log(noises[noises.length-1]);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

for (var i = 0; i < noises.length; i++){
  animal.noises.push(noises[i]);
 } 
 
 
 console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
     obj.property //dot notation
     obj['property'] //bracket notation
 *
 * 2. What are the different ways of accessing elements on arrays?
     arr[0] //index
     for (var i = 0; i < array.length; i++)
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);

var lion = {
    species: 'lion',
    name: 'Lee the Lion',
    noises: ['roar', 'cough', 'sneeze'],
    };
    animals.push(lion);
    
var whale = {
    species: 'whale',
    name: 'Tillikum',
    noises: ['woosh', 'laugh', 'splash'],
};
animals.push(whale);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using data structure array because I want to create a list of friends
//for the animals, and I want to be able to 
var friends = [];

function getRandom(){
    return animals[Math.floor(Math.random() * 5)];
}
var randomAnimal = getRandom();
friends.push(randomAnimal.name);
console.log(friends);
animal['friends'] = friends;
console.log(animal);



/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
