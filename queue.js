class Queue {
  //creating class constructor
  constructor() {
    this.items = [];
  }

  //adds an element to the end of the queue
  enqueue(item){
    this.items.push(item);
  }

  //removes an element from the start of the queue
  dequeue(item){
    return this.items.shift();
  }

  //retrieves the element at the start of the queue, without removing it
  peek(item){
    return this.items[0];
  }

  //checks if the queue is empty
  isEmpty(){
    return this.items.length === 0;
  }
}

const queue = new Queue();
console.log(queue);

console.log(queue.isEmpty());

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');
console.log(queue);

console.log(queue.isEmpty());

console.log(queue.peek());

queue.dequeue();
console.log(queue.peek());

queue.dequeue();
console.log(queue.peek());

queue.dequeue();
console.log(queue.peek());