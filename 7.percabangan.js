/**
 * Terkadang, kita perlu melakukan tindakan berbeda berdasarkan kondisi yang berbeda.

Untuk melakukan itu, kita dapat menggunakan pernyataan if dan operator kondisional ?, yang juga merupakan “question mark” operator (operator tanda tanya).

Pernyataan “if”
Pernyataan if mengevaluasi suatu kondisi dan, jika hasil kondisi itu true, maka blok kode di dalam if akan diexekusi.

Sebagai contoh:
 */

/**
 * If else:
 */

/**

console.log("=====If Else=========");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ditahun berapa spesifikasi ECMAScript-2015 dipublikasikan? ', (tahun) => {
    if(tahun == 2015){
        console.log('Jawaban kamu benar!');
    }else{
        console.log('Hah, kok jawaban kamu salah?');
    }
    rl.close();
})

 */

/**
 * Else if:
 */

/**

console.log("=====Contoh Else If=======");
const readline = require('readline');

const nuliscoy = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

nuliscoy.question('Ditahun berapa spesifikasi ECMAScript-2015 dipublikasikan? ', (tahun) => {
    if(tahun < 2015){
        console.log('Terlalu dini');
    }else if(tahun > 2015){
        console.log('Terlalu akhir');
    }else{
        console.log('Tepat sekali');
    }
    nuliscoy.close();
})

*/

/**
 * Operator Kondisional '?'
 */

/**

console.log("=====Contoh Operator Kondisional ?==========");
const readline = require('readline');

let accessAllowed;
const nuliscok = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

nuliscok.question('Berapakah umur kamu? ', (umur) => {
    if(umur > 18){
        accessAllowed = true;
    }else{
        accessAllowed = false;
    }
    console.log(accessAllowed);
    nuliscok.close();
})

*/

/**
 * Multiple '?'
 */

/**
console.log("====Multiple ?======");
const readline = require('readline');

const nulis = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

nulis.question('age? ', (age) => {
    age = Number(age);

    let message = (age < 3) ? 'Hi, baby!' : (age < 18) ? 'Hello' : (age < 100) ? 'Greetings' : 'What an unsual age!';
    console.log(message);
    nulis.close();
})
*/

console.log("====Penggunaan ? yang non tradisional====");
const readline = require('readline');

const nulisgan = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

nulisgan.question('Which company created JavaScript? ', (company) => {
    (company === 'Netscape') ? console.log('Right!') : console.log('Wrong.');
    nulisgan.close();
})
