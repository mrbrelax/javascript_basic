console.log("====While loop====");
let i = 0;
while(i < 3){
    console.log(i);
    i++;
}
console.log();

console.log("===do ... while loop====");
let a = 0;
do{
    console.log(a);
    a++;
}while(a < 3);
console.log();

console.log("===for loop===");
for(let b = 0; b < 3; b++){
    console.log(b)
}
console.log()

console.log("===Skipping parts====");
let c = 0;
for(; c < 3; c++){
    console.log(c);
}
console.log();

/**
console.log("===Breaking the loop===");
const readline = require('readline');

let sum = 0;
const nuliscoy = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askNumber(){
    nuliscoy.question("Enter a number: ", (input) => {
        let value = parseFloat(input);

        if(!value){
            nuliscoy.close();
            console.log('Sum: ', sum);
        }else{
            sum += value;
            askNumber();
        }
    });
}
askNumber();
 */

console.log("===Continue to the next iteration===");
for(let d = 0; d < 10; d++){
    if(d % 2 == 0) continue;
    console.log(d);
}
console.log();

console.log("===Labels for break/continue===");
const readline = require('readline');

let e = 0, f = 0;
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

function askCoords(){
    if(i >= 3){
        rl.close();
        console.log("Done!");
        return;
    }

    rl.question('Value at coords (${e}, ${f}: ', (input) => {
        if(input.toLowerCase() == 'exit'){
            rl.close();
            console.log('Done!');
            return;
        }

        f++;
        if(f >= 3){
            f = 0;
            e++;
        }

        askCoords();
    });
}

askCoords();