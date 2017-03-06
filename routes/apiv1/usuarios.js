"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

router.get('/', function (req, res, next) {

    res.send('ok');
});

module.exports = router;