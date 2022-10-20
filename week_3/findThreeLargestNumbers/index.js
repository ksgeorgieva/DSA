const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

const findThreeLargestNumbers = (array) => {
    let first, second, third;

    array.forEach(num => {
        if (num > first || !first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second || !second) {
            third = second;
            second = num;
        } else if (num > third || !third) {
            third = num;
        }
    });

    return [third, second, first];
};

const largest = findThreeLargestNumbers(array);
console.log(largest);