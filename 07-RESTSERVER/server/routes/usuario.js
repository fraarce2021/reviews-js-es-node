const express = require('express');

const app = express();

app.get('/usuario', (req, res) => {
    res.json('Get Usuario')
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });
    }

    res.json({
        persona: body
    })
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('Delete Usuarios')
});

module.exports = app;