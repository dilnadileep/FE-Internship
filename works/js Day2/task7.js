

//concat() : Merges two or more arrays into a new array.

let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log("concat() : ",merged); 


//slice() : Returns a shallow copy of a portion of an array into a new array, without modifying the original array.

let arr3 = [1, 2, 3, 4, 5];
let sliced = arr3.slice(1, 4);
console.log("slice() : ",sliced); 


//splice() : Adds, removes, or replaces elements in an array

let arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 3); // Removes 3 elements starting from index 1
console.log("splice() : ",arr4); 


//indexOf() : Returns the first index at which a given element can be found, or -1 if it is not present.

let arr5 = [1,2,44,4,15,13,28];
let index = arr5.indexOf(13);
console.log(index);


// reverse() : Reverses the order of elements in an array.

let arr6 = [,4,3,2,1];
arr6.reverse();
console.log("reverse() : ",arr6);


//join() : Joins all elements of an array into a string, separated by a specified separator.

let arr7 = [1, 2, 3];
let joined_string = arr7.join("#");
console.log("join() : ",joined_string);


//every() : Tests whether all elements in the array pass the test implemented by the provided function.

let arr8 = [1,2,3,0];
let allPositive = arr8.every(x => x > 0);
console.log("every() : ",allPositive); 


//sort() : Sorts the elements of an array in place and returns the array.

let arr9 = [3, 11, 14, 10, 25];
arr9.sort((a, b) => a - b);  //comparison , if a-b results negetive then b comes after a
console.log("sort() : ",arr9); 


//include() : Determines whether an array contains a certain value, returning true or false.

let arr10 = [1,2,3];
let sample = arr10.includes(2);  //check wether 2 contains in this array
console.log("include() : ",sample);  


//find() : Returns the value of the first element that satisfies the provided testing function.

let arr11 = [1,2,3,4,6];
let demo = arr11.find(num => num > 2);    //here the condition folowing 3,4,&6 , so the first element satisfying the condition is 3 so 3 will be the output
console.log("find() : ",demo);  