const fs = require('fs');
const util = require('util');

// Konvertera callback-funktioner till Promises
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Async-funktion för att läsa och skriva filer
async function hanteraFiler() {
  try {
    // Skriv data till en fil
    await writeFile('text.txt', 'Hej! Detta är ett test av Promises.');

    console.log('Data har skrivits till filen.');

    // Läs data från filen
    const data = await readFile('text.txt', 'utf8');

    console.log('Innehållet i filen:');
    console.log(data);
  } catch (err) {
    // Hantera eventuella fel
    console.error('Ett fel uppstod:', err.message);
  }
}

// Kör funktionen
hanteraFiler();
