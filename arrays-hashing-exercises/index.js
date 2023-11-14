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