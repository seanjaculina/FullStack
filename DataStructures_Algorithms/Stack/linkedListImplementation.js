const LinkedList = require("../LinkedList/index"); // import the linked list DS we made in the LL dir {no need to use curlies as it was the only exported value therefore was not exported as a whole object}

class Stack {
  constructor() {
    this.items = new LinkedList();
  }

  // O(N) - O(1) if tracking head in the linked list implementation
  push(data) {
    this.items.append(data);
  }

  // O(N)
  pop() {
    this.items.removeLast();
  }

  // O(1)
  size_() {
    return this.items.size_();
  }

  // O(N)
  has(data) {
    return this.items.find(data);
  }

  // O(1)
  isEmpty() {
    return this.size_() < 1;
  }

  // O(N)
  repr() {
    if (this.size_() < 1) return "Empty";
    return this.items.print();
  }
}

const stk = new Stack();

// stk.push(101);
// stk.push(100);
// stk.repr();
// console.log(stk.has(101));
// console.log(stk.isEmpty());
// console.log(stk.size_());
// stk.pop();
// console.log(stk.isEmpty());
// console.log(stk.repr());
