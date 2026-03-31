const pool = require('../db/connection_db');

class DirectoresModel {
  static _validarDatos(director) {
    const errors = [];
    const camposObligatorios = ['nombre', 'apellido'];
    for (const campo of camposObligatorios) {
      if (director[campo] === undefined || director[campo] === null) errors.push(`El campo ${campo} es obligatorio`);
    }

    if (typeof (director.nombre) !== "string" || director.nombre == "") {
      errors.push("El nombre del director debe ser una cadena de texto");
    }

    if (typeof (director.apellido) !== "string" || director.apellido == "") {
      errors.push("El apellido del director debe ser una cadena de texto");
    }

    return errors;
  }
  static mostrar_directores() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM `directores`')
        .then(([rows]) => {
          resolve({ code: 200, message: "consulta completada con éxito", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static mostrar_directores_por_id(id) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM `directores` WHERE id_director = ?', id)
        .then(([rows]) => {
          if (rows.length > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: rows })
          }
          resolve({ code: 404, message: "no hay directores registrados con ese ID", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static ingresar_director(director) {
    return new Promise((resolve, reject) => {
      const error = DirectoresModel._validarDatos(director);
      if (error.length > 0) {
        reject({ code: 400, message: "Ha ocurrido un problema al ingresar los datos", result: error })
        return;
      }
      pool.query('INSERT INTO `directores` SET ?', director)
        .then(([rows]) => {
          resolve({ code: 200, message: "consulta completada con éxito", result: [rows] })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static editar_director(id, actualizar) {
    return new Promise((resolve, reject) => {
      const error = DirectoresModel._validarDatos(actualizar);
      if (error.length > 0) {
        reject({ code: 400, message: "Ha ocurrido un problema al ingresar los datos", result: error })
        return;
      }
      pool.query('UPDATE `directores` SET ? WHERE `id_director`= ?', [actualizar, id])
        .then(([rows]) => {
          if (rows.affectedRows > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: [rows] })
          }
          resolve({ code: 404, message: "no hay directores registrados con ese ID", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static eliminar_director(id) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM `directores` WHERE `id_director` = ?', id)
        .then(([rows]) => {
          if (rows.affectedRows > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: rows })
          }
          resolve({ code: 404, message: "no hay directores registrados con ese ID", result: rows })
        })
        .catch((err) => {
          // El código 1451 corresponde a restricción de llave foránea
          if (err.errno === 1451 || err.code === 'ER_ROW_IS_REFERENCED_2') {
            return reject({ code: 500, message: "No se puede eliminar el director porque tiene películas asignadas", result: [err] })
          }
          reject({ code: 500, message: err.message, result: [err] })
        });
    });
  }
}

module.exports = DirectoresModel;