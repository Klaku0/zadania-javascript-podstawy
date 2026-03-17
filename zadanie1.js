/*
Co działa:
* Poprawnie zainicjalizowano obiekt `studentProfile`. Wyświetlono pełne imię i nazwisko, zbudowano komunikat opisowy za pomocą template literals oraz dodano logikę warunkową sprawdzającą pełnoletność.
* Rozszerzenie własne: Dodano nowe pole `favoriteLanguage` do obiektu. Dodatkowo weryfikacja wieku została wydzielona do osobnej funkcji pomocniczej (strzałkowej) `checkAgeStatus`.
* Największa trudność: Zadanie przebiegło bez większych problemów. Głównym wyzwaniem było wymyślenie sensownego rozszerzenia własnego, tak aby pasowało do kontekstu wizytówki.
*/
const studentProfile = {
  firstName: "Anna",
  lastName: "Nowak",
  city: "Wrocław",
  age: 22,
  fieldOfStudy: "Cyberbezpieczeństwo",
  favoriteLanguage: "JavaScript"
};

console.log("Imię i nazwisko: " + studentProfile.firstName + " " + studentProfile.lastName);

const profileDescription = `Student/ka ${studentProfile.firstName} studiuje kierunek ${studentProfile.fieldOfStudy} w mieście ${studentProfile.city}. Jego/Jej ulubionym językiem programowania jest ${studentProfile.favoriteLanguage}.`;
console.log(profileDescription);

const checkAgeStatus = (age) => {
  if (age >= 18) {
    return "Użytkownik jest pełnoletni i ma pełen dostęp do konta.";
  } else {
    return "Użytkownik jest niepełnoletni. Wymagana jest zgoda opiekuna.";
  }
};

const ageMessage = `Weryfikacja wieku (${studentProfile.age} lat): ${checkAgeStatus(studentProfile.age)}`;
console.log(ageMessage);
