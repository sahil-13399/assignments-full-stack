/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep (seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds);
    })
}

async function main(n) {
    console.log("Waiting for " + n + " seconds");
    await sleep(n);
    console.log("Program over")
}

//console.log("Outside of main");
module.exports = sleep;