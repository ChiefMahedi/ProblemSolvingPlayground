function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = [0];
    function calculateHeight(node: TreeNode | null): number {
        if (!node) return -1;
        let leftHeight = calculateHeight(node.left);
        let rightHeight = calculateHeight(node.right);
        maxDiameter[0] = Math.max(maxDiameter[0], 2 + leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight);
    }
    calculateHeight(root);
    return maxDiameter[0];
}
