import { Node } from "../dtos/node";

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);
tree.left.left.left = new Node(8);
tree.left.left.right = new Node(9);
tree.left.right.left = new Node(10);
tree.left.right.right = new Node(11);
tree.right.left.left = new Node(12);
tree.right.left.right = new Node(13);
tree.right.right.left = new Node(14);
tree.right.right.right = new Node(15);

export { tree };
