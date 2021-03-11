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

// Algoritma
// 1. buat variabel position
// 2. buat variabel experience
// 3. buat variabel salary
// 3. cek experience,
//     3.1 jika Junior, jika experience kurang dari 2 tampilkan "gaji Rp. 3.000.000"
//     3.2 jika Junior, jika experience antara  2 sampai 5 tampilkan "gaji Rp. 4.000.000"
//     3.3 jika Junior, jika experience lebih dari 5 tampilkan "gaji Rp. 5.000.000"
//     3.4 jika Middle, jika experience kurang dari 2 tampilkan "gaji Rp. 5.500.000"
//     3.5 jika Middle, jika experience antara  2 sampai 5 tampilkan "gaji Rp. 6.500.000"
//     3.6 jika Middle, jika experience lebih dari 5 tampilkan "gaji Rp. 7.500.000"
//     3.7 jika Senior, jika experience kurang dari 2 tampilkan "gaji Rp. 7.500.000"
//     3.8 jika Senior, jika experience antara  2 sampai 5 tampilkan "gaji Rp. 9.000.000"
//     3.9 jika Senior, jika experience lebih dari 5 tampilkan "gaji Rp. 10.000.000"
// 4. Tampilkan hasil gajinya

// Pseudocode
// * STORE position WITH ANY STRING
// * STORE experience WITH ANY NUMBER
// * STORE salary WITH ANY NUMBER

// * IF position EQUAL "Junior"
//     IF experience LESS THAN 2
//         SET "gaji Rp. 3.000.000"
//     ELSE IF experience MORE THAN 2 AND LESS THAN 5
//         SET "gaji Rp. 4.000.000"
//     ELSE IF experience MORE THAN 5
//         SET "gaji Rp. 5.000.000"
// END IF

// ELSE IF position EQUAL "Middle"
//     IF experience LESS THAN 2
//         SET "gaji Rp. 5.500.000"
//     ELSE IF experience MORE THAN 2 AND LESS THAN 5
//         SET "gaji Rp. 6.500.000"
//     ELSE IF experience MORE THAN 5
//         SET "gaji Rp. 7.500.000"
// END IF

// ELSE IF position EQUAL "Senior"
//     IF experience LESS THAN 2
//         SET "gaji Rp. 7.500.000"
//     ELSE IF experience MORE THAN 2 AND LESS THAN 5
//         SET "gaji Rp. 9.000.000"
//     ELSE IF experience MORE THAN 5
//         SET "gaji Rp. 10.000.000"
// END IF

// Coding
// var position = "Senior";
// var experience = 10;
// var salary;

// switch(position){
//     case "Junior" :
//         if(experience < 2){
//             salary = 3000000
//         }else if(experience >= 2 && experience <= 5){
//             salary = 4000000
//         }else if(experience > 5){
//             salary = 5000000
// }
// break;
// }
//Task 7 Maret 2021
// ## Cek ganjil dan genap

// Input : 5

// Output : 5 adalah ganjil

/**
 * Algoritma
 * 1. buat variabel angka
 * 2. jika angka dibagi 2 sama dengan 1, maka adalah angka ganjil
 * 3. jika angka dibagi 2 sama dengan 0, maka adalah angka genap
 * 
 *Pseudocode
STORE number WITH ANY NUMBER

FOR i EQUAL 1 TO number
   IF i MOD 2 EQUAL 1
    DISPLAY i + "adalah angka ganjil"
   ELSE IF i MOD 2 EQUAL 0
    DISPLAY i + "adalah angka genap"
END IF
 * 
 */

// Coding
// var number = 5;

// for(var i = 1; i<= number; i++){
//         if (i % 2 === 0){
//             console.log(i + " adalah angka genap");
//         }else if (i % 2 === 1){
//             console.log(i + " adalah angka ganjil");
//         }
//     }

// ## Score student

// Dalam sebuah sekolah, seorang guru diminta membuat score dan grade. Dengan syarat :

// Nilai 100 - 85 di beri grade A

// Nilai 84 - 70 diberi grade B

// Nilai 69 - 50  diberi grade C

// nilai 49 - 30 diberi grade D

// nilai 30 - 0 diberi grade E

// Input : 87
// Output : Student mendapatkan grade A

/**
 * Algoritma
 * 1. buat variabel score
 * 2. buat variabel grade
 * 3. jika nilai 100 - 85, maka grade A
 *      jika nilai 84 - 70, maka grade B
 *      jika nilai 69 - 50, maka grade C
 *      jika nilai 49 - 30, maka grade D
 *      jika nilai 30 - 0, maka grade E
 */

/**PSEUDOCODE
 * STORE score WITH ANY NUMBER
 * STORE grade WITH ANY STRING
 * 
 * IF score MORE THAN 85 AND LESS THAN 100
 *      SET grade WITH "A"
 * ELSE IF score MORE THAN 70 AND LESS THAN 84
 *      SET grade WITH "B"
 * ELSE IF score MORE THAN 69 AND LESS THAN 50
 *      SET grade WITH "C"
 * ELSE IF score MORE THAN 49 AND LESS THAN 30
 *      SET grade WITH "D"
 * ELSE IF score MORE THAN 30 AND LESS THAN 0
 *      SET grade WITH "E"
 */
// Coding

var score = 85;
var grade;

for (var i = 0; i >= 85; i++);
    grade = "A"

// ## Tiket masuk 

// Dalam sebuah wahana, terdapat syarat masuk untuk pengunjung. Dengan syarat :

// - Umur harus di atas 15, jika kurang maka tidak boleh masuk
// - Jika uang kurang dari 50000, maka print "Uang tidak cukup"
// - Jika lebih maka boleh masuk

// ## Looping kelipatan 3 dan 5

// Input : 15

// Output :

// 1

// 2

// 3 adalah kelipatan 3

// 4

// 5 adalah kelipatan 5

// 6 adalah kelipatan 3

// 7

// 8

// 9 adalah kelipatan 3

// 10 adalah kelipatan 5

// 11

// 12 adalah kelipatan 3

// 13

// 14

// 15 adalah kelipatan 3 dan 5


// ## Looping segitiga

// Input : 5

// Output :

// *
// **
// ***