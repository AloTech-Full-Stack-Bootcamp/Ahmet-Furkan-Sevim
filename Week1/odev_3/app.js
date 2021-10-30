const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.get('', (req, res) => {
  res.write('<h1>Index</h1>');
});
app.get('/about', (req, res) => {
  res.write('<h1>Hakkimda</h1>');
});
app.get('/contact', (req, res) => {
  res.write('<h1>Iletisim</h1>');
});

app.get('/*', (req, res) => {
  res.status(404).send('<h1>404 NOT FOUND<h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running by localhost:${PORT}`);
});
