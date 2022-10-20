const queries = [3, 2, 1, 2, 6]; // 17

const minimumWaitingTime = (queries) => {
    queries.sort((a, b) => a - b);

    let totalWaitingTime = 0;
    let nextWaitingTime = 0;

    queries.forEach((queryWaitingTime) => {
        totalWaitingTime += nextWaitingTime;
        nextWaitingTime += queryWaitingTime;
    });

    return totalWaitingTime;
};

const minMins = minimumWaitingTime(queries);
console.log(minMins);
