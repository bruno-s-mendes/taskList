const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const taskController = require('./controllers/taskController');
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', taskController.getTasks);

app.post('/',);

app.put('/:id',);

app.delete('/:id',);

app.get('/status', );



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});