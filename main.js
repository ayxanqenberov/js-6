//   verilmis arraye uygunn olaraq arrow functiondan isdifade ederek dinamik olaraq
// bir array ve bir simvol("herf") qebul eden funksiya yaradin
// gonderilen herfle uygun olaraq o herfle baslayan adlari secib 
// yeni arrayde ekrana cap elesin
// qeyd: for of dan istifade ede bilersiz .
// basa dusmediyiniz hisse varsa sorusun ugurlar
// 
// let arraynew = []
// let arrayFunc = (basherf) => {
//     for (let words = 0; words < arrayy.length; words++) {
//         for (i = 0; i < words.length; i+1) {
//             if(basherf == words[i][1]){
//                 console.log(arraynew.push(words));
//             }
//         }
//     }
// for (let i of arrayy) {
//     if () {
//         console.log(arraynew.push(arrayy[i]));
//     }
// }
// }
// arrayFunc("A")
// console.log(arrayNew);


// ! Netice 
let arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Ali", "Malik", "Kamil"];
let arrayNew = [];

let arrayFunct = (letter) => {
    for (let i = 0; i < arrayy.length; i++) {
        let firstLetter = arrayy[i][0];
        if (firstLetter === letter) {
            arrayNew.push(arrayy[i]);
        }
    }
}

arrayFunct("A");
console.log(arrayNew); 