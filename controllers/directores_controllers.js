const Directores_Model = require('../models/directores_models');

class DirectoresController {
  static mostrar_directores() {
    return Directores_Model.mostrar_directores().then(r => r).catch(err => err);
  }
  static mostrar_directores_por_id(id) {
    return Directores_Model.mostrar_directores_por_id(id).then(r => r).catch(err => err);
  }
  static ingresar_director(director) {
    return Directores_Model.ingresar_director(director).then(r => r).catch(err => err);
  }
  static editar_director(id, actualizar) {
    return Directores_Model.editar_director(id, actualizar).then(r => r).catch(err => err);
  }
  static eliminar_director(id) {
    return Directores_Model.eliminar_director(id).then(r => r).catch(err => err);
  }
}

module.exports = DirectoresController;