/*
Co działa: 
*Poprawnie zdefiniowano funkcję z parametrami. Funkcja zwraca sformatowany tekst za pomocą instrukcji `return`. Użyto parametru domyślnego dla listy zadań, a kod pokazuje trzy różne wywołania funkcji, w tym jedno bez podawania listy.
*Rozszerzenie własne: Dodano trzeci parametr `date` (określający dzień). Zadania na liście są automatycznie numerowane dzięki użyciu metody `map` i `join`. Dodano również warunek sprawdzający, czy przekazana tablica zadań jest pusta, co skutkuje osobnym komunikatem o dniu wolnym.
*Największa trudność: Czytelne sformatowanie wielolinijkowego łańcucha znaków (template string) oraz odpowiednie obsłużenie sytuacji, w której lista zadań jest pusta, a nie tylko niezdefiniowana.
*/

const defaultTasksList = ["odpoczynek", "spacer", "oglądanie serialu"];

const generateSchedule = (personName, dailyTasks = defaultTasksList, date = "dzisiaj") => {
  if (dailyTasks.length === 0) {
    return `Plan dnia dla: ${personName} | Termin: ${date}\nBrak zaplanowanych zadań. Czas na pełen relaks!\n`;
  }

  const tasksCount = dailyTasks.length;
  
  const formattedTasks = dailyTasks.map((task, index) => {
    return `${index + 1}. ${task}`;
  }).join('\n');

  return `Plan dnia dla: ${personName} | Termin: ${date} | Liczba zadań: ${tasksCount}\n${formattedTasks}\n`;
};

const studentTasks = ["zajęcia na uczelni", "zakupy spożywcze", "trening"];
const scheduleKamil = generateSchedule("Kamil", studentTasks, "poniedziałek");
console.log(scheduleKamil);

const scheduleAnna = generateSchedule("Anna");
console.log(scheduleAnna);

const schedulePiotr = generateSchedule("Piotr", [], "niedziela");
console.log(schedulePiotr);
