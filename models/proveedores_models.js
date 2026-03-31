const pool = require('../db/connection_db');

class ProveedoresModel {
  static _validarDatos(proveedor) {
    const errors = [];
    const camposObligatorios = ['nombre', 'correo', 'telefono', 'empresa'];
    for (const campo of camposObligatorios) {
      if (proveedor[campo] === undefined || proveedor[campo] === null) errors.push(`El campo ${campo} es obligatorio`);
    }

    if (typeof (proveedor.nombre) !== "string" || proveedor.nombre == "") {
      errors.push("El nombre del proveedor debe ser una cadena de texto");
    }

    if (typeof (proveedor.correo) !== "string" || proveedor.correo == "") {
      errors.push("El correo del proveedor debe ser una cadena de texto");
    }

    if (typeof (proveedor.telefono) !== "string" || proveedor.telefono == "") {
      errors.push("El teléfono del proveedor debe ser una cadena de texto");
    }

    if (proveedor.telefono.length < 10 || proveedor.telefono.length > 11) {
      errors.push("El teléfono debe tener entre 10 y 11 dígitos");
    }

    if (isNaN(proveedor.telefono)) {
      errors.push("El teléfono del proveedor debe tener números");
    }

    if (typeof (proveedor.empresa) !== "string" || proveedor.empresa == "") {
      errors.push("El nombre del proveedor debe ser una cadena de texto");
    }

    return errors;
  }
  static mostrar_proveedores() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM `proveedores`')
        .then(([rows]) => {
          resolve({ code: 200, message: "consulta completada con éxito", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static mostrar_proveedores_por_id(id) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM `proveedores` WHERE id_proveedor = ?', id)
        .then(([rows]) => {
          if (rows.length > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: rows })
          }
          resolve({ code: 404, message: "no hay proveedores registrados con ese ID", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static ingresar_proveedor(proveedor) {
    return new Promise((resolve, reject) => {
      const error = ProveedoresModel._validarDatos(proveedor);
      if (error.length > 0) {
        reject({ code: 400, message: "Ha ocurrido un problema al ingresar los datos", result: error })
        return;
      }
      pool.query('INSERT INTO `proveedores` SET ?', proveedor)
        .then(([rows]) => {
          resolve({ code: 200, message: "consulta completada con éxito", result: [rows] })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static editar_proveedor(id, actualizar) {
    return new Promise((resolve, reject) => {
      const error = ProveedoresModel._validarDatos(actualizar);
      if (error.length > 0) {
        reject({ code: 400, message: "Ha ocurrido un problema al ingresar los datos", result: error })
        return;
      }
      pool.query('UPDATE `proveedores` SET ? WHERE `id_proveedor`= ?', [actualizar, id])
        .then(([rows]) => {
          if (rows.affectedRows > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: [rows] })
          }
          resolve({ code: 404, message: "no hay proveedores registrados con ese ID", result: rows })
        })
        .catch(err =>
          reject({ code: 500, message: err.message, result: [err] })
        );
    });
  }
  static eliminar_proveedor(id) {
    return new Promise((resolve, reject) => {
      pool.query('DELETE FROM `proveedores` WHERE `id_proveedor` = ?', id)
        .then(([rows]) => {
          if (rows.affectedRows > 0) {
            resolve({ code: 200, message: "consulta completada con éxito", result: rows })
          }
          resolve({ code: 404, message: "no hay proveedores registrados con ese ID", result: rows })
        })
        .catch((err) => {
          // El código 1451 corresponde a restricción de llave foránea
          if (err.errno === 1451 || err.code === 'ER_ROW_IS_REFERENCED_2') {
            return reject({ code: 500, message: "No se puede eliminar el proveedor porque tiene productos asignados", result: [err] })
          }
          reject({ code: 500, message: err.message, result: [err] })
        });
    });
  }
}

module.exports = ProveedoresModel;