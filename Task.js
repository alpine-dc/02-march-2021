// # 02-march-fire
// Batch 2 Fullstack tahun 2021

// // # TASK - ALGORITMA & PSEUDOCODE

// ## 1

// Buat algoritma : How to make Indomie

// ## 2

// Buat algoritma : How to cook Sirloin Steak
// 1. Siapkan grill pan
// 2. Siapkan daging sirloin
// 3. Bumbui daging dengan garam, lada, olive oil dan diamkan selama 10 menit
// 4. Nyalakan kompor dan panaskan grill pan sampai benar-benar panas
// 5. panggang daging kurang lebih 2-3 menit di setiap bagian, setelah itu angkat
// 6. lalu diamkan sekitar 2-3 menit sebelum disajikan
// 7. buat saus steak sesuai selera
// 8. sajikan daging sirloin dengan saus yang sudah dibuat

// ## 3

// Buat algoritma dan pseudocode :
// Luas persegi panjang

// ## 4

// Buat algoritma dan pseudocode :
// Volume bola

// ## 5

// Buat algoritma : How to add, commit, push to Github
// 1. Tentukan file yang ingin dimasukkan ke github
// 2. gunakan command git add <file>, lalu tekan enter
// 3. lakukan penyimpanan dari perubahan dengan menggunakan git commit
// 4. membuat commit message yang jelas, tidak boleh "add" dan "update"
// 5. gunakan command git commit -m "commit message" , lalu tekan enter
// 6. selanjutnya melakukan push ke repositories
// 7. gunakan command git push <remote> <branch-name> , lalu tekan enter

// # TASK - VARIABLES, OPERATIONS, JAVASCRIPT

// ## 1

// Buat algoritma, pseudocode, dan codingan :
// Keliling persegi

// Algoritma
// 1. Tentukan panjang
// 2. Tentukan lebar
// 3. Tentukan tinggi
// 4. Tentukan rumus
// 5. rumus panjang kali lebar kali tinggi
// 6. memproses rumus
// 7. menampilkan hasil

// Pseudocode
// * STORE panjang WITH 4
// * STORE lebar WITH 4
// * STORE tinggi WITH 4

// * SET Luas WITH panjang TIMES lebar TIMES tinggi
// * DISPLAY Luas

// Coding
// var panjang = 4;
// var lebar = 4;
// var tinggi = 4;

// var Luas = panjang * lebar * tinggi;
// console.log(Luas)

// ## 2 

// Buat algoritma, pseudocode, dan codingan :
// Luas permukaan balok

// Algoritma
// 1. Tentukan panjang
// 2. Tentukan lebar
// 3. Tentukan tinggi
// 4. Tentukan rumus
// 5. rumus 2 kali ((panjang kali lebar) tambah (panjang kali tinggi) tambah (lebar kali tinggi))
// 6. memproses rumus
// 7. menampilkan hasil

// Pseudocode
// * STORE panjang WITH 6
// * STORE lebar WITH 4
// * STORE tinggi WITH 3

// * SET Luas WITH 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
// * DISPLAY Luas

// Coding
// var panjang = 6;
// var lebar = 4;
// var tinggi = 3;

// var Luas = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
// console.log(Luas)

// # 3 

// Buat kodingan, untuk menjawab pertanyaan " Who are you ?" menggunakan variable.

// ```javascript
//     //Code here
//     var name;
//     var age;
//     //Output
//     //My name is Vincent, and i'm 28 years old.
// ```

// Coding
// var name = "Vincent";
// var age = 28;

// console.log('My name is' + ' ' + name + ', and im' + ' ' + age + ' ' + 'years old.')

// # 4

// Buat kodingan, untuk membuat random number. Range number 1 - 10.

// ```javascript
//     //Code here
//     var number;
//     //Output 
//     //Your number is 1
//     //Your number is 5
// ```

// Coding
// var number = Math.round(Math.random() * 10);

// console.log("Your number is" + " " + (Math.round(Math.random() * 10)));

// # 5

// Buat kodingan, untuk membuat Nomor Induk mahasiswa.
// Rumus : <Nama_Mahasiswa><Nomor_Absen><Lulus/Tidak>
// Contoh : James15true
// dengan syarat nomor absen random, Range 1 - 50

// Coding
// var Nama_Mahasiswa = "James";
// var Nomor_Absen = Math.round(Math.random() * 50);
// var Lulus = true;
// var Tidak = false;

// var NIM = (Nama_Mahasiswa + Nomor_Absen + Lulus)
// console.log(NIM)