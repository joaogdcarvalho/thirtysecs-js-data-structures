class DoublyLinkedList {
  constructor() {
    this.nodes = [];
  }

  // The number of elements in the doubly linked list
  get size() {
    return this.nodes.length;
  }

  // The first element in the doubly linked list
  get head() {
    return this.size ? this.nodes[0] : null;
  }

  // The last element in the doubly linked list
  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }

  // Inserts an element at the specific index
  insertAt(index, value) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode, previous: previousNode };

    if (previousNode) previousNode.next = node;
    if (nextNode) nextNode.previous = node;
    this.nodes.splice(index, 0, node);
  }

  insertFirst(value) {
    this.insertAt(0, value);
  }

  insertLast(value) {
    this.insertAt(this.size, value);
  }

  // Retrieves the element at the specific index
  getAt(index) {
    return this.nodes[index];
  }

  // Removes the element at the specific index
  removeAt(index) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index + 1] || null;

    if (previousNode) previousNode.next = nextNode;
    if (nextNode) nextNode.previous = previousNode;

    return this.nodes.splice(index, 1);
  }

  // Empties the doubly linked list
  clear() {
    this.nodes = [];
  }

  // Reverses the order of elements in the doulby linked list
  reverse() {
    this.nodes = this.nodes.reduce((acc, { value }) => { 
      const nextNode = acc[0] || null;
      const node = {value, next: nextNode, previous: null };
      if (nextNode) nextNode.previous = node;
      return [node, ...acc];
    }, []);
  }

  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}

const list = new DoublyLinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);

console.log(list.size);
console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.tail.value);
console.log(list.tail.previous.value);
//[...list.map(e => e.value)];

console.log(list.removeAt(1));
console.log(list.getAt(1).value);
console.log(list.head.next.value);
//[...list.map(e => e.value)];

list.reverse();
console.log(list);
//[...list.map(e => e.value)];

list.clear();
console.log(list);

console.log(list.size);