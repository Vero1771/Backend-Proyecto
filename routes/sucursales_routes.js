var express = require('express');
var router = express.Router();
const Sucursales_Controller = require('../controllers/sucursales_controllers');
const { checkLoginAdmin } = require('../auth/auth');

/* (GET) Mostrar todas las sucursales */
router.get('/mostrar', (req, res) => {
  Sucursales_Controller.mostrar_sucursales()
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (GET) Buscar una sucursal por su ID */
router.get('/buscar/:id', (req, res) => {
  Sucursales_Controller.mostrar_sucursales_por_id(req.params.id)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (POST) Ingresar sucursales */
router.post('/ingresar', checkLoginAdmin, (req, res) => {
  Sucursales_Controller.ingresar_sucursal(req.body)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (PUT) Editar sucursales */
router.put('/editar/:id', checkLoginAdmin, function (req, res, next) {
  Sucursales_Controller.editar_sucursal(req.params.id, req.body)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* (DELETE) Eliminar sucursales por su ID */
router.delete('/eliminar/:id', checkLoginAdmin, function (req, res, next) {
  Sucursales_Controller.eliminar_sucursal(req.params.id)
    .then(r => res.status(r.code).json(r))
    .catch(err => res.status(err.code).json(err));
});

/* VIEWS EJS */

/* (GET) Todas las sucursales */
router.get('/', function (req, res, next) {
  Sucursales_Controller.mostrar_sucursales()
    .then((r) => {
      res.render('./sucursales_views/sucursales', { title: 'Sucursales', sucursales_list: r.result });
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
  res.render('./sucursales_views/ingresar_sucursales', { title: 'Sucursales' });
});

/* (PUT) Mostrar formulario de edición */
router.get('/actualizar/:id', checkLoginAdmin, function (req, res, next) {
  Sucursales_Controller.mostrar_sucursales_por_id(req.params.id)
    .then((r) => {

      if (r.code === 404) {
        return res.status(404).render('error', {
          title: 'Sucursal no encontrada',
          code: 404,
          message: r.message
        });
      }

      res.render('./sucursales_views/editar_sucursales', {
        title: 'Editar Sucursal',
        sucursal: r.result[0]
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