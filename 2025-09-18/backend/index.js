const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let items = [];

app.post('/items', (req, res) => {
  items.push(req.body);
  res.send(req.body);
});

app.get('/items', (req, res) => {
  res.send(items);
});

app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  items = items.map(item => (item.id == id ? req.body : item));
  res.send(req.body);
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  items = items.filter(item => item.id != id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
});