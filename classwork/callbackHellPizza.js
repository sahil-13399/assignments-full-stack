//Task Cheese -> Dough -> Pizza -> Log: Yummy pizza


const getCheese = (callback) => {
    setTimeout(() => {
        const data = "Cheese";
         callback(data);
    },2000);
}

const makeDough = (cheese, callback) => {
    setTimeout(() => {
        const data = cheese + "->Dough";
        callback(data)
    }, 2000)
}

const makePizza = (dough, callback) => {
    setTimeout(() => {
        const data = dough + "->Pizza"
        callback(data)
    },2000);
}

function main(callback) {
    getCheese((cheese) => {
        console.log(`I got my ${cheese}, now making dough`);
        makeDough(cheese, (dough) => {
            console.log(`I got my ${dough}, now making pizza`);
            makePizza(dough, callback)
        });
    });
}

main(data => {
    console.log(data);
    console.log("Yummy Pizza");
})
