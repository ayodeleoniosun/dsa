import {Node} from "./node";

export class Traversal {

    preOrder(node: Node) {
        if (!node) return;

        console.log(node.val);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    inOrder(node: Node) {
        if (!node) return;

        this.inOrder(node.left);
        console.log(node.val);
        this.inOrder(node.right);
    }

    postOrder(node: Node) {
        if (!node) return;

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.val);
    }

    depthFirst(node: Node): number[] {
        let values: number[] = [];

        if (!node) return values;

        let stack: Node[] = [node];

        while (stack.length > 0) {
            const current: Node = stack.pop();
            values.push(current.val);

            if (current.right) stack.push(current.right);

            if (current.left) stack.push(current.left);
        }

        return values;
    }

    recursiveDepthFirst(node: Node): number[] {
        if (!node) return [];
        const left = this.recursiveDepthFirst(node.left);
        const right = this.recursiveDepthFirst(node.right);
        return [node.val, ...left, ...right];
    }

    breadthFirst(node: Node): number[] {
        let values: number[] = [];

        if (!node) return values;

        let queue: Node[] = [node];

        while (queue.length > 0) {
            const current: Node = queue.shift();
            values.push(current.val);

            if (current.left) queue.push(current.left);

            if (current.right) queue.push(current.right);
        }

        return values;
    }
}