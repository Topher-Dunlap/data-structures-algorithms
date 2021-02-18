class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.index = 0;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
        this.index++;
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        let tempNode = this.head;

        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
        this.index++;
    }

    insertBefore(item, targetValue) {
        if (this.head === targetValue) {
            this.insertFirst(item);
        }
        let currNode = this.head;
        let previousNode = this.head;

        while(currNode.value !== targetValue){
            previousNode = currNode;
            currNode = currNode.next;
        }

        if(currNode.value === targetValue){
            previousNode.next = new _Node(item, currNode);
            this.index++;
        }
    }

    insertAfter(item, targetValue) {
        if (this.head === targetValue) {
            this.insertFirst(item);
        }
        let currNode = this.head;
        let forwardNode = this.head;

        ///Traverse through list
        while(currNode.value !== targetValue){
            currNode = currNode.next;
        }

        ///assign forwardNode to node after target
        if(currNode.value === targetValue){
            forwardNode = currNode.next; ///assign forwardNode to node after target
            currNode.next = new _Node(item, forwardNode); //insert new node at target.next
        }
        this.index++;
    }

    insertAt(item, idx){
        //if index is out of range
        if (idx > 0 && idx > this.index) {
            return
        }
        if (idx === 0) {
            this.insertFirst(item);
        }

        const node = new _Node(item);
        let currNode, previous

        //set current to first
        currNode = this.head;
        let count = 0;

        while(count < idx) {
            previous = currNode //Node before index
            count ++;
            currNode = currNode.next; //node after index
        }

        node.next = currNode;
        previous.next = node;

    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next !== null) {
                currNode = node.next;
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item){
        if(!this.head){
            return null;
        }
        if(this.head.value === item){
            this.head = this.head.next;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode.next === null){
            return "Item Not Found";
        }
        previousNode.next = currNode.next;
        this.index--;
    }

    reverse() {
        let currNode = this.head;
        let previous = null;
        let tmp = null;

        while (currNode) {
            // save next before we overwrite node.next!
            tmp = currNode.next;
            // reverse pointer
            currNode.next = previous;
            // step forward in the list
            previous = currNode;
            currNode = tmp;
        }
        return previous;
    }

    printLinkedList() {
        let currNode = this.head;
        while (currNode){
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
}

/////////////singly linked list
function main() {
    const SLL = new LinkedList;
    const nameArray = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];
    nameArray.map( name => SLL.insertLast(name) );
    SLL.remove("Husker");
    SLL.insertLast("Tauhida");
    SLL.insertBefore("Athena", "Helo");
    SLL.insertAfter("Hotdog", "Helo");
    SLL.insertAt("Kat", 3);
    SLL.printLinkedList();
}

main()
