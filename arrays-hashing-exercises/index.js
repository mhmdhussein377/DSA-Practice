// Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const elements = {}
    let result = false
    for(let i = 0; i < nums.length; i++) {
        if(!elements[nums[i]]) {
            elements[nums[i]] = 1
            continue
        }

        elements[nums[i]] += 1
    }

    for(let i = 0; i < Object.values(elements).length; i++) {
        if(elements[i] > 1) {
            result = true
        }
    }
    return result

};

// First Attempt:
// I initially solved this problem using a less readable approach,
// where I used two loops to track element occurrences.
// While it worked, the code was not as clear.
// Refactored to a more concise and readable solution.

var containsDuplicate = function(nums) {
    const elements = {}

    // Refactored Solution:
    // Using a single loop and a hash map to efficiently check for duplicates.

    for(const num of nums) {
        if(elements[num]) {
            return true
        }

        elements[num] = true
    }

    return false
}


// ####################
// ####################


// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// First Solution:
// The initial solution used a basic approach by sorting the strings,
// resulting in a time complexity of O(n log n) due to the sorting algorithm.

var isAnagram = function(s, t) {
    
    const sortedS = s.split("").sort().join("")
    const sortedT = t.split("").sort().join("")
    
    return sortedS === sortedT
};

// Second Solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Improved the solution to achieve a time complexity of O(n) by using
// character frequency counting instead of sorting. This approach is more
// efficient, especially for longer strings.


var isAnagram = function(s, t) {
    
    if(s.length !== t.length)
        return false
    
    const sCharCount = {}

    for(const letter of s) {
        if(!sCharCount[letter]) {
            sCharCount[letter] = 1
        }

        sCharCount[letter]++
    }

    const tCharCount = {}

    for(const letter of t) {
        if(!tCharCount[letter]) {
            tCharCount[letter] = 1
        }

        tCharCount[letter]++
    }

    for(const [key, value] of Object.entries(sCharCount)) {
        if(!tCharCount[key] || tCharCount[key] !== sCharCount[key]) {
            return false
        }
    }

    return true
};




// #############
// #############

// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.




// Utilizes a hash map to store elements and their indices in a single pass.
// Achieves a time complexity of O(n), where n is the length of the nums array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const chars = {}
    for(let i = 0; i < nums.length; i++) {
        if(!chars[nums[i]]) {
            chars[nums[i]] = i
        }
    }
    
    // Find the two numbers that add up to the target
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(chars[complement] && chars[complement] !== i) {
            return [i, chars[complement]]
        }
    }

    return null
};