const array1 = [1, 2, 3, 5, 6, 8, 9];
const array2 = [-8, -5, -3, 0, 2, 5];
const array3 = [-5, 5];
const array4 = [];
const array5 = [-5];

const sortedSquaredArray = (array) => {
    const sortedArray = [];

    let startIndex = 0;
    let endIndex = array.length - 1;
    let lastIndexInSortedArr = endIndex; // 6
     
    while(startIndex <= endIndex) {
        const squareStartIndex = Math.pow(array[startIndex], 2);
        const squareEndIndex = Math.pow(array[endIndex], 2);

        if (squareStartIndex > squareEndIndex) {
            sortedArray[lastIndexInSortedArr] = squareStartIndex;
            startIndex++;
        } else {
            sortedArray[lastIndexInSortedArr] = squareEndIndex;
            endIndex--;
        }

        lastIndexInSortedArr--;
    }

    return sortedArray;
};

console.log(sortedSquaredArray(array1));    // [1, 4, 9, 25, 36, 64, 81]
console.log(sortedSquaredArray(array2));    // [0, 4, 9, 25, 25, 64]
console.log(sortedSquaredArray(array3));    // [25, 25]
console.log(sortedSquaredArray(array4));    // []
console.log(sortedSquaredArray(array5));    // [25]

