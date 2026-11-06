const express = require(express);
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'SalonBooking',
});
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const query =
    "SELECT * FROM users WHERE username = '" +
    username +
    "' AND password = '" +
    password +
    "'";
  db.query(query, (err, rows) => {
    if (err) {
      return res.send('Fel inträffade vid databasfråga: ' + err);
    }
    if (rows.length > 0) {
      res.send('Välkommen <b>' + username + '</b>, du är inloggad!');
    } else {
      res.send('Ogiltiga användaruppgifter.');
    }
  });
});
app.get('/messages', (req, res) => {
  const msg = req.query.msg || 'Inget meddelande';
  res.send('<h1>Dina meddelanden</h1><p>' + msg + '</p>');
});
// Starta servern (lokalt)
app.listen(3000, () => {
  console.log('Server kör på http://localhost:3000');
});
