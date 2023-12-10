const getCheese = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Cheese");
        }, 2000)
    });
}

const makeDough = (cheese) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cheese + "->Dough");
        }, 2000)
    });
}

const makePizza = (cheeseDough) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cheeseDough + "->Pizza");
        }, 2000)
    });
}


getCheese().then(cheese => {
    console.log("I got my cheese, now making dough")
    return makeDough(cheese)
}).then(dough => {
    console.log("I got my dough, now making pizza")
    return makePizza(dough)
}).then(pizza => {
    console.log(pizza)
    console.log("Yummy pizza")
})