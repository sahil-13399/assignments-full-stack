/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("I am done")
        }, n);
    })
}

wait(10000).then(str => console.log(str));