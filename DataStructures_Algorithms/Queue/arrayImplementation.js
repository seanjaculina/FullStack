class Queue {
  constructor() {
    this.queue = [];
  }

  // pushes the data on to the queue -> O(1)
  enqueue(data) {
    this.queue.push(data);
  }

  // Removes the value at the front of the queue : shift() removes from front -> O(N) as we need to shift the whole arrays contents
  dequeue() {
    return this.queue.length > 0 ? this.queue.shift() : this.queue;
  }

  // Returns the size of the queue -> O(1)
  size() {
    return this.queue.length;
  }

  // Will return the queues current state -> O(1)
  print() {
    return this.queue;
  }

  // Will return to the caller the item in the front of the queue -> O(1)
  poll() {
    return this.queue.length > 0 ? this.queue[0] : this.queue;
  }
}

// Instantiate a new queue instance
const queue = new Queue();

// Testing methods
queue.enqueue(10);
queue.enqueue(1);
queue.enqueue(44);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(1000);
console.log(queue.print());
console.log(queue.poll());
