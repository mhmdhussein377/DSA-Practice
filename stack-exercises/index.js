// Easy
// Valid Parentheses


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// SOLUTION

// isValid function checks the validity of a string containing only three types of characters: '(', ')', '{', '}', '[' and ']'.
// It uses a stack to keep track of the opening brackets encountered. When a closing bracket is encountered, it checks if
// the corresponding opening bracket is at the top of the stack. If yes, it pops the opening bracket; otherwise, it pushes
// the closing bracket onto the stack. The string is valid if the stack is empty at the end.
//
// Time Complexity: O(n), where n is the length of the input string 's'. The function iterates through each character in 's'
// once, and each operation (push, pop) on the stack takes constant time.

/**
 * @param {string} s
 * @return {boolean}
 */
var isComplement = function(input) {

}
var isValid = function(s) {
   const arr = []
   for(const char of s) {
       if(char === ")" && arr[arr.length - 1] === "(") {
           arr.pop()
       }else if (char === "}" && arr[arr.length - 1] === "{") {
           arr.pop()
       }else if (char === "]" && arr[arr.length - 1] === "[") {
           arr.pop()
       } else {
           arr.push(char)
       }
   }

   return !arr.length
};



// *****************
// *****************

// MEDIUM
// Removing Stars From a String


// Example 1:

// Input: s = "leet**cod*e"
// Output: "lecoe"

// Example 2:

// Input: s = "erase*****"
// Output: ""
// Explanation: The entire string is removed, so we return an empty string.


// SOLUTION

// * Solution Explanation:
//  * Iterate through the input string using a stack to keep track of characters.
//  * For each character, if it is an asterisk, pop the top element from the stack (if it exists),
//  * effectively removing the adjacent pair of asterisks. Otherwise, push the character onto the stack.


/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = []
    
    for(const letter of s) {
        letter === "*" ? stack.pop() : stack.push(letter)
    }

    return stack.join("")
};