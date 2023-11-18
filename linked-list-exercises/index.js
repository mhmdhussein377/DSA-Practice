// EASY
// Merge Two Sorted Lists


// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// SOLUTION

/**
 * Merges two sorted linked lists into a single sorted linked list.
 *
 * Time Complexity: O(m + n), where m and n are the lengths of the input lists.
 * Explanation: The algorithm iterates through both input lists once, and in each
 * iteration, it compares the current nodes and advances the pointer of the smaller
 * node. The time complexity is linear with respect to the total number of nodes in
 * both lists.
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const result = currentNode = new ListNode()

    while(list1 && list2) {

        if(list1.val <= list2.val) {
            currentNode.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            currentNode.next = new ListNode(list2.val)
            list2 = list2.next
        }

        currentNode = currentNode.next
    }

    currentNode.next = list1 || list2

    return result.next
    
};