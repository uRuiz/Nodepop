"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

router.get('/', function (req, res, next) {

    const venta = req.query.venta;
    const tags = req.query.tags;
    const nombre = req.query.nombre;

    // creación de un filtro vacío
    const filter = {};

    if (venta) {
        filter.venta = venta;
    }

    if (tags) {
        filter.tags = tags;
    }

    if (nombre) {
        filter.nombre = new RegExp('^' + nombre, 'i');
    }

    // recuperar lista de anuncios
    Anuncio.list(filter, function (err, docs) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, data: docs});
    });

});

// recuperar la lista de tags permitidos
router.get('/tags', function (req, res, next) {
    res.json({success: true,  tagsPermitidos: Anuncio.tagsPermitidos()});

});

module.exports = router;
