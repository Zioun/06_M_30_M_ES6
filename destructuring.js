const obj = {
    name : "Abdullah",
    age : 25,
    phone : 12345
}

const {name: nam} = obj;
console.log(nam);

const array = [20, 39, 55, 44];
const [one, two] =  array;
console.log(two)


function double(a,b){
    return [a*2, b*2];
}
const [at, bt] = double(10, 20);
console.log(at, bt)