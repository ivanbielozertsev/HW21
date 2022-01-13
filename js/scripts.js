// indexOf
// function indexOf(string, character) {
//     let i = 0;
//     while(i < string.length){
//         if(string[i] == character){              
//             return i
//         }
//         i++                          
//     }
//     return -1;                      
// }

// lastIndexOf
// function lastIndexOf(array, value) {
//     for(let i = array.length; i > 0; i--){
//       if(array[i] == value) return i;
//     }
//     return -1;
// }

// find
// const arr = [1, 2, 3]

// function find(callback, array) {
//     let value = null
//     for (let i = 0; i < array.length; i++) {
//         if (callbackValue(array[i], i, array)) {
//             value = array[i];
//         }
//     }
//     return value;
// }

// function callbackValue(item, index, array) {
//     return item === 1;
// }

// console.log(find(callbackValue, arr))

// findIndex
// const arr = [1, 2, 3]

// function findIndex(callback, array) {
//     let value = null

//     for (let i = 0; i < array.length; i++) {
//         if (callbackValue(array[i], i, array)) {
//             value = i;
//         }
//     }
//     return value;
// }

// function callbackValue(item, index, array) {
//     return item === 4;
// }

// console.log(findIndex(callbackValue, arr))



// includes
// function includes(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// every
// const arr = [3, 3, 3]

// function every(callback, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (!callbackValue(array[i], i, array)) {
//             return false
//         } 
//     }
//     return true
// }

// function callbackValue(value, index, array) {
//     return value === 3;
// }

// console.log(every(callbackValue, arr))

// some
// const arr = [5, 5, 5]

// function every(callback, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (callbackValue(array[i], i, array)) {
//             return true
//         } 
//     }
//     return false
// }

// function callbackValue(value, index, array) {
//     return value === 3;
// }

// console.log(every(callbackValue, arr))