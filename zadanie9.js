/*
Co działa: 
*Poprawnie zaimplementowano tablicę obiektów reprezentującą koszyk. Wykorzystano metodę map() do wygenerowania czytelnych opisów poszczególnych pozycji (ilość x nazwa) oraz obliczenia wartości cząstkowych. Użyto metody reduce() do zsumowania całkowitej wartości koszyka. Zaimplementowano logikę warunkową (if), która nalicza rabat po przekroczeniu ustalonego progu i poprawnie oblicza cenę końcową.
*Rozszerzenie własne: Do obiektów w koszyku dodano właściwość 'category'. Utworzono funkcję pomocniczą formatCurrency(), która dba o poprawne wyświetlanie cen (zawsze do dwóch miejsc po przecinku z dopiskiem PLN). Dodano również dodatkową logikę w podsumowaniu, która oblicza i wyświetla kwotę zaoszczędzoną dzięki rabatowi lub kwotę, jakiej brakuje do uzyskania zniżki.
*Największa trudność: Odpowiednie zaplanowanie kolejności działań, tak aby najpierw obliczyć wartość całkowitą koszyka z użyciem reduce(), a dopiero na jej podstawie sprawdzać warunek przyznania rabatu i obliczać cenę końcową, pamiętając o specyfice działań na liczbach zmiennoprzecinkowych w języku JavaScript.
*/

const shoppingBasket = [
  { productName: "Chleb", unitPrice: 4.5, amount: 2, category: "pieczywo" },
  { productName: "Ser", unitPrice: 9.9, amount: 1, category: "nabiał" },
  { productName: "Sok", unitPrice: 6.2, amount: 3, category: "napoje" }
];

const DISCOUNT_LIMIT = 30;
const DISCOUNT_RATE = 10;

const formatCurrency = (value) => {
  return value.toFixed(2) + " PLN";
};

const basketDescriptions = shoppingBasket.map(item => {
  const itemTotalValue = item.unitPrice * item.amount;
  return `${item.amount} x ${item.productName} (${item.category}) = ${formatCurrency(itemTotalValue)}`;
});

const totalBeforeDiscount = shoppingBasket.reduce((accumulator, item) => {
  return accumulator + (item.unitPrice * item.amount);
}, 0);

let finalTotal = totalBeforeDiscount;
let savedAmount = 0;

if (totalBeforeDiscount > DISCOUNT_LIMIT) {
  savedAmount = totalBeforeDiscount * (DISCOUNT_RATE / 100);
  finalTotal = totalBeforeDiscount - savedAmount;
}

console.log("--- ZAWARTOŚĆ KOSZYKA ---");
console.log(basketDescriptions.join("\n"));

console.log("\n--- PODSUMOWANIE ZAKUPÓW ---");
console.log(`Wartość przed rabatem: ${formatCurrency(totalBeforeDiscount)}`);

if (totalBeforeDiscount > DISCOUNT_LIMIT) {
  console.log(`Przyznano rabat: ${DISCOUNT_RATE}%`);
  console.log(`Zaoszczędzono: ${formatCurrency(savedAmount)}`);
} else {
  const missingForDiscount = DISCOUNT_LIMIT - totalBeforeDiscount;
  console.log(`Brakuje ${formatCurrency(missingForDiscount)}, aby otrzymać rabat w wysokości ${DISCOUNT_RATE}%.`);
}

console.log(`DO ZAPŁATY: ${formatCurrency(finalTotal)}`);
