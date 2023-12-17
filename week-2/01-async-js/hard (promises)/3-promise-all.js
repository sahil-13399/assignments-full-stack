/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


function waitOneSecond(t1) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, t1 * 1000);
    })
}

function waitTwoSecond(t2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, t2 * 1000);
    })
}

function waitThreeSecond(t3) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, t3 * 1000);
    })
}

async function calculateTime(t1, t2, t3) {
    const startTime = new Date().getTime()
    await Promise.all([waitOneSecond(t1), waitTwoSecond(t2), waitThreeSecond(t3)]);
    // console.log(`${result1} and ${result2} and ${result3}`);
    // console.log(`Total time taken to resolve all ${(new Date().getTime() - startTime)/1000} seconds`);
    return new Date().getTime() - startTime;
}

module.exports = calculateTime;