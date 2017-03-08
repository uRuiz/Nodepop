"use strict";

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

router.get('/', function (req, res, next) {

    res.send('ok');
});

// crear un usuario

router.post('/', function (req, res, next) {
   const usuario = new Usuario(req.body);

   usuario.save(function(err, usuarioCreado){
       if (err) {
           next(err);
           return;
       }
       res.json({success: true, data: usuarioCreado});
   });
});

module.exports = router;