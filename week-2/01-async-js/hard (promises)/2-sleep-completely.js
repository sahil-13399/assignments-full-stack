/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
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

main(5000)
//console.log("Outside of main");