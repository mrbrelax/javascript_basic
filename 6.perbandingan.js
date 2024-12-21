/**
 * - Lebih besar dari atau kurang dari: a > b, a < b.
 * - Lebih besar atau kurang dari atau sama: a >= b, a <= b.
 * - Sama dengan: a == b
 * - Tidak sama dengan a != b
 * 
 * Boolean ialah hasilnya
 * true - berarti "ya"
 * false - berarti "tidak"
 */

console.log(2>1);
console.log(2==1);
console.log(2!=1);
console.log();

console.log("===Perbandingan String===");
console.log( 'Z' > 'A' );
console.log( 'Glow' > 'Glee' );
console.log( 'Bee' > 'Be' );

/**
 * algoritma untuk membandingkan dua string sederhana:

Bandingkan karakter pertama dari kedua string.
Jika karakter pertama dari string pertama lebih besar (atau lebih kecil) dari string kedua, maka string pertama lebih besar (atau lebih kecil) dari string kedua. Kita selesai.
Sebaliknya, jika karakter pertama kedua string sama, bandingkan karakter kedua dengan cara sama.
Ulangi sampai string berakhir.
Jika kedua string berakhir pada panjang yang sama, maka mereka sama. Sebaliknya, string lebih panjang yang lebih besar.
Pada contoh di atas, pembandingan 'Z' > 'A' menghasilkan pada langkah pertama sedangkan string "Glow" dan "Glee" dibandingkan karakter-demi-karakter:

G sama dengan G.
l sama dengan l.
o lebih besar dari e. Berhenti di sini. String pertama lebih besar.
 */
console.log();

console.log("===Pembandingan dari tipe yang berbeda===");
console.log( '2' > 1 );
console.log( '01' == 1 );
console.log();

console.log("===Equalitas Ketat===");
console.log( 0 == false );
console.log( '' == false );
console.log();

console.log("===Pembandingan dengan null dan undefined===");
console.log( null === undefined );
console.log( null == undefined );
console.log();

console.log("===Hasil aneh: null vs 0===");
console.log( null > 0 );
console.log( null == 0 );
console.log( null >= 0 );
console.log();

console.log("===Undefined yang tak bisa diperbandingkan===");
console.log( undefined > 0 );
console.log( undefined < 0 );
console.log( undefined == 0 );
console.log()

console.log("===Tugas===");
console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");