console.log("===Switch case===");
let a = 2+2;

switch(a){
    case 3:
        console.log('Too Small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too Big');
        break;
    default:
        console.log("I don't know such values");
}
console.log();

console.log("===Grouping case===");
let b = 3;
switch(b){
    case 6:
        console.log('Right!');
        break;
    case 7:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;
    default:
        console.log('The result is strange. Really.');
}