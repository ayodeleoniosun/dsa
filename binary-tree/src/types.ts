import {Node} from './dtos/node';
import {tree} from "./samples/binary-tree";

class Types {

    depth(node: Node) {
        let depth = 0;

        while (node) {
            depth++;
            node = node.left;
        }

        return depth;
    }

    isPerfectTree(root: Node) {
        const level = 0;
        const depth = this.depth(root);
        return this.checkPerfectTree(root, depth, level);
    }

    checkPerfectTree(root: Node, depth, level) {
        if (!root) return true;

        if (!root.left && !root.right)
            return (depth == level + 1);

        if (!root.left || !root.right)
            return false;

        return this.checkPerfectTree(root.left, depth, level+1)
            && this.checkPerfectTree(root.right, depth, level+1);
    }

    isFullTree(node: Node) {
        if (!node) return true;

        //leaf node
        if (!node.left && !node.right)
            return true;

        //non-leaf node
        if (node.left && node.right)
            return (this.isFullTree(node.left) && this.isFullTree(node.right));

        return false;
    }
}

let types = new Types();

/*****************************************************
 *              FULL BINARY TREE
 ******************************************************/

if (types.isFullTree(tree)) {
    console.log("The binary tree is a full tree");
} else {
    console.log("The binary tree is not a full tree");
}

/*****************************************************
 *              PERFECT BINARY TREE
 ******************************************************/

if (types.isPerfectTree(tree)) {
    console.log("The binary tree is a perfect binary tree");
} else {
    console.log("The binary tree is not a perfect binary tree");
}