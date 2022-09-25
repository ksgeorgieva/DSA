import { Node } from '../shared/node.js';

const findClosestValueInBst = (root, target) => {
    return getClosestValue(root, target);
};

const getClosestValue = (node, target, closest) => {
    if (!node) {
        return closest;
    }

    const targetClosestDif = getTwoNumsAbsDifference(target, closest);
    const targetCurNodeValueDif = getTwoNumsAbsDifference(target, node.value);

    if (!closest || targetClosestDif > targetCurNodeValueDif) {
        closest = node.value;
    }

    if (target < node.value) {
        return getClosestValue(node.left, target, closest);
    } else {
        return getClosestValue(node.right, target, closest);
    }
};

const getTwoNumsAbsDifference = (a, b) => {
    return Math.abs(a - b);
};

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.left = new Node(13);
root.right.right = new Node(22);
root.left.left.left = new Node(1);
root.right.left.right = new Node(14);

console.log(findClosestValueInBst(root, 12));
