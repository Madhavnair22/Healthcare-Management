const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./app/config/db.config');

const app = express();
const port = 5100;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const db = require('./app/models');
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1);
});

// Routes
require('./app/routes/user.routes')(app);
require('./app/routes/bookingRoutes')(app);

// Default route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the booking app" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
