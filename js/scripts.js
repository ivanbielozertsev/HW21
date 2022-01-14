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

// function find(callback, array) {
//     let value = null
//     for (let i = 0; i < array.length; i++) {
//         if (callbackValue(array[i], i, array)) {
//             value = array[i];
//         }
//     }
//     return value;
// }


// findIndex

// function findIndex(callback, array) {
//     let value = null

//     for (let i = 0; i < array.length; i++) {
//         if (callbackValue(array[i], i, array)) {
//             value = i;
//         }
//     }
//     return value;
// }


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

// function every(callback, array) {
//     if (array.length === 0) {
//         return
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === undefined && !callbackValue(array[i], i, array)) {
//             return false
//         } 
//     }
//     return true
// }


// some


// function some(callback, array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== undefined && callbackValue(array[i], i, array)) {
//             return true
//         }
//     }
//     return false
// }

