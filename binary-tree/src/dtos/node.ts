export class Node {
    val: number;
    left: Node | null;
    right: Node | null;

    constructor(element: number) {
        this.val = element;
        this.left = null;
        this.right = null;
    }
}