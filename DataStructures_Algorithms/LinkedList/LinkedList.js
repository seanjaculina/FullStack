//Like java and python we need to create a Node CLASS -> C++ would be a struct
class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

//Our linked list ADT
class LinkedList {
  //defines head/tail and length to null/0 initially
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //O(1) -> this version of push in O(1) however often versions are O(N) where we search to the end then insert
  push (val) {
    //increment length
    this.length++;

    //create a new node
    let newNode = new Node (val);

    //if no head, assign the head/tail to be this new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    //otherwise, set tails next to the new node and re-assign tail to this node
    this.tail.next = newNode;
    this.tail = newNode;

    //return the whole list [this refers to the object we are refferring to]
    return this;
  }

  // O(N) average, O(1) best -> insert to a specific position
  insert () {}

  remove (val) {
    if (!this.head) {
      return undefined;
    }

    //if head is the value to delete
    if (this.head.val === val) {
      let curr = this.head.next;
      this.head = curr;
      //decrememnt length
      this.length--;
    }

    let curr = this.head;
    let prev = null;

    while (curr.next && curr.val !== val) {
      prev = curr;
      curr = curr.next;
    }

    //broke for either end of list or found: check both
    if (curr.next === null) {
      if (curr.val === val) {
        prev.next = null;
        this.tail = prev;
        this.length--;
      }
    } else {
      prev.next = curr.next;
      this.length--;
    }
  }

  //returns -1 or th eposition found in the list
  get (val) {
    if (!this.head) {
      return false;
    }

    let pos = 0;
    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        return pos;
      }
      curr = curr.next;
      pos++;
    }
    return -1;
  }
  reverse () {}

  // displays the whole list
  log () {
    if (!this.head) {
      return;
    } else {
      let curr = this.head;
      while (curr) {
        console.log (curr.val + ' ');
        curr = curr.next;
      }
    }
  }
}

let list = new LinkedList ();

count = 0;
let getValues = [1, 4, -3, 10, 8, 9, 77];
while (count < 7) {
  list.push (getValues[count]);
  count++;
}

// // console.log (list.pop ()); // empty

// console.log (list);

// list.remove (1);
// list.remove (77);
// list.remove (9);
//list.remove (4);
// console.log (list.get (11000));
console.log (list.get (77));
