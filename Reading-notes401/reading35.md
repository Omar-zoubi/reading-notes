##  Graphs

A graph is a non-linear data structure that can be looked at as a collection of `vertices` (or `nodes`) potentially connected by line segments named `edges`
#### common terminology:
- Vertex: A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
- Edge: An edge is a connection between two nodes.
- Neighbor: The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.
- Degree: The degree of a vertex is the number of edges connected to that vertex

#### Undirected Graphs:
- An Undirected Graph is a graph where each edge is undirected or bi-directional. This means that the undirected graph does not move in any direction.

#### Directed Graphs (Digraph)
- A Directed Graph also called a Digraph is a graph where every edge is directed.

- Unlike an undirected graph, a Digraph has direction. Each node is directed at another node with a specific requirement of what node should be referenced next.

### Complete vs Connected vs Disconnected:
#### Complete Graphs:

A complete graph is when all nodes are connected to all other nodes.
![](https://mathworld.wolfram.com/images/eps-gif/CompleteGraphCycles5_850.gif)
### Connected

A connected graph is graph that has all of `vertices`/`nodes` have at least one edge.
![](https://mathworld.wolfram.com/images/eps-gif/ConnectedGraph_1000.gif)
### Disconnected

A disconnected graph is a graph where some vertices may not have edges.
![](https://mathworld.wolfram.com/images/eps-gif/DisconnectedGraphs_950.gif)

### Acyclic vs Cyclic:
#### Acyclic Graph
- An acyclic graph is a directed graph without cycles.

- A cycle is when a node can be traversed through and potentially end up back at itself.
#### Cyclic Graphs
- A Cyclic graph is a graph that has cycles.

- A cycle is defined as a path of a positive length that starts and ends at the same vertex.

![](https://nycomdorics.com/wp-content/uploads/2020/03/graph_example3.png)

### Depth First
- In a depth first traversal, we approach it a bit different than the way we do when working with a depth first traversal of a tree. Similar to how the breadth-first uses a queue, we are going to use a Stack for our depth-first traversal.

The algorithm for a depth first traversal is as follows:

1. Push the root node into the stack
2. Start a while loop while the stack is not empty
3. Peek at the top node in the stack
4. If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
5. If the top node does not have any unvisited children, Pop that node off the stack
6. Repeat until the stack is empty.

### Real World Uses of Graphs


1. GPS and Mapping.
2. Driving Directions.
3. Social Networks.
4. Airline Traffic.
5. Netflix uses graphs for suggestions of products.

#### Resources:

- [Graphs](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-35/resources/graphs.html)





***Done by Omar-zoubi***
- [GitHub Link](https://github.com/Omar-zoubi)
- [Linkedin Link](https://www.linkedin.com/in/omar-alzoubi-54034bb4/)