const express = require('express');
const app = express();

app.use(express.json());

const unitRoutes = require('./modules/unit');
app.use('/unit', unitRoutes);

module.exports = app;
