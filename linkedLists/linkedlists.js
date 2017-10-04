function Sll() {
    this.head = null;
    this.tail = null;
    this.count = 0;


}


Sll.prototype.push = function (val) {

    //if head and tail then set head and tail = val
    //if tail then tail.next = val

    temp = new node(val)
    if (!this.head) {
        this.head = this.tail = temp;
    } else {
        this.tail.next = temp;
        this.tail = temp;
    }
    this.count++;
}


function node(val) {
    this.value = val;
    this.next = null
}


ll = new Sll()

ll.push(1);
ll.push(2);
ll.push(3);

console.log(ll);
