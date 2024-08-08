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
    let size = 0;
    let current = head;
    while (current !== null) {
        size++;
        current = current.next;
    }

let middleIndex = Math.floor(size / 2);
    
    current = head;
    for (let i = 0; i < middleIndex; i++) {
        current = current.next;
    }

    return current;
};
