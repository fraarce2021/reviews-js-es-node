const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const Usuario = require('../models/usuario');

app.use(fileUpload());

app.put('/upload/:tipo/:id', function(req, res) {
    let archivo;
    let uploadPath;

    let tipo = req.params.tipo;
    let id = req.params.id;

    // Valida tipo

    let tipoValidos = ['productos', 'usuarios'];

    if (tipoValidos.indexOf(tipo) < 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'El tipo ingresado es invalido, los tipos permitidos son ' + tipoValidos.join(', ')
            }
        })
    }


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha seleccionado ningun archivo'
            }
        });
    }

    archivo = req.files.archivo;
    let nombreCortado = archivo.name.split('.');
    let extension = nombreCortado[nombreCortado.length - 1];

    console.log(extension);
    // Extensiones permitidas
    let extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extension) < 0) {
        return res.status(500).json({
            ok: false,
            err: {
                message: 'Las extensiones permitidas son ' + extensionesValidas.join(', ')
            }
        });
    }

    // Cambiar nombre al archivo
    let nombreArchivo = `${id}-${new Date().getMilliseconds()}.${extension}`;

    uploadPath = __dirname + `/../../uploads/${tipo}/` + nombreArchivo;

    // Use the mv() method to place the file somewhere on your server
    archivo.mv(uploadPath, (err) => {
        if (err)
            return res.status(500).json({
                ok: false,
                err
            });

        imagenUsuario(id, res, nombreArchivo);
    });
});

const imagenUsuario = (id, res, nombreArchivo) => {

    Usuario.findById(id, (err, usuarioDB) => {
        if (err)
            return res.status(400).json({
                ok: false,
                err
            });
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no existe'
                }
            });
        }

        usuarioDB.img = nombreArchivo;

        usuarioDB.save((err, usuarioGuardado) => {
            if (err)
                return res.status(400).json({
                    ok: false,
                    err
                });
            res.json({
                ok: true,
                usuario: usuarioGuardado,
                img: nombreArchivo
            });
        })
    });

}

const imagenProducto = () => {

}

module.exports = app;