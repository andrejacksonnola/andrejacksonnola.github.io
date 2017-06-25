/**
 * Part 2
 * 
 * In this file, we're going to create some 
 * Functions to work with our data created in
 * data.js.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    var result = '';
    result = null;
    for (var i = 0; i < animals.length; i++)
        if (animals[i].name === name){
            result = animals[i];
            return result;
        } 
    else {
        return result;
    }
}





//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals[i] = replacement;
            return animals;
        }
    } 
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals.splice([i],1);
            return animals;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    if (animal.name.length > 0 && animal.species.length > 0){
    for (var i =0; i < animals.length; i++){
        if (animals[i].name.toUpperCase() === animal.name.toUpperCase()){
            return;
        }
    }
      return animals.push(animal);
   }
}
            
            
            
            
            
            
//             for (var i = 0; i < animals.length; i++){
//                 if (animals[i].name === animal.name){
//                     return animals;
//                 } else {
//                     animals.push(animal);
//                     return animals;
//                 }
//             }
//         }
//     }
// }
    


/** 
 * You did it! You're all done with Matchy!
 */
 
 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search;
    module.exports.replace = replace;
    module.exports.remove = remove;
    module.exports.add = add;
}