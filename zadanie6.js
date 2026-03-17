/*
Co działa: 
*Poprawnie zdefiniowano tablicę obiektów reprezentującą filmy. Użyto metody filter() dwukrotnie: do znalezienia filmów nieobejrzanych oraz tych z oceną wyższą niż 8.0. Następnie za pomocą map() wyciągnięto same tytuły z wybranego zbioru. Tablica wejściowa pozostała niemutowana.
*Rozszerzenie własne: Do każdego obiektu z filmem dodano nową właściwość duration (czas trwania w minutach). Stworzono dodatkowy warunek, który łączy zapytania: szuka filmów nieobejrzanych, wysoko ocenianych (powyżej 8.0) i trwających krócej niż 120 minut. Dodano również funkcję strzałkową do formatowania nagłówków w konsoli.
*Największa trudność: Logiczne połączone wielu warunków wewnątrz funkcji filtrującej oraz odpowiednie sformatowanie wyników w konsoli. Aby uniknąć błędów debuggera i problemów ze zwiniętymi tablicami w środowisku VS Code, konieczne było zastosowanie metody JSON.stringify(..., null, 2), co wymusiło pełne rozwinięcie obiektów na poziomie generowania tekstu.
*/


const cinemaCollection = [
  { movieTitle: "Arrival", genre: "sci-fi", score: 8.1, isSeen: true, duration: 116 },
  { movieTitle: "Whiplash", genre: "drama", score: 8.5, isSeen: false, duration: 106 },
  { movieTitle: "Dune", genre: "sci-fi", score: 8.0, isSeen: false, duration: 155 },
  { movieTitle: "Inside Out", genre: "animation", score: 8.1, isSeen: true, duration: 95 },
  { movieTitle: "Parasite", genre: "thriller", score: 8.6, isSeen: false, duration: 132 }
];

const generateSectionHeader = (title) => {
  return `\n--- ${title.toUpperCase()} ---`;
};

const unwatchedMovies = cinemaCollection.filter(movie => movie.isSeen === false);

const highRatedMovies = cinemaCollection.filter(movie => movie.score > 8.0);

const perfectForTonight = cinemaCollection.filter(
  movie => movie.isSeen === false && movie.score > 8.0 && movie.duration < 120
);

const titlesToWatch = perfectForTonight.map(movie => movie.movieTitle);

console.log(generateSectionHeader("Wszystkie nieobejrzane filmy"));
console.log(JSON.stringify(unwatchedMovies, null, 2));

console.log(generateSectionHeader("Filmy z oceną powyżej 8.0"));
console.log(JSON.stringify(highRatedMovies, null, 2));

console.log(generateSectionHeader("Propozycje na dzisiejszy wieczór (same tytuły)"));
if (titlesToWatch.length > 0) {
  console.log(`Zalecane tytuły do obejrzenia: ${titlesToWatch.join(", ")}`);
} else {
  console.log("Brak filmów spełniających wszystkie kryteria na szybki seans.");
}
