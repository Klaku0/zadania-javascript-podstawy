/*
Co działa: 
*Poprawnie zamknięto logikę w funkcji, która przyjmuje tablicę ocen. Wykorzystano metodę reduce() do zsumowania ocen i obliczenia średniej. Określono status zaliczenia (zaliczone/niezaliczone) za pomocą operatora trójargumentowego względem minimalnego progu zapisanego w stałej. Funkcja prawidłowo zwraca obiekt z pełnym podsumowaniem.
*Rozszerzenie własne: Wprowadzono dodatkową funkcję pomocniczą przypisującą ocenę słowną na podstawie wyliczonej średniej (przy użyciu instrukcji if...else). Rozszerzono obiekt wynikowy o tę klasyfikację. Dodano również zabezpieczenie przed dzieleniem przez zero w sytuacji, gdyby tablica wejściowa była pusta.
*Największa trudność: Odpowiednie sformułowanie bloku if...else w funkcji przypisującej ocenę słowną, aby zakresy liczbowe nie nakładały się na siebie, oraz obsługa potencjalnego błędu przy pustej tablicy, gdzie dzielenie sumy przez długość równą zero dałoby wartość Not-a-Number (NaN).
*/

const studentMarks = [3.0, 4.0, 5.0, 3.5, 4.5];

const MIN_PASSING_SCORE = 3.0;

const getVerbalGrade = (averageScore) => {
  if (averageScore >= 4.75) {
    return "bardzo dobry";
  } else if (averageScore >= 3.75) {
    return "dobry";
  } else if (averageScore >= 3.0) {
    return "dostateczny";
  } else {
    return "niedostateczny";
  }
};

const generateStudentReport = (marksArray) => {
  if (marksArray.length === 0) {
    return { error: "Brak ocen do obliczenia średniej." };
  }

  const sumOfMarks = marksArray.reduce((acc, currentMark) => acc + currentMark, 0);
  
  const averageMark = sumOfMarks / marksArray.length;

  const passStatus = averageMark >= MIN_PASSING_SCORE ? "zaliczone" : "niezaliczone";

  const verbalGrade = getVerbalGrade(averageMark);

  return {
    calculatedAverage: Number(averageMark.toFixed(2)),
    status: passStatus,
    classification: verbalGrade
  };
};

const finalReport = generateStudentReport(studentMarks);

console.log("--- RAPORT KOŃCOWY STUDENTA ---");
console.log(JSON.stringify(finalReport, null, 2));
