/*
Co działa: 
*Poprawnie zsumowano wszystkie koszty wyjazdu za pomocą metody reduce(). Wykorzystano tę samą metodę do zbudowania struktury pomocniczej (obiektu), która przechowuje zsumowane wydatki dla każdej z osób. Zidentyfikowano osobę, która zapłaciła najwięcej, poprzez transformację obiektu na tablicę za pomocą Object.entries() i ponowne użycie reduce(). Rozwiązanie jest elastyczne i obsłuży dowolną liczbę wpisów w tablicy wejściowej.
*Rozszerzenie własne: Do każdego obiektu w danych wejściowych dodano właściwość currency (waluta). Zaimplementowano logikę równego podziału kosztów - wyliczono średni koszt na osobę oraz wygenerowano tablicę obiektów podsumowujących, z której jasno wynika, kto jest na plusie (ile powinien otrzymać z powrotem), a kto na minusie (ile musi dopłacić). 
*Największa trudność: Agregacja danych do postaci obiektu za pomocą reduce(), gdzie trzeba było sprawdzać, czy dany klucz (imię osoby) już istnieje, a następnie dynamicznie go dodawać i aktualizować jego wartość. Pewnym wyzwaniem było również odnalezienie najwyższej wartości w samym obiekcie, co wymagało przejścia na operacje tablicowe (Object.entries).
*/

const holidayExpenses = [
  { expenseName: "nocleg", cost: 420, payer: "Anna", currency: "PLN" },
  { expenseName: "paliwo", cost: 260, payer: "Piotr", currency: "PLN" },
  { expenseName: "jedzenie", cost: 180, payer: "Anna", currency: "PLN" },
  { expenseName: "bilety", cost: 140, payer: "Ola", currency: "PLN" }
];

const totalTripCost = holidayExpenses.reduce((accumulator, currentExpense) => {
  return accumulator + currentExpense.cost;
}, 0);

const expensesPerPerson = holidayExpenses.reduce((balances, currentExpense) => {
  const person = currentExpense.payer;
  
  if (!balances[person]) {
    balances[person] = 0;
  }
  
  balances[person] += currentExpense.cost;
  return balances;
}, {});

const topPayerData = Object.entries(expensesPerPerson).reduce((maxRecord, currentRecord) => {
  const currentAmount = currentRecord[1];
  const maxAmount = maxRecord[1];
  
  return currentAmount > maxAmount ? currentRecord : maxRecord;
});

const topPayerName = topPayerData[0];
const topPayerAmount = topPayerData[1];

const participants = Object.keys(expensesPerPerson);
const averageCostPerPerson = totalTripCost / participants.length;

const finalSettlements = participants.map(person => {
  const amountPaid = expensesPerPerson[person];
  const balance = amountPaid - averageCostPerPerson;
  
  return {
    osoba: person,
    wplacono: amountPaid,
    saldo: Number(balance.toFixed(2))
  };
});

console.log("--- RAPORT Z WYJAZDU ---");
console.log(`Calkowity koszt wyjazdu: ${totalTripCost} PLN`);
console.log(`Sredni koszt na osobe: ${averageCostPerPerson.toFixed(2)} PLN\n`);

console.log("--- WYDATKI POSZCZEGOLNYCH OSOB ---");
console.log(JSON.stringify(expensesPerPerson, null, 2));

console.log(`\nNajwiecej zaplacil/a: ${topPayerName} (${topPayerAmount} PLN)\n`);

console.log("--- ROZLICZENIE KONCOWE (Rowny podzial) ---");
console.log("Uwaga: Saldo na minusie oznacza koniecznosc doplaty, saldo na plusie to oczekiwany zwrot.");
console.log(JSON.stringify(finalSettlements, null, 2));
