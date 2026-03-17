/*
Co działa: 
*Poprawnie zaimplementowano moduł wyszukiwarki kontaktów. Stworzono osobne funkcje do filtrowania po mieście i po statusie ulubionych, opierając się na metodzie filter(). Zbudowano funkcję formatującą wyniki do postaci "imię — telefon" przy użyciu metody map(). Wywołano funkcje w kilku różnych scenariuszach, a oryginalna tablica nie uległa zmianie.
*Rozszerzenie własne: Dodano nową właściwość group (kategoria kontaktu, np. Rodzina, Praca) do każdego obiektu. Zgodnie z wymogami wprowadzono funkcję searchContactsByName, pozwalającą na wyszukiwanie po fragmencie nazwy. Funkcja ta ignoruje wielkość liter. Dodatkowo funkcja formatująca została rozbudowana, by wyświetlać przypisaną grupę w nawiasach kwadratowych.
*Największa trudność: Implementacja wyszukiwania po fragmencie tekstu, która wymagała użycia metod toLowerCase() oraz includes() na odpowiednich polach, aby uodpornić wyszukiwarkę na błędy użytkownika wpisującego zapytanie wielkimi lub małymi literami.
*/

const addressBook = [
  { fullName: "Anna Nowak", phoneNumber: "500-100-200", location: "Katowice", isFavorite: true, group: "Rodzina" },
  { fullName: "Piotr Lis", phoneNumber: "501-300-700", location: "Sosnowiec", isFavorite: false, group: "Praca" },
  { fullName: "Ola Marek", phoneNumber: "502-400-900", location: "Katowice", isFavorite: true, group: "Znajomi" },
  { fullName: "Jan Kowalski", phoneNumber: "503-500-100", location: "Warszawa", isFavorite: false, group: "Praca" }
];

const getContactsByLocation = (contactsArray, targetLocation) => {
  return contactsArray.filter(contact => contact.location === targetLocation);
};

const getFavoriteContacts = (contactsArray) => {
  return contactsArray.filter(contact => contact.isFavorite === true);
};

const searchContactsByName = (contactsArray, query) => {
  const lowerCaseQuery = query.toLowerCase();
  return contactsArray.filter(contact => 
    contact.fullName.toLowerCase().includes(lowerCaseQuery)
  );
};

const formatContactsList = (contactsArray) => {
  return contactsArray.map(contact => 
    `${contact.fullName} — ${contact.phoneNumber} [${contact.group}]`
  );
};


console.log("--- SCENARIUSZ 1: Kontakty z Katowic ---");
const katowiceContacts = getContactsByLocation(addressBook, "Katowice");
const formattedKatowice = formatContactsList(katowiceContacts);
console.log(formattedKatowice.join("\n"));

console.log("\n--- SCENARIUSZ 2: Tylko ulubione kontakty ---");
const favoriteContacts = getFavoriteContacts(addressBook);
const formattedFavorites = formatContactsList(favoriteContacts);
console.log(formattedFavorites.join("\n"));

console.log("\n--- SCENARIUSZ 3: Wyszukiwanie po fragmencie 'now' ---");
const searchResults = searchContactsByName(addressBook, "now");
const formattedSearchResults = formatContactsList(searchResults);
if (formattedSearchResults.length > 0) {
  console.log(formattedSearchResults.join("\n"));
} else {
  console.log("Brak wyników dla podanego zapytania.");
}

console.log("\n--- SCENARIUSZ 4: Złożone filtry (Ulubione z Katowic) ---");
const katowiceFavorites = getFavoriteContacts(katowiceContacts);
console.log(formatContactsList(katowiceFavorites).join("\n"));
