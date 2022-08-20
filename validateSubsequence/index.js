const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const isValidSubsequence = (array, sequence) => {
    let validSubsequenceCount = 0;

    array.forEach((num) => {
        if (sequence[validSubsequenceCount] === num) {
            validSubsequenceCount++;
        }
    });

    return validSubsequenceCount === sequence.length;
};

console.log(isValidSubsequence(array, sequence));
