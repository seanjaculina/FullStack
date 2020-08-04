const { LinkedList } = require("../LinkedList/index"); // import the linked list DS we made in the LL dir [i export defaulted it]
// module.exports exports as an object therefore we must pull out the desired exported code - we pulled out the linked list

class Stack {
  constructor() {
    this.items = new LinkedList();
  }
}
console.log(new Stack());
