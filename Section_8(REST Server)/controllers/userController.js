const { request, response } = require('express');   // Redundante pero sirve para ver qué opciones tiene "response" para programar

const userGet = (req = request, res = response) => {  // Para cuando hay parámetros opcionales (/api/user?nombre=Pablo&edad=21)
    //const { name = 'No name', age } = req.query;   // En caso de no venir el nombre se pone por defecto "No name"
    const params = req.query;

    res.json({   // Para enviar un json
        msg: 'get API',
        //name,
        //age,
        params
    });
};

const userPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({   // Para enviar un json
        msg: 'post API',
        nombre,
        edad
    });
};

const userPut = (req = request, res = response) => {
    const id = req.params.id;  // Porque la ruta es "/:id"

    res.json({   // Para enviar un json
        msg: 'put API',
        id
    });
};

const userDelete = (req, res = response) => {
    res.json({   // Para enviar un json
        msg: 'delete API'
    });
};

const userPatch = (req, res = response) => {
    res.json({   // Para enviar un json
        msg: 'patch API'
    });
};

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
};