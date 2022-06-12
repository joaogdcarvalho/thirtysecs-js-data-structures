class TreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}

class Tree {
  constructor(key, value = key) {
    this.root = new TreeNode(key, value);
  }

  // Traverses the tree by recursively traversing each node followed by its children
  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  // Traverses the tree by recursively traversing each node's children followed by the node
  *postOrderTraversal(node = this.root) {
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  // Inserts a node as a child of the given parent node
  insert(parentNodeKey, key, value = key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, node));
        return true;
      }
    }
    return false;
  }

  // Removes a node and its children from the tree
  remove(key) {
    for (let node of this.preOrderTraversal()) {
      const filtered = node.children.filter(c => c.key !== key);
      if (filtered.length !== node.children.length) {
        node.children = filtered;
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

const tr = new Tree(1, 'AB');
console.log(tr);

tr.insert(1, 11, 'AC');
tr.insert(1, 12, 'BC');
tr.insert(12, 121, 'BG');
console.log(tr);

console.log([...tr.preOrderTraversal()].map(x => x.value));

console.log([...tr.postOrderTraversal()].map(x => x.value));

console.log(tr.root.value);

console.log(tr.root.hasChildren);

console.log(tr.find(12).isLeaf);
console.log(tr.find(121).isLeaf);
console.log(tr.find(121).parent.value);

console.log(tr.remove(12));
console.log([...tr.postOrderTraversal()].map(x => x.value));