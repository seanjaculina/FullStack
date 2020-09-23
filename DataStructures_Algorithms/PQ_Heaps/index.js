class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

/**
 * insert : O(N) worst-average / O(1) best
 * process : O(1)
 */
class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);

    // if not empty and priority of this new element is greater than the current head
    if (!this.first || priority > this.first.priority) {
      // make the new nodes next point to the old first
      newNode.next = this.first;
      // then reset the first to be this newly inserted node
      this.first = newNode;
    } else {
      let curr = this.first;
      // while there is a next node and the priority of this item to insert is smaller than each nect nodes priority
      while (curr.next && priority < curr.next.priority) {
        curr = curr.next;
      }

      // insert somewhere in the middle or end, etc. this preserves the link to the next node
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }

  // will return the highest priority item
  process() {
    const first = this.first;
    this.first = this.first.next;
    return first;
  }
}

// new instance of a PQ
const pq = new PriorityQueue();

pq.insert("Clean room", 100);
pq.insert("Study for SAP", 105);
pq.insert("Sleep", 1);

console.log(pq);

/**
 * Heaps - heaps are trees that are special
 *
 * Min and Max heaps -
 *  min: parent node value is smaller than children for every level
 *  max : parent node value is larger than chuldren for every level
 *
 * min/max heaps have many use cases for prioritizing order of small to big or big to small
 * data (used a lot in interviews) - we implement heaps using a priority queue as an array! super cool
 */
