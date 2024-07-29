// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function(temperatures) {
//     let answer = new Array(temperatures.length).fill(0); // Initialize the answer array with 0s

//     for (let i = 0; i < temperatures.length; i++) {
//         for (let j = i + 1; j < temperatures.length; j++) {
//             if (temperatures[j] > temperatures[i]) {
//                 answer[i] = j - i; // Store the number of days until a warmer temperature
//                 break; // Exit the inner loop once the next warmer temperature is found
//             }
//         }
//     }
    
//     return answer; // Return the answer array
// };
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length).fill(0); // Initialize the answer array with 0s
    let stack = []; // Initialize an empty stack

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let j = stack.pop(); // Get the index from the top of the stack
            answer[j] = i - j; // Calculate the number of days and store it in the answer array
        }
        stack.push(i); // Push the current index onto the stack
    }

    return answer; // Return the answer array
};
