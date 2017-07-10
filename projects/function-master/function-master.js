 
//objectValues should take an object and return an array
function objectValues(object){
    var arr = [];
    for (var key in object){
        var objVal = object[key];
        arr.push(objVal);
        
    }
    return arr;
}

//keytostring

function keysToString(object){
    var keysArray = Object.keys(object);
    var keyString = keysArray.join(" ");
    return keyString;
}


//VALUES TO STRONG

function valuesToString(object){
  var str = '';
  var arr = [];
  for (var key in object){
    var value = object[key];
    if (typeof value === "string"){
      arr.push(value);
       }
       
  } 
  str = arr.join(" ");
  return str;
  
}


//ARRAY OR OBJECT

function arrayOrObject(test){
  var result = "";
    if (Array.isArray(test)){
        result = "array";
    } else if (typeof test === 'object'){
        result = "object";
    }
    
    return result;
}

//CAPITALIZE WORD

function capitalizeWord(word){
    var firstLetter = word[0];
    var upperCase = firstLetter.toUpperCase();
    var sliceLetters = word.slice(1);
    var completeWord = upperCase + sliceLetters;
    return completeWord;
}


//CAPITALIZE ALL WORDS

function capitalizeAllWords(string){
  var useArray = string.split(" ");
  var newArray = [];
  for (var i = 0; i < useArray.length; i++) {
    newArray.push(useArray[i].charAt(0).toUpperCase() + useArray[i].substr(1));
  } return newArray.join(" ");
}

//WELCOME MESSAGE

function welcomeMessage(object){
  
  for(var key in object){
    var upper = object[key].charAt(0).toUpperCase();
    var latterWords = object[key].slice(1);
    var word = upper + latterWords;
    var complete = "Welcome " + word +"!";
    return complete;
    
  
  }
  
  
    // var myObj = object.name;
    // var firstLetter = myObj;
    // var upperCase = object.name.upperCase();
    // var latterLetters = myObj.slice(1);
    // var completeWord = upperCase + latterLetters;
    // var welcome = "Welcome " + completeWord + "!";
    // return welcome;
}

//PROFILE INFO

function profileInfo(object){
  var objName = object.name;
  var objSpecies = object.species;
  var firstLetterName = objName.charAt(0);
  var firstLetterSpecies = objSpecies.charAt(0);
  var upperCaseName = firstLetterName.toUpperCase();
  var upperCaseSpecies = firstLetterSpecies.toUpperCase();
  var latterLettersName = objName.slice(1);
  var latterLettersSpecies = objSpecies.slice(1);
  var completeName = upperCaseName + latterLettersName;
  var completeSpecies = upperCaseSpecies + latterLettersSpecies;
  return completeName + " is a " + completeSpecies;
}


//MAYBE NOISES
function maybeNoises(object) {
    var getNoises = [];
  if (object.noises) {
     if (object.noises.length > 0) {
         for (var i =0; i < object.noises.length; i++) {
           getNoises.push(object.noises[i]);
    }
       return getNoises.join(" ");
       } 
     }
  return "there are no noises";
}

//HAS WORD
function hasWord(data, word){
        if (data.match(word)){
          return true;
        }
        else {
          return false;
        }
      }
      
//ADD FRIEND
 function addFriend(name, object){
        object.friends.push(name);
        return object;
      }
      

//ISFRIEND

 function isFriend(name, object){
        
        for(var key in object){
          if(object[key][0] === name || object[key][1] === name){
            return true;
          }
        }
        
        return false;
      }
isFriend();


function nonFriends(name, array){
  var arr = [];
  for(var i = 0; i < array.length; i++){
    if(array[i].friends[0] === name || array[i].friends[1] === name){
    }else{
     if(array[i].name !== name){
         arr.push(array[i].name);
     }
    }
  }
  return arr;
}
nonFriends();

function updateObject(obj, key, value){
  
    obj[key] = value;
  
  
  return obj;
}
updateObject();

function removeProperties(obj, arr){
  //obj, arr as parameters
  //remove property on object listed in array
for(var i=0; i< arr.length; i++){
  delete obj[arr[i]];
}

  return obj;
  
}
removeProperties();

function dedup(array){
  var newArr = [];
  
  for(var i = 0; i < array.length; i++){
    var indexter = array.indexOf(array[i]);
    if(indexter === i){
      newArr.push(array[i]);
    }
  }
  
  return newArr;
}
