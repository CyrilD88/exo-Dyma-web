// ========================================================================= inverser une chaine de caractères ======================================================

// function reverString(str) {
//   console.log(str.split("").reverse().join(""));
// }

// const string = "hello les gens";

// reverString(string);

// ========================================================================= vérifier si un mot est un palindrome (il peut s'écrire dans les deux sens) ======================================================

// function palindrome(wrd) {
//   if (wrd === wrd.split("").reverse().join("")) {
//     console.log("c'est un palindrome");
//   } else {
//     console.log("ce n'est pas un palindrome");
//   }
// }

// const word = "laval";

// palindrome(word);

// ========================================================================= Trouver le mot le plus long ======================================================

// function longestWord(str) {
//   let splitStr = str.split(" ");
//   let array = [];
//   for (let i = 0; i < splitStr.length; i++) {
//     array.push(splitStr[i].length);
//   }
//   console.log(Math.max(...array));
// }

// let string = "le Javascript c'est super cool";

// longestWord(string);

// ====

// const btn = document.querySelector("button");

// function random() {
//   console.log(Math.round(Math.random() * 10));
// }

// btn.addEventListener("click", random);

// ===================================== Convertir un nombre en un array reverse ====================================
// function digi(n) {
//   console.log(String(n).split("").map(Number).reverse());
// }
// digi(123456);

// function areYouPlayingBanjo(name) {
//   if (name.split("")[0] === "R" || "r") {
//     console.log(`${name} plays banjo`);
//   } else {
//     console.log(`${name} does not play banjo`);
//   }
// }

// areYouPlayingBanjo("cyril");

// ===================================== retourner un array en doublant le nombre à l'intérieur ====================================
// function map(x) {
//   console.log(x.map((number) => number * 2));
// }

// map([1, 2, 3]);

// ============================== Classer un tableau par ordre numérique + concaténation =========================================
// function testArray(arr) {
//   const arrNew = [7, 8, 9, 10];
//   let arrNewDeux = arrNew.concat(arr);

//   arrNewDeux.sort((a, b) => {
//     return b - a;
//   });
//   console.log(arrNewDeux);
//   //   console.log(arr.sort());
//   //   console.log(arrNew.concat(arr).sort());
// }

// testArray([1, 6, 3, 11, 5, 4, 2, 99, 100]);

function greet(name) {
  const sentence = `Hello, ${name} how are you doing today?`;
  console.log(sentence);
}

greet("Joseph");
