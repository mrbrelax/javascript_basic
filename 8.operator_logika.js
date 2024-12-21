console.log("====Operator || (OR)======");
console.log( true || true );
console.log( false || true );
console.log( true || false );
console.log( false || false );
console.log();

console.log("====Example 1====");
console.log( null || 1 );
console.log( null || 0 || 1 ); 
console.log( true || 'no matter what' );
console.log( undefined || null || 0 );
console.log();

console.log("===Example 2 ====");
/** 
 * 
1. Dapatkan nilai truthy dari daftar variabel atau expresi.
Untuk contoh, kita punya variabel firstName, lastName dan nickName, semuanya bersifat opsional.
Kita gunakan OR || untuk memilih satu-satunya yang memiliki data dan menampilkannya (atau anonymous jika belum ada yang ditentukan atau di set):
*/
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");
console.log();
/**
 * Jika semua variabel bernilai falsy, Anonymous akan muncul.
 *
2. Evaluasi Short-circuit.
Fitur lainnya dari operator OR || adalah evaluasi “short-circuit”.
Itu berarti bahwa || memproses argumennya sampai nilai pertama bersifat truthy tercapai, lalu nilainya dikembalikan langsung, bahkan tanpa menyentuh argumen lainnya.
Pentingnya dari fitur ini menjadi jelas jika sebuah operan bukan hanya sebuah nilai, tapi sebuah ekspresi yang melakukan aksi, seperti assignment sebuah variabel atau sebuah pemanggilan fungsi.
Didalam contoh dibawah, hanya pesan kedua yang di jalankan:
 */

true || console.log("not printed");
false || console.log("printed");
console.log();
/**
Di baris pertama, operator OR || langsung berhenti mengevaluasi karena nilai pertama bersifat true, jadi alertnya tidak berjalan.
Terkadang, orang-orang menggunakan fitur ini untuk mengeksekusi perintah hanya jika kondisi di paling kiri bersifat falsy.
 */

console.log("== && (AND) ===");
// Operator AND diwakili dua ampersand &&:
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
console.log();

console.log("===Example with if ===");
let hour = 12;
let minute = 30;

if(hour == 12 && minute == 30){
    console.log('Then time is 12:30');
}else{
    console.log('Not found');
}
console.log();

console.log( 1 && 0 );
console.log( 1 && 5 );
console.log( null && 5 );
console.log( 0 && "no matter what" );
console.log( 1 && 2 && null && 3 );
console.log( 1 && 2 && 3 );
console.log();

console.log("=== ! (NOT) ===");
// Operator boolean NOT diwakili dengan tanda exklamasi !.
/**
Operator ini menerima argumen tunggal dan menjalankan hal berikut:
Mengkonversi operand ke tipe boolean: true/false.
Mengembalikan nilai kebalikan.
Misalnya:
 */
console.log( !true );
console.log( !0 );
// NOT ganda !! kadang dipakai untuk mengkonversi nilai ke tipe boolean:
console.log( !!"non-empty string");
console.log( !!null );
/**
Yaitu, NOT pertama mengkonversi nilai ke boolean dan mengembalikan kebalikannya, dan NOT kedua membaliknya lagi. Ujungnya, kita punya konversi nilai-ke-boolean biasa.
Ada sedikit cara rewel untuk melakukan hal serupa – fungsi Boolean built-in:
 */
console.log( Boolean("non-empty string") );
console.log( Boolean(null) );
