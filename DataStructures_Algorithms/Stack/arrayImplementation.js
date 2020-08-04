class Stack {
  // Internally store an array to represent our ADT
  constructor() {
    this.items = [];
  }

  // O(1)
  push(data) {
    this.items.push(data);
  }

  // O(1)
  pop() {
    if (this.isEmpty()) return;
    return this.items.pop();
  }

  // O(1)
  size_() {
    return this.items.length;
  }

  // O(N)
  has(data) {
    let ptr = 0;
    while (ptr < this.items.length) {
      if (this.items[ptr] === data) return true;
      ptr++;
    }
    return false;
  }

  // O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // O(1)
  repr() {
    return this.items.slice();
  }
}

const stk = new Stack();

// console.log(stk.pop());
// stk.push(100);
// stk.push(10);
// stk.push(0);
// console.log(stk.has(-89));
// console.log(stk.has(10));
// console.log(stk.isEmpty());
// console.log(stk.repr());
