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

/* (GET) Todos los proveedores */
router.get('/', checkLoginAdmin, function (req, res, next) {
  Proveedores_Controller.mostrar_proveedores()
    .then((r) => {
      res.render('./proveedores_views/proveedores', { title: 'Proveedores', proveedores_list: r.result });
    })
    .catch(err => {
      res.status(500).render('error', {
        title: 'Error del Servidor',
        code: 500,
        message: 'No pudimos conectar con la base de datos'
      });
    });
});

/* (POST) */
router.get('/ingresar', checkLoginAdmin, function (req, res, next) {
  res.render('./proveedores_views/ingresar_proveedores', { title: 'Proveedores' });
});

/* (PUT) Mostrar formulario de edición */
router.get('/actualizar/:id', checkLoginAdmin, function (req, res, next) {
  Proveedores_Controller.mostrar_proveedores_por_id(req.params.id)
    .then((r) => {

      if (r.code === 404) {
        return res.status(404).render('error', {
          title: 'Proveedor no encontrado',
          code: 404,
          message: r.message
        });
      }

      res.render('./proveedores_views/editar_proveedores', {
        title: 'Editar Proveedor',
        proveedor: r.result[0]
      });
    })
    .catch(err => {
      res.status(500).render('error', {
        title: 'Error del Servidor',
        code: 500,
        message: 'No pudimos conectar con la base de datos'
      });
    });
});

module.exports = router;