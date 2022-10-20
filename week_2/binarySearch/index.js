const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const target = 33;

const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        const middle = Math.floor((startIndex + endIndex) / 2);

        if (array[middle] === target) {
            return middle;
        } else if (array[middle] > target) {
            endIndex = middle -1;
        } else {
            startIndex = middle + 1;
        }
    }

    throw new Error("Target is not present in the passed array");
};

const index = binarySearch(array, target);
console.log(index);
