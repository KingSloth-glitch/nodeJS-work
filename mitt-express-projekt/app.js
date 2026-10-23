const express = require('express');

const app = express();
const PORT = 3000;

// Middleware: logga varje inkommande förfrågan
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Servera statiska filer från mappen public
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Express är igång!');
});

// Om applikationen
app.get('/about', (req, res) => {
  res.send('Detta är en enkel webbapplikation byggd med Express.');
});

// Kontaktinformation som JSON
app.get('/contact', (req, res) => {
  res.json({
    name: 'Express-applikationen',
    email: 'kontakt@example.com',
    phone: '070-123 45 67',
  });
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
