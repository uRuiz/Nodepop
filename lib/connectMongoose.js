"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;

conn.on('error', function (err) {
   console.log('Se ha producido el siguiente error:', err);
    process.exit(1);
});

conn.once('open', function () {
   console.log('Conectado a mongodb');
});

mongoose.connect('mongodb://localhost/nodepop');