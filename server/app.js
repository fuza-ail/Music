require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const routerUser = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routerUser);

app.listen(PORT, () => {
  console.log(`Listengin to port ${PORT}`);
});

