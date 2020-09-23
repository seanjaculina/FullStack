class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

class Heap {
  constructor() {
    this.heapElements = [];
  }

  // inserting into a heap is very particular - we need to make sure it has parents that are greater than or less than this element depending if it is a min/max heap
  insert(value) {
    this.heapElements.push(value);

    let currIndex = this.heapElements.length - 1; // get the last element (which is element we just inserted)
    let parentOf = Math.floor((currIndex + 1) / 2) - 1; // find its parent

    // while
    while (
      parentOf !== 0 &&
      this.heapElements[currIndex] > this.heapElements[parentOf] // > since we are making a max heap
    ) {
      const parent = this.heapElements[parentOf];
      this.heapElements[parentOf] = value;
      this.heapElements[currIndex] = parent;
      currIndex = parentOf;
      parentOf = Math.floor((currIndex + 1) / 2) - 1;
    }
  }
}

const heap = new Heap();

heap.insert(85);
heap.insert(250);
heap.insert(101);
heap.insert(197);
heap.insert(12);
heap.insert(15);
heap.insert(40);

console.log(heap);
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
 *
 *
 * const heap = [250, 197, 85, 101, 12, 40, 15]
 *
 * get parent of 15 in the head --> Math.floor((heap[heap.length-1] + 1) / 2) - 1
 *
 */
