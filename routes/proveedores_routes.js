var express = require('express');
var router = express.Router();
const Proveedores_Controller = require('../controllers/proveedores_controllers');
const { checkLoginAdmin } = require('../auth/auth');

/* (GET) Mostrar todos los proveedores */
router.get('/mostrar', checkLoginAdmin, (req, res) => {
  Proveedores_Controller.mostrar_proveedores()
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (GET) Buscar una sala por su ID */
router.get('/buscar/:id', checkLoginAdmin, (req, res) => {
  Proveedores_Controller.mostrar_proveedores_por_id(req.params.id)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (POST) Ingresar proveedores */
router.post('/ingresar', checkLoginAdmin, (req, res) => {
  Proveedores_Controller.ingresar_proveedor(req.body)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (PUT) Editar proveedores */
router.put('/editar/:id', checkLoginAdmin, function (req, res, next) {
  Proveedores_Controller.editar_proveedor(req.params.id, req.body)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (DELETE) Eliminar proveedores por su ID */
router.delete('/eliminar/:id', checkLoginAdmin, function (req, res, next) {
  Proveedores_Controller.eliminar_proveedor(req.params.id)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* VIEWS EJS */

module.exports = router;