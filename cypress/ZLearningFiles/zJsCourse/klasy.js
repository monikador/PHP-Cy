class WyswietlImie {
    constructor(pierwImie, drugieImie) {
        this.pierwszeImie = pierwImie;
        this.drugieImie = drugieImie;
    }

    koncowyTekst() {
        return console.log("Podane imię to: " + this.pierwszeImie + " oraz " + this.drugieImie)
    }
}

const renderujImie = new WyswietlImie("Tomasz", "Rafał");
console.log(renderujImie.koncowyTekst())

// class Obliczenia extends Sukces {
//     get tekst() {
//         return "Twoje obliczenie to: "
//     }

//     get komunikat() {
//         return "Twoja liczba jest mniejsza od 10!"
//     }

//     dodawanie() {
//         return 2+6
//     }

//     mnozenie() {
//         return 4*5
//     }

//     koncowyRezultat(koncowaWartosc) {
//         console.log(this.tekst + " " + koncowaWartosc)
//         if(koncowaWartosc < 10) {
//             console.log(this.komunikat)
//         }
//     }
// }




