"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

router.get('/', function (req, res, next) {
    // recuperar lista de anuncios
    Anuncio.list(function (err, docs) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, data: docs});
    });

});

router.get('/', function (req, res, next) {
    res.json({success: true, })
});

module.exports = router;
