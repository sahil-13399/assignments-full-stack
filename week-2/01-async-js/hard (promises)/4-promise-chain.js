/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(t1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
            console.log("Func 1 done");
        }, t1);
    });
}

function waitTwoSecond(t2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
            console.log("Func 2 done");
        }, t2);
    });
}

function waitThreeSecond(t3) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
            console.log("Func 3 done");
        }, t3);
    });
}

async function calculateTime(t1,t2,t3) {
    const startTime = new Date().getTime();
    await waitOneSecond(t1 * 1000);
    await waitTwoSecond(t2 * 1000);
    await waitThreeSecond(t3 * 1000);
   return new Date().getTime() - startTime;
}

console.log(calculateTime(1,2,3))
module.exports = calculateTime;