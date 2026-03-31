const Proveedores_Model = require('../models/proveedores_models');

class ProveedoresController {
  static mostrar_proveedores() {
    return Proveedores_Model.mostrar_proveedores().then(r => r).catch(err => err);
  }
  static mostrar_proveedores_por_id(id) {
    return Proveedores_Model.mostrar_proveedores_por_id(id).then(r => r).catch(err => err);
  }
  static ingresar_proveedor(proveedor) {
    return Proveedores_Model.ingresar_proveedor(proveedor).then(r => r).catch(err => err);
  }
  static editar_proveedor(id, actualizar) {
    return Proveedores_Model.editar_proveedor(id, actualizar).then(r => r).catch(err => err);
  }
  static eliminar_proveedor(id) {
    return Proveedores_Model.eliminar_proveedor(id).then(r => r).catch(err => err);
  }
}

module.exports = ProveedoresController;