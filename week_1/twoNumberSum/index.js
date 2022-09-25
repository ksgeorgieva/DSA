const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const twoNumberSum = (array, targetSum) => {
    const indexes = {};

    for (let i = 0; i < array.length; i++ ) {
        const currentNum = array[i];
        const neededNum = targetSum - currentNum;

        if (neededNum in indexes) {
            return [ currentNum, neededNum ];
        } else {
            indexes[currentNum] = true;
        }
    }

    return [];
};


const res = twoNumberSum(array, targetSum);
console.log(res);