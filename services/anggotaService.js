const db = require('../config/db');

exports.getAllAnggota = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Anggota', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

exports.getAnggotaById = (id_anggota) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Anggota WHERE id_anggota = ?', [id_anggota], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  };
  
  exports.getAnggotaByTim = (id_tim) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Anggota WHERE id_tim = ?', [id_tim], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  };

exports.createAnggota = (anggotaData) => {
  const { id_anggota, id_tim, nama_anggota, peran } = anggotaData;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO Anggota SET ?',
      { id_anggota, id_tim, nama_anggota, peran },
      (err, result) => {
        if (err) reject(err);
        resolve({ id_anggota, id_tim, nama_anggota, peran });
      }
    );
  });
};

exports.updateAnggota = (id_anggota, anggotaData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE Anggota SET ? WHERE id_anggota = ?', [anggotaData, id_anggota], (err, result) => {
      if (err) reject(err);
      resolve(result.affectedRows > 0 ? { id_anggota, ...anggotaData } : null);
    });
  });
};

exports.deleteAnggota = (id_anggota) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM Anggota WHERE id_anggota = ?', [id_anggota], (err, result) => {
      if (err) reject(err);
      resolve();
    });
  });
};
