/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

async function calculateTime() {
    const startTime = new Date().getTime();
    const [result1, result2, result3] = await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
    console.log(`${result1} and ${result2} and ${result3}`);
    console.log(`Total time taken to resolve all ${(new Date().getTime() - startTime)/1000} seconds`);
}

calculateTime();
