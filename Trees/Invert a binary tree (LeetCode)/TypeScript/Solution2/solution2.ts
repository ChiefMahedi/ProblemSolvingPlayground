function invertTree(root) {
    if (!root) return null;
    const stack = [root];
    while (stack.length > 0) {
        const currentNode = stack.pop();
        const temp = currentNode.left;
        currentNode.left = currentNode.right;
        currentNode.right = temp;
        if (currentNode.left) stack.push(currentNode.left);
        if (currentNode.right) stack.push(currentNode.right);
    }
    return root;
}
