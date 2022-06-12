class BinaryTreeNode {
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

class BinaryTree {
  constructor(key, value = key) {
    this.root = new BinaryTreeNode(key, value);
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
  insert(
    parentNodeKey,
    key,
    value = key,
    { left, right } = { left: true, right: true }
  ) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        const canInsertLeft = left && node.left === null;
        const canInsertRight = right && node.right === null;
        if (!canInsertLeft && !canInsertRight) return false;
        if (canInsertLeft) {
          node.left = new BinaryTreeNode(key, value, node);
          return true;
        }
        if (canInsertRight) {
          node.right = new BinaryTreeNode(key, value, node);
          return true;
        }
      }
    }
    return false;
  }

  // Removes a node and its children from the tree
  remove(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.left.key === key) {
        node.left = null;
        return true;
      }
      if (node.right.key === key) {
        node.right = null;
        return true;
      }
    }
    return false;
  }

  // Retrieves a given node
  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }
}

const tr = new BinaryTree(1, 'AB');
console.log(tr);

tr.insert(1, 11, 'AC');
tr.insert(1, 12, 'BC');
tr.insert(12, 121, 'BG', { right: true});
console.log(tr);

console.log([...tr.inOrderTraversal()].map(x => x.value));

console.log([...tr.preOrderTraversal()].map(x => x.value));

console.log([...tr.postOrderTraversal()].map(x => x.value));

console.log(tr.root.value);

console.log(tr.root.hasChildren);

console.log(tr.find(12).isLeaf);
console.log(tr.find(121).isLeaf);
console.log(tr.find(121).parent.value);
console.log(tr.find(12).left);
console.log(tr.find(12).right.value);

console.log(tr.remove(12));
console.log([...tr.postOrderTraversal()].map(x => x.value));