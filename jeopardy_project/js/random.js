
// function largestOfFour(arr) {
//   // You can do this!
//   var new_array = [];
//   for (var i=0; i < arr.length; i++){
//     var n = arr[i].sort(function(a,b){ return a-b})
//     new_array.push(n[n.length-1])
//     console.log(new_array)
//   }
//   return new_array;
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   if (typeof(bool) == "boolean"){
//     return true
//   } else {
//     return false
//   }
// }

// booWho(null);



// Setup
// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [
//         "Let It Rock",
//         "You Give Love a Bad Name"
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [
//         "1999",
//         "Little Red Corvette"
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // Only change code below this line
// function updateRecords(id, prop, value) {
//   if (prop === "tracks" && value !== ''){
//     if (collection[id][prop]){
//       collection[id][prop].push(value);
//     } else {
//       collection[id][prop] = [value];
//     }
//   }
//   else if (value !== ""){
//     collection[id][prop] = value;
//   } else {
//     delete collection[id][prop];
//   }



//   console.log(collection);
// }

// // console.log(collectionCopy[2548].tracks)
// updateRecords(1245, "tracks", "WHAT")

// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//   str = str.split(" ");
//   if (str[str.length-1] === target){
//     // return true;
//     console.log(str.length)
//   } else {
//     console.log(str[str.length-1])
//   }
// }

// confirmEnding("Bastian", "n");


// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   var a = []
//   while (a.length < num){
//     a.push(str);
//   }
//   console.log(a.join(''));
// }

// repeatStringNumTimes("*", 4);


// function truncateString(str, num) {
//   if (str.length > num){
//     console.log(str.substr(0,num) + '...');
//   }
//   return str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

// function isBigEnough(value) {
//   return value >= 10;
// }

// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered)

// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   var i;
//   arr = arr.concat(num);
//   console.log(arr)
//   arr = arr.sort(function(a,b){
//     return a-b;
//   });
//   num = arr.indexOf(num);
//   console.log(num);
// }

// getIndexToIns([40, 60], 50);
// function mutation(arr) {
//   var first = arr[0].toLowerCase();
//   var second = arr[1].toLowerCase();
//   var a;
//   var ind = [];
//   for (var i = 0; i < second.length; i++){
//     // if (arr[0].indexOf(second[i])) {
//       a = first.indexOf(second[i])
//       ind.push(a)
//       console.log(a)
//     // }

//   }
//   if (ind.includes(-1)){
//     return false
//   } else {
//     return true
//   }
// }

// mutation(["Mary", "Army"])


// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var fake = [];
//   for (var i = 0; i < arr.length+4; i++){
//     fake[i] = arr.splice(0, size);
//   }
//   console.log(fake);
//   console.log(arr)
// }

// // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
// // chunkArrayInGroups(["a", "b", "c", "d"], 2);
// // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)