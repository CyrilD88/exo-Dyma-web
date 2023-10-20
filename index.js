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

// function greet(name) {
//   const array = [1, 2, 3];
//   const sentence = `Hello, ${name} how are you doing today?`;
//   const test = "yolo";
//   const yelo = sentence.split(" ");
//   let arr2 = array.splice(0, 0, "hey");
//   // console.log(sentence);
//   // console.log(test);
//   // console.log(yelo);
//   // console.log(typeof array);
//   // console.log(typeof yelo);
//   // console.log(arr2);
// }

// greet("Joseph");

// let numbers = [1, 10, 56, 2, 3, "hey"];
// let maChaine = "9 méthodes pour manipuler des chaines de caractères";
// let toString = numbers.toString();
// let toArr = maChaine.split(" ").join(" ");
// let toNumber = numbers.toString();
// let toNumber2 = numbers.sort((a, b) => {
//   return a - b;
// });

// let toNumber3 = ["kiwi", "pommes", "poires"];
// let toNumber4 = toNumber3.push("citron");
// console.log(toString);
// console.log(toArr);
// console.log(maChaine);
// console.log(toNumber);
// console.log(toNumber2);
// console.log(toNumber3);
// console.log(toNumber4);

// function lovefunc(flower1, flower2) {
//   return console.log(flower1 % 2 !== flower2 % 2);
// }

// lovefunc(2, 2);

// function betterThanAverage(classPoints, yourPoints) {
//   const sumNote = classPoints.reduce((sum, currentNote) => {
//     return (sum += currentNote);
//   });
//   const sumMoyenne = Math.round(sumNote / classPoints.length);
//   console.log(sumNote);
//   console.log(sumMoyenne);

//   return sumMoyenne <= yourPoints ? console.log("true") : console.log("false");
// }

// betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 35);

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// ================================================================================================================================================================

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// getCount("abracadabra");

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces...

// ============================================================================

// function compterElements(tableau) {
//     console.log(tableau);
//     const yolo = tableau.reduce((acc, curr) => {
//       acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//       return acc;
//     }, {});
//     console.log(yolo);
//   }
//   compterElements([
//     "veste",
//     "clé",
//     "verre",
//     "chien",
//     "biberon",
//     "chien",
//     "veste",
//     "clé",
//     "chien",
//   ]);

//   Énoncé
// Créez une fonction compterElements() qui reçoit un tableau en argument.

// La fonction doit retourner un objet qui comporte en clés les chaînes de caractères du tableau et en valeur le nombre d’occurrences dans le tableau.

// Liste des objectifs à remplir
// Créez et exportez une fonction compterElements() qui reçoit un tableau en argument
// La fonction doit retourner un objet qui comporte une clé unique pour chaque élément du tableau et en valeur le nombre de fois que cet élément est contenu dans le tableau

// ========================================================================================================
// function disemvowel(str) {
//   const yolo = str
//     .split("")
//     .map((word) =>
//       ["a", "e", "i", "o", "u"].includes(word.toLowerCase()) ? "" : word
//     )
//     .join("");
//   console.log(yolo);
// }

// disemvowel("This website is for losers LOL!");

// write a function that takes a string and return a new string with all vowels removed.

// =====================================================================
// function squareDigits(num) {
//   const yolo = Number(
//     ("" + num)
//       .split("")
//       .map(function (val) {
//         return val * val;
//       })
//       .join("")
//   );

//   console.log(yolo);
// }

// squareDigits(2112);

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// ============================================================================================
// function highAndLow(numbers, split = numbers.split(" ")) {
//   const yolo = Math.max(...split) + " " + Math.min(...split);
//   console.log(yolo);
// }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// explications :
// 1/ on doit transformer la chaine de caractères en tableau pour pouvoir trouver le chiffre. Pour cela on utilise .split()
// 2/ comme le paramètre est une chaine de caractères on utilise ... pour le transformer en Array.
// 3/ on devra utiliser numbers.split(" ") deux fois. Pour éviter la répétition on peut le passer en argument.

// ===========================================================================
// function minMax(arr) {
//   const yolo = [Math.min(...arr), Math.max(...arr)];
//   console.log(yolo);
// }

// minMax([1, 2, 3, 4, 5, 11, 6, 10]);

// Write a function that returns both the minimum and maximum number of the given list/array.

// =========================================================================================

// function sortByLength(array) {
//   // Return an array containing the same strings, ordered from shortest to longest
//   console.log(array);
//   const yolo = array.sort((a, b) => a.length - b.length);
//   console.log(yolo);
// }

// sortByLength(["Beg", "Life", "I", "To"]);
// // sortByLength([1, 5, 2, 10, 6, 80, 4]);

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// ==================================================================================================
// function accum(s) {
//   console.log(s);

//   const yolo = s
//     .toLowerCase()
//     .split("")
//     .map((el, index) => el.toUpperCase() + el.repeat(index))
//     .join("-");

//   console.log(yolo);
// }

// accum("ZpglnRxqenU");

// The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
