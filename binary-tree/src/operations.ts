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
