const Peliculas_Model = require('../models/peliculas_models');

class PeliculasController {
  static mostrar_peliculas() {
    return Peliculas_Model.mostrar_peliculas().then(r => r).catch(err => err);
  }
  static mostrar_peliculas_por_id(id) {
    return Peliculas_Model.mostrar_peliculas_por_id(id).then(r => r).catch(err => err);
  }
  static ingresar_pelicula(peli, categorias, directores) {
    return Peliculas_Model.ingresar_pelicula(peli, categorias, directores).then(r => r).catch(err => err);
  }
  static editar_pelicula(id, actualizar, categorias, directores) {
    return Peliculas_Model.editar_pelicula(id, actualizar, categorias, directores).then(r => r).catch(err => err);
  }
  static eliminar_pelicula(id) {
    return Peliculas_Model.eliminar_pelicula(id).then(r => r).catch(err => err);
  }
}

module.exports = PeliculasController;