const fs = require('fs');

// Skapa en läsström
const readStream = fs.createReadStream('storfil.txt');

// Skapa en skrivström
const writeStream = fs.createWriteStream('kopia.txt');

// Variabel för att hålla reda på läst data
let totalBytes = 0;

// Lyssna på varje chunk som läses
readStream.on('data', (chunk) => {
  totalBytes += chunk.length;

  console.log(`Läst ${chunk.length} bytes`);
  console.log(`Totalt läst: ${totalBytes} bytes`);
});

// Hantera när filen har lästs klart
readStream.on('end', () => {
  console.log('Läsningen är klar!');
});

// Hantera eventuella läsfel
readStream.on('error', (err) => {
  console.error('Fel vid läsning:', err.message);
});

// Hantera eventuella skrivfel
writeStream.on('error', (err) => {
  console.error('Fel vid skrivning:', err.message);
});

// Kopiera innehållet från läsströmmen till skrivströmmen
readStream.pipe(writeStream);

// Meddela när kopieringen är klar
writeStream.on('finish', () => {
  console.log('Kopieringen är klar!');
  console.log(`Totalt kopierat: ${totalBytes} bytes`);
});
