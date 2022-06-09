// STACK - DATA STRUCTURE LIFO (LAST IN FIRST OUT)

class Stack {
  //creating class constructor
  constructor() {
    this.items = [];
  }

  //adds an element to the end of the stack
  push(item){
    this.items.unshift(item);
  }

  //removes an element from the top of the stack
  pop(item){
    return this.items.shift();
  }

  //retrieves the element at the top of the stack, without removing it
  peek(item){
    return this.items[0];
  }

  //checks if the stack is empty
  isEmpty(){
    return this.items.length === 0;
  }
}

const stack = new Stack();
console.log(stack);

console.log(stack.isEmpty());

stack.push('APPLES');
stack.push('BANANAS');
stack.push('COCONUT');
stack.push('PEARS');
stack.push('ORANGES');
console.log(stack);

console.log(stack.isEmpty());

console.log(stack.peek());

stack.pop();
console.log(stack.peek());

stack.pop();
console.log(stack.peek());

stack.pop();
console.log(stack.peek());

stack.pop();
console.log(stack.peek());

stack.pop();
console.log(stack.peek());

console.log(stack.isEmpty());