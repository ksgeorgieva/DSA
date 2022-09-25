const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currentNum = array[i];
        let prevIndex = i - 1;

        while (prevIndex >= 0 && array[prevIndex] > currentNum) {
            array[prevIndex + 1] = array[prevIndex];
            prevIndex--;
        }

        array[prevIndex + 1] = currentNum;
    }
};

const array = [3, 9, 6, 12, 7, -2, -4];
insertionSort(array);
console.log(array);
