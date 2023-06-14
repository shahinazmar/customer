const express = require('express');
const app = express();
const port = 3000;

// Set up Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));

// Data
let customers = [
  { id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243' },
  { id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113' },
  { id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176' },
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { customers });
});

app.get('/customers/new', (req, res) => {
  res.render('new');
});

app.post('/customers', (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  const id = Date.now().toString();
  const newCustomer = { id, firstname, lastname, email, phone };
  customers.push(newCustomer);
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Customer application listening at http://localhost:${port}`);
});
