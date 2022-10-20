const validateBst = (root) => {
    if (!root) {
        return true;
    }

    if (root.left.value < root && root.right.value >= root) {
        return validateBst(root.left) && validateBst(root.right);
    }
};
