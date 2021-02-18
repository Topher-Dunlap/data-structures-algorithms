class node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if(this.top === null){
            this.top = new node(data, null);
            return this.top;
        }
        const newNode = new node(data, this.top);
        this.top = newNode;
    }

    pop() {
        const newNode = this.top;
        this.top = newNode.next;
        return newNode.data
    }

    peek() {
        return this.top.data;
    }

    isEmpty() {
        return this.top === 0;
    }

    print() {
        var top = this.top - 1; // because top points to index where new    element to be inserted
        while(top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }
}

const starTrek = new Stack;
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
starTrek.print();
