

//1. Weryfikacja długości tablicy
//console.log(imiona.length > 2)

//2. Dostawanie się do elementów tablicy -> indexy zaczynają się od wartości 0
//console.log(imiona[1])

//3.Nadpisywanie elementu w tablicy
// imiona[0] = "Wojtek";
// console.log(imiona)

//4. Dodawanie elementu do tablicy
// imiona.push(41)
// console.log(imiona)

//5. Usuwanie elementu z końca tablicy
// imiona.pop();
// imiona.pop();
// console.log(imiona)

//6. Usuwanie elementu z początku tablicu
// imiona.shift();
// console.log(imiona)



//7. Dodawanie elementu na początku tablicy
// imiona.unshift("Karol");
// console.log(imiona)

//8. Usuwanie konkretnego elementu z tablicy 
// const indexElement = imiona.indexOf("Krzyś")
// imiona.splice(indexElement, 2)
// console.log(imiona)

//9. Przerobienie tablicy na string 
// const string = imiona.join(" test ");
// console.log(string);

//10. Odwracanie elementów w tablicy 
// imiona.reverse();
// console.log(imiona)



//11. Sortowanie tablicy 
// imiona.sort().reverse();
// console.log(imiona)

const imiona = ["Jaś", "Krzyś", "Ola", "Bartosz", "Tomasz", "Alicja"];
const imiona2 = ["Rafał", "Wojtek", "Karola"]

//12. Mapowanie elementów tablicy
// imiona.map(imie => {
//     if(imie.length > 5) {
//         console.log("Imie: " + imie + " ma więcej niż 5 znaków")
//     } else {
//         console.log("Imie: " + imie + " ma mniej niż 5 znaków")
//     }
// })

//13. Łączenie tablic
const imiona3 = imiona.concat(imiona2);
console.log(imiona3)