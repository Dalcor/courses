console.log("Задача 1\n\n\n");

let sequence = function (start, step, counter = 0) {
    start = start || 0;
    step = step || 1;
    return function () {
        if(counter === 0) {
            counter++;
            return start;
        }
        return start += step;
    }
};

let generator = sequence(10);
let generator2 = sequence(7,15);

console.log(generator());
console.log(generator());
console.log(generator());
console.log("---");
console.log(generator2());
console.log(generator2() + "\n\n");

console.log("Задача 2\n\n\n");
let take = function (gen, x, result = []) {
        while(x > 0) {
          result.push(gen());
          x--;
        }
        return result;
};

let gen = sequence(0,2);
console.log(take(gen, 5));

console.log("\n\n\n");

console.log("Задача 3\n\n\n");



let characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

field = prompt('Which field you want to find values?');


let pluck = function(characters, field) {
    let fieldValues = [];
    for(let i = 0; i < characters.length; i++) {
       fieldValues.push(characters[i][field]);
    }
    return fieldValues;
};

console.log(pluck(characters, field));


console.log("Задача 4\n\n\n");

let arr = [2, 5, 14, 22, 1, 43, 23];

let fn = function(param, multiplier) {
    return param*multiplier;
};

let map = function (fn, arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i], 3));
    }
    return newArr;
};

console.log(map(fn, arr));






