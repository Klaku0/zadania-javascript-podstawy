/*
Co działa: 
*Poprawnie zaimplementowano tablicę obiektów reprezentującą dziennik aktywności. Użyto metody reduce() dwukrotnie: do obliczenia łącznego czasu oraz łącznej liczby spalonych kalorii. Wykorzystano metodę filter() do wyodrębnienia treningów trwających dłużej niż 30 minut. Raport końcowy został wygenerowany w całości za pomocą template literals (szablonów ciągów znaków) i zawiera wszystkie wymagane wartości liczbowe.
*Rozszerzenie własne: Do każdego obiektu w tablicy dodano nową właściwość day (dzień tygodnia). Dodatkowo zaimplementowano logikę wyszukującą najbardziej kaloryczny trening, ponownie przy użyciu metody reduce(). Stworzono również funkcję pomocniczą formatTime(), która przelicza łączny czas w minutach na bardziej czytelny format godzinowy (np. 2h 45m).
*Największa trudność: Zastosowanie metody reduce() do znalezienia obiektu o największej wartości (najbardziej kaloryczny trening), co wymagało porównywania właściwości akumulatora i bieżącego elementu, a następnie zwracania całego obiektu, zamiast standardowego sumowania liczb.
*/

const weeklyWorkouts = [
  { sportType: "bieg", duration: 35, burnedCalories: 320, day: "poniedziałek" },
  { sportType: "rower", duration: 50, burnedCalories: 410, day: "środa" },
  { sportType: "spacer", duration: 20, burnedCalories: 90, day: "czwartek" },
  { sportType: "siłownia", duration: 60, burnedCalories: 450, day: "sobota" }
];

const formatTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

const totalDuration = weeklyWorkouts.reduce((accumulator, workout) => accumulator + workout.duration, 0);

const totalCalories = weeklyWorkouts.reduce((accumulator, workout) => accumulator + workout.burnedCalories, 0);

const longWorkouts = weeklyWorkouts.filter(workout => workout.duration > 30);

const mostCaloricWorkout = weeklyWorkouts.reduce((maxWorkout, currentWorkout) => {
  if (currentWorkout.burnedCalories > maxWorkout.burnedCalories) {
    return currentWorkout;
  }
  return maxWorkout;
});

const finalReport = `
--- TYGODNIOWY RAPORT AKTYWNOŚCI ---
Podsumowanie ogólne:
- Łączny czas treningów: ${formatTime(totalDuration)} (dokładnie ${totalDuration} minut)
- Łączna liczba spalonych kalorii: ${totalCalories} kcal
- Liczba długich treningów (powyżej 30 min): ${longWorkouts.length}

Wyróżnienie:
Najbardziej kaloryczny trening to ${mostCaloricWorkout.sportType} w dniu: ${mostCaloricWorkout.day}.
Udało się wtedy spalić aż ${mostCaloricWorkout.burnedCalories} kcal!
`;

console.log(finalReport);
