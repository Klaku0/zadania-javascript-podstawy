/*
Co działa: 
*Poprawnie zaimplementowano tablicę obiektów z listą zakupów. Użyto metod niemutowalnych: `filter()` do wyodrębnienia pilnych produktów oraz `map()` do stworzenia nowej tablicy z nazwami zapisanymi wielkimi literami. Wyświetlono odpowiednie podsumowanie w konsoli.
*Rozszerzenie własne: Do każdego obiektu w tablicy dodano nową właściwość `category` (dział w sklepie). Dodatkowo napisano funkcję pomocniczą (strzałkową) `formatGroceryItem`, która dba o czytelne formatowanie pojedynczego produktu do wyświetlenia na liście tekstowej.
*Największa trudność: Pamiętanie o tym, by nie niszczyć oryginalnej tablicy. Trzeba było uważać, by wyniki działania metod `map` i `filter` przypisać do nowych zmiennych, zamiast nadpisywać dane wejściowe.
*/

const myGroceries = [
  { name: "chleb", quantity: 2, urgent: true, category: "pieczywo" },
  { name: "mleko", quantity: 1, urgent: false, category: "nabiał" },
  { name: "jajka", quantity: 10, urgent: true, category: "nabiał" },
  { name: "makaron", quantity: 3, urgent: false, category: "suche" }
];

const formatGroceryItem = (item) => {
  const urgencyMark = item.urgent ? "[PILNE]" : "[Zwykłe]";
  return `${urgencyMark} ${item.name} (ilość: ${item.quantity}) - Dział: ${item.category}`;
};

console.log("--- PEŁNA LISTA ZAKUPÓW ---");
myGroceries.forEach(item => {
  console.log(formatGroceryItem(item));
});

const urgentGroceries = myGroceries.filter(item => item.urgent === true);

const uppercaseNames = myGroceries.map(item => item.name.toUpperCase());

console.log("\n--- PODSUMOWANIE ---");
console.log(`Liczba pilnych produktów do kupienia: ${urgentGroceries.length}`);
console.log(`Wszystkie produkty do kupienia (nazwy): ${uppercaseNames.join(", ")}`);
