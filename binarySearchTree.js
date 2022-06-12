class BinarySearchTreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

class BinarySearchTree {
  constructor(key, value = key) {
    this.root = new BinarySearchTreeNode(key, value);
  }

  // Traverses the binary tree by recursively traversing each node's left child, followed by the node, followed by its right child
  *inOrderTraversal(node = this.root) {
    if (node.left) yield* this.inOrderTraversal(node.left);
    yield node;
    if (node.right) yield* this.inOrderTraversal(node.right);
  }

  // Traverses the tree by recursively traversing each node's children followed by the node
  *postOrderTraversal(node = this.root) {
    if (node.left) yield* this.postOrderTraversal(node.left);
    if (node.right) yield* this.postOrderTraversal(node.right);
    yield node;
  }

  // Traverses the tree by recursively traversing each node followed by its children
  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.left) yield* this.preOrderTraversal(node.left);
    if (node.right) yield* this.preOrderTraversal(node.right);
  }

  // Inserts a node as a child of the given parent node
  insert(key, value = key) {
    let node = this.root;
    while (true) {
      if (node.key === key) return false;
      if (node.key > key) {
        if (node.left !== null) node = node.left;
        else {
          node.left = new BinarySearchTreeNode(key, value, node);
          return true;
        }
      } else if (node.key < key) {
        if (node.right !== null) node = node.right;
        else {
          node.right = new BinarySearchTreeNode(key, value, node);
          return true;
        }
      }
    }
  }

  // Checks if a given node exists
  has(key) {
    for (let node of this.postOrderTraversal()) {
      if (node.key === key) return true;
    }
    return false;
  }

  // Retrieves a given node
  find(key) {
    for (let node of this.postOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }

  // Removes a node and its children from the tree
  remove(key) {
    const node = this.find(key);
    if (!node) return false;
    const isRoot = node.parent === null;
    const isLeftChild = !isRoot ? node.parent.left === node : false;
    const hasBothChildren = node.left !== null && node.right !== null;

    if (node.isLeaf) {
      if (!isRoot) {
        if (isLeftChild) node.parent.left = null;
        else node.parent.right = null;
      } else {
        this.root = null;
      }
      return true;
    } else if (!hasBothChildren) {
      const child = node.left !== null ? node.left : node.right;
      if (!isRoot) {
        if (isLeftChild) node.parent.left = child;
        else node.parent.right = child;
      } else {
        this.root = child;
      }
      child.parent = node.parent;
      return true;
    } else {
      const rightmostLeft = [...this.inOrderTraversal(node.left)].slice(-1)[0];
      rightmostLeft.parent = node.parent;
      if (!isRoot) {
        if (isLeftChild) node.parent.left = rightmostLeft;
        else node.parent.right = rightmostLeft;
      } else {
        this.root = rightmostLeft;
      }
      rightmostLeft.right = node.right;
      node.right.parent = rightmostLeft;
      return true;
    }
  }
}

const tr = new BinarySearchTree(30);
console.log(tr);

tr.insert(10);
tr.insert(15);
tr.insert(12);
tr.insert(40);
tr.insert(35);
tr.insert(50);
console.log(tr);

console.log([...tr.preOrderTraversal()].map(x => x.value));

console.log([...tr.inOrderTraversal()].map(x => x.value));

console.log([...tr.postOrderTraversal()].map(x => x.value));

console.log(tr.root.value);

console.log(tr.root.hasChildren);

console.log(tr.find(12).isLeaf);
console.log(tr.find(40).isLeaf);
console.log(tr.find(50).parent.value);
console.log(tr.find(15).left.value);
console.log(tr.find(12).right);

console.log(tr.remove(12));
console.log([...tr.preOrderTraversal()].map(x => x.value));

console.log(tr.remove(10));
console.log([...tr.preOrderTraversal()].map(x => ({
  key: x.key,
  parent: x.parent ? x.parent.key : null,
})));

console.log(tr.remove(40));
console.log([...tr.preOrderTraversal()].map(x => x.value));

console.log(tr.remove(30));
console.log([...tr.preOrderTraversal()].map(x => x.value));