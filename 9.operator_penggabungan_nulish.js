/**
Operator penggabungan nullish '??'
[browser terbaru=“baru”]

Operator penggabungan nullish ditulis sebagai dua tanda tanya ??.

Karena memperlakukan null dan undefined sama, kita akan menggunakan istilah khusus di sini, di artikel ini. Kami akan mengatakan bahwa ekspresi adalah “didefinisikan” ketika itu bukan null atau undefined.

Hasil dari a?? b adalah:

jika a didefinisikan, maka a,
jika a tidak didefinisikan, maka b.
Dengan kata lain, ?? mengembalikan argumen pertama jika bukan null/undefined. Kalau tidak, yang kedua.

Operator penggabungan nullish bukanlah sesuatu yang benar-benar baru. Ini hanya sintaks yang bagus untuk mendapatkan nilai “didefinisikan” pertama dari keduanya.
 */
pengguna = "John";
console.log(pengguna ?? "Anonim");
console.log();

/**
 * Kita juga dapat menggunakan urutan ?? untuk memilih nilai pertama dari daftar yang bukan null/undefined.
Katakanlah kita memiliki data pengguna dalam variabel FirstName, lastName atau nickName. Semuanya mungkin tidak ditentukan, jika pengguna memutuskan untuk tidak memasukkan nilai.
Kami ingin menampilkan nama pengguna menggunakan salah satu variabel ini, atau menampilkan “Anonim” jika semuanya tidak ditentukan.
Mari kita gunakan operator ?? untuk itu:
 */
namaDepan = null;
namaBelakang = null;
nickName = "Supercoder";
console.log(namaDepan ?? namaBelakang ?? nickName ?? "Anonim");
console.log();

/**
Perbandingan dengan ||
Operator OR || dapat digunakan dengan cara yang sama seperti ??, seperti yang dijelaskan di bab sebelumnya.
Misalnya, pada kode di atas kita dapat mengganti ?? dengan || dan tetap mendapatkan hasil yang sama:
 */
console.log("===Perbandingan dengan || ===");
firstName = null;
lastName = null;
namaSingkat = "Supercoder";
console.log(firstName || lastName || namaSingkat || "Anonim");
console.log();

/**
Secara historis, operator OR || ada terlebih dahulu. Itu ada sejak awal JavaScript, jadi pengembang menggunakannya untuk tujuan seperti itu untuk waktu yang lama.

Di sisi lain, operator penggabungan nullish ?? baru saja ditambahkan ke JavaScript, dan alasannya adalah karena orang-orang tidak terlalu senang dengan ||.

Perbedaan penting di antara mereka adalah bahwa:

|| mengembalikan nilai truth pertama.
?? mengembalikan nilai yang ditentukan pertama.
Dengan kata lain, || tidak membedakan antara false, 0, string kosong "" dan null/undefined. Semuanya sama – nilai yang salah. Jika salah satu dari ini adalah argumen pertama dari ||, maka kita akan mendapatkan argumen kedua sebagai hasilnya.

Namun dalam praktiknya, kita mungkin ingin menggunakan nilai default hanya jika variabelnya null/undefined. Artinya, ketika nilainya benar-benar tidak diketahui/tidak disetel.


Prioritas

Prioritas operator ?? hampir sama dengan ||, hanya sedikit lebih rendah. Ini sama dengan 5 di tabel MDN, sedangkan || adalah 6 .
Artinya, seperti halnya ||, operator penggabungan nullish ?? dievaluasi sebelum = dan ?, tetapi setelah sebagian besar operasi lain, seperti +, *.
Jadi, jika kita ingin memilih nilai dengan ?? dalam ekspresi dengan operator lain, pertimbangkan untuk menambahkan tanda kurung:
 */
let tinggi = null;
let lebar = null;
let wilayah = (tinggi ?? 100) * (lebar ?? 50);
console.log(wilayah);
console.log();

let x = (1 && 2) ?? 3;
console.log(x);
