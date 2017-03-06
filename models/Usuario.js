"use strict";

const mongoose = require('mongoose');

// Creación del esquema de usuario

const usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String
});

// Creación del modelo

var Usuario = mongoose.model('Usuario', usuarioSchema);