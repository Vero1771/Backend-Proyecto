var express = require('express');
var router = express.Router();
const Directores_Controller = require('../controllers/directores_controllers');
const { checkLoginAdmin } = require('../auth/auth');

/* (GET) Mostrar todos los directores */
router.get('/mostrar', (req, res) => {
  Directores_Controller.mostrar_directores()
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (GET) Buscar un director por su ID */
router.get('/buscar/:id', (req, res) => {
  Directores_Controller.mostrar_directores_por_id(req.params.id)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (POST) Ingresar directores */
router.post('/ingresar', checkLoginAdmin, (req, res) => {
  Directores_Controller.ingresar_director(req.body)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (PUT) Editar directores */
router.put('/editar/:id', checkLoginAdmin, function (req, res, next) {
  Directores_Controller.editar_director(req.params.id, req.body)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (DELETE) Eliminar directores por su ID */
router.delete('/eliminar/:id', checkLoginAdmin, function (req, res, next) {
  Directores_Controller.eliminar_director(req.params.id)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* VIEWS EJS */

module.exports = router;