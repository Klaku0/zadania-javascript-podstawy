/*
Co działa: 
* Poprawnie obliczono sumę wydatków za pomocą metody `reduce()`, wyliczono średnią oraz znaleziono największy wydatek przy pomocy `Math.max()`. Wygenerowano czytelny raport końcowy w konsoli.
* Rozszerzenie własne: Dodano stałą `budgetLimit` (ustalony limit budżetu) oraz funkcję pomocniczą strzałkową `formatCurrency`, która dba o estetyczne wyświetlanie kwot (zaokrąglenie do 2 miejsc po przecinku i dodanie waluty "PLN"). Dodano również instrukcję warunkową sprawdzającą, czy budżet został przekroczony.
* Największa trudność: Użycie operatora spread (`...`) przy przekazywaniu tablicy do `Math.max()`, ponieważ funkcja ta domyślnie przyjmuje ciąg argumentów, a nie całą tablicę.
*/

const weeklyExpenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];

const budgetLimit = 200; 

const formatCurrency = (amount) => {
  return amount.toFixed(2) + " PLN";
};

const totalSpent = weeklyExpenses.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const averageExpense = totalSpent / weeklyExpenses.length;

const maxExpense = Math.max(...weeklyExpenses);

console.log("--- RAPORT TYGODNIOWY ---");
console.log(`Suma wydatków: ${formatCurrency(totalSpent)}`);
console.log(`Średni wydatek: ${formatCurrency(averageExpense)}`);
console.log(`Największy wydatek: ${formatCurrency(maxExpense)}`);
console.log("-------------------------");

if (totalSpent > budgetLimit) {
  const overage = totalSpent - budgetLimit;
  console.log(`Uwaga: Przekroczono zaplanowany budżet o ${formatCurrency(overage)}!`);
} else {
  const remaining = budgetLimit - totalSpent;
  console.log(`Świetnie! Zmieściłeś się w budżecie. Pozostało: ${formatCurrency(remaining)}.`);
}
