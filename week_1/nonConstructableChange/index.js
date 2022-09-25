const coins1 = [5, 7, 1, 1, 2, 3, 22];  // 20
const coins2 = [1, 2, 5];               // 4
const coins3 = [1, 1, 1]                // 4
const coins4 = [1, 1, 2];               // 5
const coins5 = [1, 1, 3];               // 6
const coins6 = [1, 1, 4];               // 3
const coins7 = [5, 10];                 // 1
const coins8 = [];                      // 1
const coins9 = [1];                     // 2

const nonConstructibleChange = (coins = []) => {
    const sortedCoins = coins.sort((a, b) => a - b);

    let minChange = 1;

    for (let i = 0; i < sortedCoins.length; i++) {
        const currentCoin = sortedCoins[i];

        if (minChange < currentCoin ) {
            return minChange;
        }

        minChange += currentCoin;
    }

    return minChange;
};

console.log(nonConstructibleChange(coins1));
console.log(nonConstructibleChange(coins2));
console.log(nonConstructibleChange(coins3));
console.log(nonConstructibleChange(coins4));
console.log(nonConstructibleChange(coins5));
console.log(nonConstructibleChange(coins6));
console.log(nonConstructibleChange(coins7));
console.log(nonConstructibleChange(coins8));
console.log(nonConstructibleChange(coins9));