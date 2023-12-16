/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("One second")
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Two second")
        }, 2000);
    })
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Three second")
        }, 3000);
    })
}

function calculateTime() {
    const startTime = new Date().getTime();
    waitOneSecond().then(waitTwoSecond).then(waitThreeSecond);
    console.log(`${result1} and ${result2} and ${result3}`);
    console.log(`Total time taken to resolve all ${(new Date().getTime() - startTime)/1000} seconds`);
}