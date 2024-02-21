// declaration function
function add(a, b){
    const result = a + b;
    console.log(result);
}
add(10,20);

// function expression
const add2 = function(a, b){
    return a + b;
}
const result = add2(10,20);
console.log(result);

// arrow function
const add3 = (a, b) => a + b;
const sum = add3(10, 20);
console.log(sum)
