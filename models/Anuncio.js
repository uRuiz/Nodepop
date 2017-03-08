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

// ponemos un método al schema
anuncioSchema.statics.list = function (filter, limit, skip, sort, callBack) {
    const query = Anuncio.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.sort(sort);
    query.exec(callBack);
};

// Lista de tags permitidos
anuncioSchema.statics.tagsPermitidos = function (callBack) {
    return ['work', 'lifestyle', 'motor', 'mobile'];
};

// Creación del modelo

var Anuncio = mongoose.model('Anuncio', anuncioSchema);