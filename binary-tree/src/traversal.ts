import {tree} from "./samples/binary-tree";
import {Traversal} from "./dtos/traversal";

const traversal = new Traversal();

console.log("Pre order");
traversal.preOrder(tree);
console.log("\n");

console.log("In order");
traversal.inOrder(tree);
console.log("\n");

console.log("Post order");
traversal.postOrder(tree);
console.log("\n");

console.log("Depth first");
const depthFirst = traversal.depthFirst(tree);
console.log(depthFirst);
console.log("\n");

console.log("Recursive depth first");
const recursiveDepthFirst = traversal.recursiveDepthFirst(tree);
console.log(recursiveDepthFirst);
console.log("\n");

console.log("Breadth first");
const breadthFirst = traversal.breadthFirst(tree);
console.log(breadthFirst);
console.log("\n");