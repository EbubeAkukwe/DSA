/*
Problem Description:
Merge two sorted linked lists, list1 and list2, into a single sorted linked list.
Return the head of thr merged linked list.

Algorithm:


Big O:

Time complexity => O(m+n)
Space complexity => O()

*/

//Code

class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

function merge_linked_list2(list1, list2){
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;

    return dummy.next;
}

function arrayToLinkedLists(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next
    }

    return dummy.next;
}

let l2 = arrayToLinkedLists([0,1])
let l5 = arrayToLinkedLists([3,4])

//Test case
console.log(merge_linked_list2(l2,l5)) //Expected output: [1,3,4,5,6,6]