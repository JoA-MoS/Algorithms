// Definition for singly-linked list:
const util = require('util');

function ListNode(x) {
    this.value = x;
    this.next = null;
}

ListNode.prototype.add = function (val) {
    // console.log(this);
    let r = this;
    while (r.next) {
        r = r.next;
    }
    r.next = new ListNode(val);
    return r;
};

function countToEnd(n) {
    let c = 0;
    while (n) {
        c++;
        n = n.next;
    }
    console.log(c);
    return c;
}


function reverse(head) {
    var w = head;
    var r = head.next || null;
    while (r) {
        var temp = r.next;
        r.next = w;
        w = r;
        r = temp;
    }
    head.next = null;
    head = w;
    return head;
}

function reverseNodesInKGroups(l, k) {
    if (countToEnd(l) < k) {
        return l;
    }
    var w = l;
    var r = w.next || null;
    var s = 1;
    while (s < k) {
        var temp = r.next;
        r.next = w;
        w = r;
        r = temp;
        s++;
    }
    l.next = reverseNodesInKGroups(r, k);
    l = w;
    return l;
}


function reverseNodesInKGroups2(l, k) {

    var w = l;
    var r = w.next || null;
    var s = 1;
    while (s < k) {
        var temp = r.next;
        r.next = w;
        w = r;
        r = temp;
        s++;
    }
    l.next = reverseNodesInKGroups(r, k);
    l = w;
    return l;
}


let lst = new ListNode(1);
lst.add(2).add(3).add(4).add(5).add(6);
console.log(JSON.stringify(lst));
lst = reverseNodesInKGroups(lst, 6);
console.log(JSON.stringify(lst));
// console.log(JSON.stringify(lst));


