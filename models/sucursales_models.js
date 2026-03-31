const pool = require('../db/connection_db');

class SucursalesModel {
  static _validarDatos(sucursal) {
    const errors = [];
    const camposObligatorios = ['nombre', 'estado', 'ciudad', 'direccion'];
    for (const campo of camposObligatorios) {
      if (sucursal[campo] === undefined || sucursal[campo] === null) errors.push(`El campo ${campo} es obligatorio`);
    }

    if (typeof (sucursal.nombre) !== "string" || sucursal.nombre == "") {
      errors.push("El nombre de la sucursal debe ser una cadena de texto");
    }

    if (typeof (sucursal.estado) !== "string" || sucursal.estado == "") {
      errors.push("El nombre del estado debe ser una cadena de texto");
    }

    if (typeof (sucursal.ciudad) !== "string" || sucursal.ciudad == "") {
      errors.push("El nombre de la ciudad debe ser una cadena de texto");
    }

    if (typeof (sucursal.direccion) !== "string" || sucursal.direccion == "") {
      errors.push("La direccion de la sucursal debe ser una cadena de texto");
    }


    return errors;
  }
  static mostrar_sucursales() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM `sucursales`')
        .then(([rows]) => {
          resolve({ code: 200, message: "consulta completada con éxito", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static mostrar_sucursales_por_id(id) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM `sucursales` WHERE id_sucursal = ?', id)
        .then(([rows]) => {
          if (rows.length > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: rows })
          }
          resolve({ code: 404, message: "no hay sucursales registradas con ese ID", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static ingresar_sucursal(sucursal) {
    return new Promise((resolve, reject) => {
      const error = SucursalesModel._validarDatos(sucursal);
      if (error.length > 0) {
        reject({ code: 400, message: "Ha ocurrido un problema al ingresar los datos", result: error })
        return;
      }
      pool.query('INSERT INTO `sucursales` SET ?', sucursal)
        .then(([rows]) => {
          resolve({ code: 200, message: "consulta completada con éxito", result: [rows] })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static editar_sucursal(id, actualizar) {
    return new Promise((resolve, reject) => {
      const error = SucursalesModel._validarDatos(actualizar);
      if (error.length > 0) {
        reject({ code: 400, message: "Ha ocurrido un problema al ingresar los datos", result: error })
        return;
      }
      pool.query('UPDATE `sucursales` SET ? WHERE `id_sucursal`= ?', [actualizar, id])
        .then(([rows]) => {
          if (rows.affectedRows > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: [rows] })
          }
          resolve({ code: 404, message: "no hay sucursales registradas con ese ID", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static eliminar_sucursal(id) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM `sucursales` WHERE `id_sucursal` = ?', id)
        .then(([rows]) => {
          if (rows.affectedRows > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: rows })
          }
          resolve({ code: 404, message: "no hay sucursales registradas con ese ID", result: rows })
        })
        .catch((err) => {
          // El código 1451 corresponde a restricción de llave foránea
          if (err.errno === 1451 || err.code === 'ER_ROW_IS_REFERENCED_2') {
            return reject({ code: 500, message: "No se puede eliminar la sucursal porque tiene salas asignadas", result: [err] })
          }
          reject({ code: 500, message: err.message, result: [err] })
        });
    });
  }
}

module.exports = SucursalesModel;