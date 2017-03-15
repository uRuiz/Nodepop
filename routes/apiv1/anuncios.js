"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

const jwtAuth = require('../../lib/jwtAuth');

router.use(jwtAuth());

// recuperar los anuncios
router.get('/', function (req, res, next) {

    const venta = req.query.venta;
    const tags = req.query.tags;
    const nombre = req.query.nombre;
    const limit = parseInt(req.query.limit) || 30;
    const skip = parseInt(req.query.skip) || 0;
    const sort = req.query.sort;
    const minPrice = parseInt(req.query.minPrice);
    const maxPrice = parseInt(req.querymaxPrice);


    // creación de un filtro vacío
    const filter = {};

    if (typeof venta !== 'undefined') {
        filter.venta = venta;
    }

    if (typeof tags !== 'undefined') {
        filter.tags = tags;
    }

    if (typeof nombre !== 'undefined') {
        filter.nombre = new RegExp('^' + nombre, 'i');
    }

    if (typeof sort !== 'undefined') {
        filter.sort = sort;
    }

    if (typeof minPrice !== 'undefined') {
        filter.precio =  {$gte: minPrice};
    }

    if (typeof maxPrice !== 'undefined') {
        filter.precio =  {$lte: maxPrice};
    }

    // recuperar lista de anuncios
    Anuncio.list(filter, limit, skip, sort, function (err, docs) {
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
