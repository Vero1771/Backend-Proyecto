const Sucursales_Model = require('../models/sucursales_models');

class SucursalesController {
  static mostrar_sucursales() {
    return Sucursales_Model.mostrar_sucursales().then(r => r).catch(err => err);
  }
  static mostrar_sucursales_por_id(id) {
    return Sucursales_Model.mostrar_sucursales_por_id(id).then(r => r).catch(err => err);
  }
  static ingresar_sucursal(sucursal) {
    return Sucursales_Model.ingresar_sucursal(sucursal).then(r => r).catch(err => err);
  }
  static editar_sucursal(id, actualizar) {
    return Sucursales_Model.editar_sucursal(id, actualizar).then(r => r).catch(err => err);
  }
  static eliminar_sucursal(id) {
    return Sucursales_Model.eliminar_sucursal(id).then(r => r).catch(err => err);
  }
}

module.exports = SucursalesController;