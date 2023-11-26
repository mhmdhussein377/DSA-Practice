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




// #############
// #############

// Remove Linked List Elements


// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []


// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50



// SOLUTION


/**
 * Removes all nodes with the specified value from a singly-linked list.
 * The function iterates through the list, skipping nodes with the target value,
 * and connects the remaining nodes to create an updated linked list.
 * 
 * Time Complexity: O(n), where n is the number of elements in the linked list.
 * The function traverses the entire list once.
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = newList =  new ListNode()
    current.next = head

    while(current.next) {
        if(current.next.val === val) {
            current.next = current.next.next
        }else {
            current = current.next
        }
    }

    return newList.next
};



// ############
// ############


// Middle of the Linked List


// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.


// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100


// SOLUTION

/**
 * Returns the middle node of a given singly-linked list.
 *
 * Uses the two-pointer approach with a slow and a fast pointer.
 * The slow pointer moves one step at a time, while the fast pointer moves two steps.
 * When the fast pointer reaches the end, the slow pointer is at the middle.
 *
 * Time Complexity: O(n), where n is the number of nodes in the linked list.
 * The function traverses the list once, with both pointers covering the entire list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = fast = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
};




// ################
// ################


// Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []


// * Solution Explanation:
// * Initialize three pointers: prev (null), next (null), and curr (head).
// * Iterate through the list, update pointers to reverse the direction of links.
// * Return the reversed list's new head (prev).

// * Note: I initially encountered a 'next' variable issue in my solution. Later, I found a similar solution online
// * that addressed this efficiently. The time complexity is O(n), where n is the number of nodes in the linked list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let prev = null;
    let next = null;
    let curr = head;

    while(curr) {
        next = curr.next

        curr.next = prev

        prev = curr

        curr = next
    }

    return prev
};



// *************
// *************

// Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]


// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]



// SOLUTION

// * Solution Explanation:
//  * Iterate through the list. If a duplicate is found, update the 'next' pointer to skip the duplicate node.
//  * Continue the iteration until the end of the list. The modified list has no duplicate nodes.
//  * 
//  * Time Complexity: O(n), where n is the number of nodes in the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;

    while(current) {
        if(current.next && current.next.val === current.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head
};