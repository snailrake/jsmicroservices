const express = require('express');
const app = express();

app.use(express.json());

// Регистрация модулей
const unitRoutes = require('./modules/unit');
app.use('/units', unitRoutes);

module.exports = app;
