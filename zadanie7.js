/*
Co działa: 
*Poprawnie zaimplementowano tablicę zgłoszeń. Wykorzystano metodę find() do znalezienia konkretnego rekordu oraz map() w połączeniu ze spread syntax (...) do zaktualizowania statusu bez modyfikowania oryginalnej tablicy. Policzono zgłoszenia o statusie "w trakcie" i wyświetlono obie tablice, potwierdzając ich niezależność.
*Rozszerzenie własne: Do każdego zgłoszenia dodano nową właściwość estimatedCost (szacunkowy koszt naprawy w PLN). Zamiast jednorazowego liczenia, utworzono uniwersalną funkcję pomocniczą countTicketsByStatus, która potrafi zliczyć zgłoszenia dla każdego dowolnie przekazanego statusu. Przy aktualizacji rekordu zmieniono nie tylko status, ale i dodano wycenę.
*Największa trudność: Prawidłowe zastosowanie operatora spread (...) wewnątrz metody map(). Wymagało to ostrożności, aby poprawnie skopiować wszystkie dotychczasowe właściwości zgłoszenia, a nadpisać tylko te wybrane (stan i koszt), upewniając się przy tym, że oryginalna tablica pozostaje nienaruszona (podejście niemutowalne).
*/

const serviceTickets = [
  { id: 1, customer: "Anna", deviceType: "laptop", state: "nowe", estimatedCost: 0 },
  { id: 2, customer: "Piotr", deviceType: "telefon", state: "w trakcie", estimatedCost: 200 },
  { id: 3, customer: "Ola", deviceType: "tablet", state: "zakończone", estimatedCost: 150 }
];

const countTicketsByStatus = (ticketsArray, targetStatus) => {
  return ticketsArray.filter(ticket => ticket.state === targetStatus).length;
};

const searchedTicket = serviceTickets.find(ticket => ticket.id === 2);
console.log("--- ZNALEZIONE ZGŁOSZENIE (ID: 2) ---");
console.log(JSON.stringify(searchedTicket, null, 2));

const updatedTickets = serviceTickets.map(ticket => {
  if (ticket.id === 1) {
    return { ...ticket, state: "w trakcie", estimatedCost: 350 };
  }
  return ticket;
});

const inProgressCount = countTicketsByStatus(updatedTickets, "w trakcie");
console.log(`\nLiczba zgłoszeń ze statusem "w trakcie": ${inProgressCount}`);

console.log("\n--- ORYGINALNA TABLICA (niezmieniona) ---");
console.log(JSON.stringify(serviceTickets, null, 2));

console.log("\n--- ZAKTUALIZOWANA TABLICA (po zmianach) ---");
console.log(JSON.stringify(updatedTickets, null, 2));
