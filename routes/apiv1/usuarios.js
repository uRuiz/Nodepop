"use strict";

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const jwt = require('jsonwebtoken');
const localConfig = require('../../localConfig');

/*
router.get('/', function (req, res, next) {

    res.send('ok');
});
*/
// crear un usuario

router.post('/register', function (req, res, next) {
   const usuario = new Usuario(req.body);

   usuario.save(function(err, usuarioCreado){
       if (err) {
           next(err);
           return;
       }
       res.json({success: true, data: usuarioCreado});
   });
});

router.post('/authenticate', function (req, res, next) {
    const email = req.body.email;
    const clave = req.body.clave;

    const token = jwt.sign({_id: user._id}, localConfig.jwt.secret,{
        expiresIn: localConfig.jwt.expiresIn
    });

    res.json({success: true, token: token, expires: 'Expira en 2 días'});
});

module.exports = router;