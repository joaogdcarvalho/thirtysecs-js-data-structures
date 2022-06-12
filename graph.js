class Graph {
  constructor(directed = true) {
    this.directed = directed;
    this.nodes = [];
    this.edges = new Map();
  }
  
  // Inserts a new node with the specific key and value
  addNode(key, value = key) {
    this.nodes.push({ key, value });
  }

 // Inserts a new edge between two given nodes, optionally setting its weight 
  addEdge(a, b, weight) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight });
    if (!this.directed)
      this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
  }

  // Removes the node with the specified key
  removeNode(key) {
    this.nodes = this.nodes.filter(n => n.key !== key);
    [...this.edges.values()].forEach(({ a, b }) => {
      if (a === key || b === key) this.edges.delete(JSON.stringify([a, b]));
    });
  }

  // Removes the edge between two given nodes
  removeEdge(a, b) {
    this.edges.delete(JSON.stringify([a, b]));
    if (!this.directed) this.edges.delete(JSON.stringify([b, a]));
  }

  // Retrieves the node with the given key
  findNode(key) {
    return this.nodes.find(x => x.key === key);
  }

  // Checks if the graph has an edge between two given nodes
  hasEdge(a, b) {
    return this.edges.has(JSON.stringify([a, b]));
  }

  // Sets the weight of a given edge
  setEdgeWeight(a, b, weight) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight });
    if (!this.directed)
      this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
  }

  // Gets the weight of a given edge
  getEdgeWeight(a, b) {
    return this.edges.get(JSON.stringify([a, b])).weight;
  }

  // Finds all nodes for which an edge exists from a given node
  adjacent(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (a === key) acc.push(b);
      return acc;
    }, []);
  }

  // Calculates the total number of edges to a given node
  indegree(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (b === key) acc++;
      return acc;
    }, 0);
  }

  // Calculates the total number of edges from a given node
  outdegree(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (a === key) acc++;
      return acc;
    }, 0);
  }
}

const gr = new Graph();

gr.addNode('a');
gr.addNode('b');
gr.addNode('c');
gr.addNode('d');
console.log(gr);

gr.addEdge('a', 'c');
gr.addEdge('b', 'c');
gr.addEdge('c', 'b');
gr.addEdge('d', 'a');
console.log(gr);

console.log(gr.nodes.map(x => x.value));

console.log([...gr.edges.values()].map(({ a, b}) => `${a} => ${b}`));

console.log(gr.adjacent('c'));

console.log(gr.indegree('c'));

console.log(gr.outdegree('c'));

console.log(gr.hasEdge('d', 'a'));
console.log(gr.hasEdge('a', 'd'));

gr.removeEdge('c', 'b');
console.log([...gr.edges.values()].map(({ a, b }) => `${a} => ${b}`));

gr.removeNode('c');
console.log([...gr.edges.values()].map(({ a, b }) => `${a} => ${b}`));

gr.setEdgeWeight('d', 'a', 5);
console.log(gr.getEdgeWeight('d', 'a'));