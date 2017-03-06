"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

router.get('/', function (req, res, next) {
    // recuperar lista de anuncios

});

module.exports = router;