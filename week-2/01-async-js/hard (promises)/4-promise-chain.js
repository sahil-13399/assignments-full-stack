/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
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

async function calculateTime() {
    const startTime = new Date().getTime();
    const result1 = await waitOneSecond()
    const result2 = await waitTwoSecond() 
    const result3 = await waitThreeSecond();
    console.log(`${result1} and ${result2} and ${result3}`);
    console.log(`Total time taken to resolve all ${(new Date().getTime() - startTime)/1000} seconds`);
}

const calculateTimePromiseChain = () => {
    const startTime = new Date().getTime();
    let result1,result2, result3;
    waitOneSecond().then((data) => {
        result1 = data;
        console.log(result1)
       return waitTwoSecond()
    }).then((data) => {
        result2 = data;
        console.log(result2)
        return waitThreeSecond()
    }).then((data) => {
        result3 = data;
        console.log(`${result1} and ${result2} and ${result3}`);
        console.log(`Total time taken to resolve all ${(new Date().getTime() - startTime)/1000} seconds`);
    });
}

calculateTimePromiseChain()