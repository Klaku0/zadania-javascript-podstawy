/*
Co działa: 
*Poprawnie zaimplementowano logikę decyzyjną sprawdzającą gotowość studenta. Wykorzystano instrukcję `if...else` do głównego sprawdzenia, operator trójargumentowy (`?:`) do krótkiego statusu oraz operator `&&` do wyświetlenia ostrzeżenia o braku ładowarki. Zależnie od typu zajęć generowany jest odpowiedni komunikat.
*Rozszerzenie własne: Dodano dodatkową zmienną `hasCoffee` (czy student ma kawę). Wprowadzono też bardziej złożoną logikę w `if...else`, która odróżnia wymagania dla laboratorium (wymagany laptop) i wykładu (wystarczy notatnik lub laptop). Dodano bonusowy komunikat pocieszający/motywujący oparty na posiadaniu kawy.
*Największa trudność: Odpowiednie ułożenie warunków w bloku `if...else`, aby logicznie połączyć wymagania dla różnych typów zajęć z posiadanym sprzętem, zachowując czytelność kodu i nie tworząc niepotrzebnych zagnieżdżeń.
*/


const isLaptopPacked = true;
const isChargerPacked = false;
const isNotebookPacked = true;
const classType = "laboratorium";
const hasCoffee = true; 

console.log(`--- WERYFIKACJA EKWIPUNKU NA: ${classType.toUpperCase()} ---`);

let isReady = false;

if (classType === "laboratorium") {
    if (isLaptopPacked) {
        isReady = true;
        console.log("Wymagania na laboratorium spełnione (masz laptopa).");
    } else {
        console.log("Błąd: Na laboratorium bezwzględnie potrzebujesz laptopa!");
    }
} else if (classType === "wykład") {
    if (isNotebookPacked || isLaptopPacked) {
        isReady = true;
        console.log("Wymagania na wykład spełnione (masz na czym notować).");
    } else {
        console.log("Błąd: Nie masz w czym robić notatek na wykładzie!");
    }
} else {
    console.log("Nieznany typ zajęć. Bierzemy pod uwagę standardowe wyposażenie.");
    isReady = isNotebookPacked;
}

const statusMessage = isReady ? "Status ogólny: GOTOWY na zajęcia!" : "Status ogólny: NIEGOTOWY, wracaj do domu!";
console.log(statusMessage);

isLaptopPacked && !isChargerPacked && console.log("Ostrzeżenie: Masz laptopa, ale brakuje ładowarki! Oby bateria wytrzymała.");

if (!isReady && hasCoffee) {
    console.log("Pocieszenie: Brakuje Ci sprzętu, ale masz kawę. Jakoś przeżyjesz ten dzień!");
} else if (isReady && hasCoffee) {
    console.log("Super combo: Jesteś przygotowany i masz kawę. Będziesz niepokonany!");
}
