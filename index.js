const expreess = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = expreess();
app.use(cors());
app.use(bodyParser.json());

const usersRoute = require('./routes/users');
const loginRoute = require('./routes/login');
const exercisesRoute = require('./routes/exercises');
const treningsRoute = require('./routes/trenings');

app.use('/users', usersRoute);
app.use('/login', loginRoute);
app.use('/exercises', exercisesRoute);
app.use('/trenings', treningsRoute);

app.get('/', (req, res) => {
  res.send('Workout API');
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB!')
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(`Link: http://localhost:${PORT}`);
});
