"use strict";

const mongoose = require('mongoose');
const sha256 = require('sha256');
require('./lib/connectMongoose');
require('./models/Anuncio');
require('./models/Usuario');
const fs = require('fs');

const Anuncio = mongoose.model('Anuncio');
const Usuario = mongoose.model('Usuario');

//Eliminar los datos de la base de datos

Anuncio.remove( {}, function(err){
    if(err){
        console.error(err);
        return;
    }

    console.log('Todos los anuncios han sido eliminados');
});

Usuario.remove({},function(err){
    if(err){
        console.error(err);
        return;
    }

    console.log('Todos los usuarios han sido eliminados');
});

//Crear un usuario

var usuario = new Usuario({nombre:"admin", email:"admin@admin.es", clave:sha256('supersegura')});

usuario.save(function(err, u){
    if(err)throw err;
    console.log('Usuario creado ', u);
});

var bdAnuncios;

fs.readFile('anuncios.json','utf8',function(err, data){
    if(err){
        console.error('Se ha producido un error al leer el archivo', err);
        throw err;
    }

    bdAnuncios = JSON.parse(data);

    Anuncio.collection.insertMany(bdAnuncios.anuncios, function(err, r){
        if(err){
            console.error('Se ha producido un error al añadir los anuncios', err);
            throw err;
        }

        console.log('Anuncios añadidos', r.insertedCount);
    });
});
