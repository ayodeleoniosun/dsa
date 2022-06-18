import {Node} from "./dtos/node";
import {tree} from "./samples/binary-tree";
import {Traversal} from "./dtos/traversal";

const traversal = new Traversal();

class Operations {

    find(node: Node, target: number): boolean {
        const values = traversal.breadthFirst(node);
        return values.includes(target);
    }

    findRecursively(node: Node, target: number): boolean {
        if (!node) return false;

        if (node.val === target) return true;

        return this.findRecursively(node.left, target) ||
            this.findRecursively(node.right, target);
    }

    sum(node: Node): number {
        const values = traversal.breadthFirst(node);
        const sum: number = values.reduce((a, b) => a + b, 0);
        return sum;
    }

    sumRecursively(node: Node): number {
        if (!node) return 0;

        return node.val + this.sumRecursively(node.left) + this.sumRecursively(node.right);
    }

    min(node: Node): number {
        const values = traversal.breadthFirst(node);
        return Math.min(...values);
    }

    max(node: Node): number {
        const values = traversal.breadthFirst(node);
        return Math.max(...values);
    }

    maxDepth(node: Node): number {
        if (!node) return 0;

        return Math.max(this.maxDepth(node.left), this.maxDepth(node.right))+1;
    }

    height (node: Node): number {
        if (!node) return 0;
        let leftHeight: number = 0;
        let rightHeight: number = 0;

        if (node.left) {
            leftHeight = 1 + this.height(node.left);
        }

        if (node.right) {
            rightHeight = 1 + this.height(node.right);
        }

        return (leftHeight > rightHeight) ? leftHeight : rightHeight;
    }
}

let operations = new Operations();
const target: number = 7;

const find = operations.find(tree, target);
console.log(find ? `Node (${target}) found` : `Node (${target}) not found`);

const findRecursively = operations.findRecursively(tree, target);
console.log(findRecursively ? `Node (${target}) found` : `Node (${target}) not found`);

const sum = operations.sum(tree);
console.log("The sum of all nodes is " + sum);

const sumRecursively = operations.sumRecursively(tree);
console.log("The sum of all nodes recursively is " + sumRecursively);

const min = operations.min(tree);
console.log("The minimum node is " + min);

const max = operations.max(tree);
console.log("The maximum node is " + max);

const maxDepth = operations.maxDepth(tree);
console.log("The maximum depth of the tree is " + maxDepth);

const height = operations.height(tree);
console.log("The height of the tree is " + height);
