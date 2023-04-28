const express = require('express');
const db = require('./db/index')
const ProductRouter = require('./routes/product-router');
const bodyParser = require('body-parser')
const cors = require('cors')

db.on('connected', () => { console.log('Mongodb connected') });
db.on('error', () => { console.log('Mongodb connected failed') });

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', ProductRouter);


app.get('/', (req, res) => {
  res.send('Hello world!');
});


app.listen(port, () => {
  console.log('Server is running');
});
