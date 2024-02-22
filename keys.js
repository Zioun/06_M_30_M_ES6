const glass = {
    name : "Glass",
    color: "Golden",
    price: 12,
    isCleaned: true
}

// let result = Object.keys(glass)
// let result = Object.values(glass)
// let result = Object.entries(glass)
// let result = delete glass.isCleaned;
// let {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

//freeze
/*
Object.freeze(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;
console.log(glass)
*/

// can't add new keys and delete
Object.seal(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;
console.log(glass)

