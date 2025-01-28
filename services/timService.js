const db = require('../config/db');

exports.getAllTim = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Tim', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

exports.getTimById = (id_tim) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Tim WHERE id_tim = ?', [id_tim], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  };

exports.createTim = (timData) => {
  const { id_tim, nama_tim, deskripsi_tim } = timData;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO Tim SET ?',
      { id_tim, nama_tim, deskripsi_tim },
      (err, result) => {
        if (err) reject(err);
        resolve({ id_tim, nama_tim, deskripsi_tim });
      }
    );
  });
};

exports.updateTim = (id_tim, timData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE Tim SET ? WHERE id_tim = ?', [timData, id_tim], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0 ? { id_tim, ...timData } : null);
    });
  });
};

exports.deleteTim = (id_tim) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM Tim WHERE id_tim = ?', [id_tim], (err, result) => {
      if (err) reject(err);
      resolve();
    });
  });
};
