import { Node } from '../../shared/node.js';

const branchSums = (root) => {
    const allSumsArray = [];
    const initialBranchSum = 0;

    sumTreeBranches(root, initialBranchSum, allSumsArray);

    return allSumsArray;
};

const sumTreeBranches = (node, currentBranchSum, allSums) => {
    if (!node) {
        return;
    }

    currentBranchSum += node.value;

    if (!node.left && !node.right) {
        allSums.push(currentBranchSum);
    }

    sumTreeBranches(node.left, currentBranchSum, allSums);
    sumTreeBranches(node.right, currentBranchSum, allSums);
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.left = new Node(10);

console.log(branchSums(root));
