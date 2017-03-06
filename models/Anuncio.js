"use strict";

const mongoose = require('mongoose');

// Creación del esquema anuncio

const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// Creación del modelo

var Anuncio = mongoose.model('Anuncio', anuncioSchema);