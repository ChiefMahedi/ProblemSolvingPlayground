function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let queue: [TreeNode, number][] = [[root, 1]];
    let maxDepth = 0;

    while (queue.length > 0) {
        let [node, depth] = queue.shift()!;
        maxDepth = Math.max(maxDepth, depth);

        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
    return maxDepth;
}