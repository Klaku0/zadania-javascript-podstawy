/*
Co działa: 
*Poprawnie zaimplementowano asynchroniczną funkcję pobierającą dane o pogodzie z publicznego API za pomocą fetch(). Wykorzystano instrukcje async/await do obsługi obietnic (Promises) oraz blok try...catch do przechwytywania i wyświetlania błędów. Kod z powodzeniem wyciąga z JSON-a temperaturę oraz prędkość wiatru i prezentuje je w czytelnej formie.
*Rozszerzenie własne: Zgodnie z poleceniem, zbudowano funkcję przyjmującą parametry latitude (szerokość), longitude (długość) oraz dodatkowo city (nazwa miasta) w celu generowania czytelnych nagłówków w konsoli. Dodano również manualne sprawdzanie statusu odpowiedzi (response.ok), co pozwala na przechwycenie błędów HTTP (np. 404 lub 400), których sam fetch domyślnie nie rzuca do bloku catch. 
*Największa trudność: Poprawne sformatowanie adresu URL zapytania przy użyciu template literals oraz precyzyjne dotarcie do zagnieżdżonych właściwości w obiekcie JSON zwracanym przez API (np. data.current.temperature_2m). Wymagało to upewnienia się, jak dokładnie wygląda struktura odpowiedzi z Open-Meteo.
*/

const fetchWeatherForLocation = async (latitude, longitude, city = "Nieznana lokalizacja") => {
  console.log(`\n--- POGODA DLA: ${city.toUpperCase()} ---`);
  console.log(`Pobieranie danych dla współrzędnych: [${latitude}, ${longitude}]...`);

  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Błąd HTTP: ${response.status} - nie udało się pobrać danych z API dla podanych współrzędnych.`);
    }

    const data = await response.json();

    const currentTemp = data.current.temperature_2m;
    const tempUnit = data.current_units.temperature_2m;

    const currentWind = data.current.wind_speed_10m;
    const windUnit = data.current_units.wind_speed_10m;

    console.log(`Temperatura: ${currentTemp}${tempUnit}`);
    console.log(`Prędkość wiatru: ${currentWind} ${windUnit}`);

  } catch (error) {
    console.log("Wystąpił problem podczas przetwarzania danych pogodowych!");
    console.log(`Szczegóły błędu: ${error.message}`);
  }
};

fetchWeatherForLocation(50.29, 19.10, "Katowice");

fetchWeatherForLocation(50.81, 19.12, "Częstochowa");

fetchWeatherForLocation(999, 19.12, "Baza na Marsie (Test Błędu)");
