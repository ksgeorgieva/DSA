const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let swapped = false;

        for (let j = 0; j < array.length - 1; j++) {
            const current = array[j];
            const next = array[j + 1];

            if (current > next) {
                array[j] = next;
                array[j + 1] = current;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
};

const array = [3, 9, 6, 12, 7, -2, -4];
bubbleSort(array);
console.log(array);
