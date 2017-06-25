
//objectValues should take an object and return an array
function objectValues(object){
    var arr = [];
    for (var key in object){
        arr.push(object[key]);
        
    }
    return arr;
}

//keytostring

function keysToString(object){
    var str = '';
    for (var key in object){
        str.push(object[key] + " ");
    }
    return str;
}

function valuesToString(object){
  var str = '';
  var arr = [];
  for (var key in object){
    if (typeof object[key] === "string"){
      arr.push(key);
      str = arr.join(" ");
      
      
    }
  } return str;
  
}


function arrayOrObject(test){
    if (Array.isArray(test)){
        console.log('This is an array');
    } else if (typeof test === 'object'){
        console.log('object');
    }
}

function captializeWord(word){
    return word[0].toUpperCase();
}

function capitalizeAllWords(string){
  var useArray = string.split(" ");
  var newArray = [];
  for (var i = 0; i < useArray.length; i++) {
    newArray.push(useArray[i].charAt(0).toUpperCase() + useArray[i].substr(1));
  } return newArray.join(" ");
}

function welcomeMessage(object){
    return "Welcome" + object.name;
}

function profileInfo(object){
    var message = object.name.charAt(0).toUpperCase() + object.name.substr(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.substr(1);
}


 function isFriend(name, object){
        
        for(var key in object){
          if(object[key][0] === name || object[key][1] === name){
            return true;
          }//else{
        //       return false;
        //   }
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

function indexOf(array){
  var newArr = [];
  
  for(var i = 0; i < array.length; i++){
    var indexter = array.indexOf(array[i]);
    if(indexter === i && indexter !== -1){
      newArr.push(array[i]);
    }
  }
  
  return newArr;
}
indexOf();