// var angka  = 10;
// var n = 4;
// var temp = "";
// var total = 0;

// for(var i = 0; i < n; i+=1){
//     console.log(i+1)
//     console.log("Angka ->", angka)
//     break;
// }

// temp (temporary)
// result : 1234
// for(var i = 0; i < n; i+=1){
//     temp = temp + (i+1)
// }
// console.log(temp)

// // result : ****
// for(var i = 0; i < n; i+=1){
//     temp = temp + "*"
// }
// console.log(temp)

// result : x1x2x3x4
// for(var i = 0; i < n; i+=1){
//     temp = temp + "x" + (i+1);
// }
// console.log(temp)

// result :
// 
// x1
// 11
// x2
// 12
// x3
// 13
// x4
// 14

// for(var i = 0; i < n; i+=1){
//         console.log("x" + (i+1));
//         console.log(angka + (i+1));
// }

// result : Total = 15

// 1 2 3 4 5
// 3 3 4 5
// 6 4 5
// 10 5
// 15
// for(var i = 0; i < n; i+=1){
//     total = total + (i+1)
// }
// console.log("Total =" , total)

// var name = "Alpine David"
// built in function -> .length, .toUpperCase(), .toLowerCase()
// for(var i = 0; i< name.length; i++){
// console.log(name[i].toUpperCase())
// }
// console.log(name.length)

// var kode = "abbaaabbaabbb";
// var flagA = 0;
// var flagB = 0;

// for(var i = 0; i<kode.length; i++){
//     if(kode[i] === "a"){
//         flagA++;
//     }else if(kode[i] === "b"){
//         flagB++;
//     }
// }
// console.log("Jumlah a : " + flagA)
// console.log("Jumlah a : " + flagB)

//Task
// * input = 10
// result :

// * 1 adalah ganjil
// * 2 adalah genap
// * 3 adalah ganjil
// * 4 adalah genap
// * 5 adalah ganjil

// Pseudocode
// STORE number WITH ANY NUMBER
// 
// FOR i EQUAL 1 TO number
//    IF i MOD 2 EQUAL 1
//     DISPLAY i + "adalah angka ganjil"
//    ELSE IF i MOD 2 EQUAL 0
//     DISPLAY i + "adalah angka genap"
// END IF

// var number = 15;

// for(var i = 1; i<= number; i++){
//     if (i % 2 === 0){
//         console.log(i + " adalah angka genap");
//     }else if (i % 2 === 1){
//         console.log(i + " adalah angka ganjil");
//     }
// }

// var number = 5;
// var i = 1;

// while (i <= number){
//     if (i % 2 === 0){
//         console.log(i + " adalah angka genap");
//     }else if (i % 2 === 1){
//         console.log(i + " adalah angka ganjil");
//     }
//     i++;
// }

// Task
// print num angka ganjil pertamax -> 1 3 5 7 9
// var num = 5;
// var i = 1;
// var flag = 0;

// while(num>0){
//     if(i%2 === 1){
//         console.log(i);
//         flag++
//     }
//     i++;
//     if(flag === num){
//         break;
//     }
// }

/** 
result :
xxx
xxx
xxx
*/

// var temp = ""
// for (var i = 0; i<3; i++){
//     temp = ""
//     for(var j = 0; j<3; j++){
//         temp += "x"
//         // console.log(i,j)
//     }
//     console.log(temp)
// }

var kalimat = "saya makan nasi ayam enak"
// result
/**
 * saya
 * maka
 * nasi
 * ayam
 * enak
 */
// var temp = ""
// for(var i = 0; i< kalimat.length; i++){
//     console.log(kalimat[i])
// }
// for(var i = 0; i< kalimat.length; i++){
//     if(kalimat[i] !== " "){
//         temp += kalimat[i]
//     }else if(kalimat[i] === " "){
//         console.log(temp);
//         temp = ""
//     }
//     if(i === kalimat.length - 1){
//         console.log(temp);
//         temp = ""
//     }
// }

// Result
/**
 * AYAS
 * NAKAM
 * ISAN
 * MAYA
 * KANE
 */
 var temp = ''

 for(var i = 0; i < kalimat.length; i++){
     if(kalimat[i] !== ' '){
         temp += kalimat[i]
     }else if(kalimat[i] === ' '){
        var temp1 = ''
        for(var j = temp.length-1; j >= 0;j--){
            temp1 += temp[j].toUpperCase()
        }
        console.log(temp1)
        temp = ''
    }
    if(i === kalimat.length - 1){
        var temp1 = ''
        for(var j = temp.length-1; j >= 0;j--){
            temp1 += temp[j].toUpperCase()
        }
        console.log(temp1)
        temp = '' 
    }
 }