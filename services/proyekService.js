const db = require('../config/db');

exports.getAllProyek = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Proyek', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

exports.getProyekById = (id_proyek) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Proyek WHERE id_proyek = ?', [id_proyek], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  };

exports.createProyek = (proyekData) => {
  const { id_proyek, nama_proyek, deskripsi_proyek, tanggal_mulai, tanggal_berakhir, status_proyek } = proyekData;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO Proyek SET ?',
      { id_proyek, nama_proyek, deskripsi_proyek, tanggal_mulai, tanggal_berakhir, status_proyek },
      (err, result) => {
        if (err) reject(err);
        resolve({ id_proyek, nama_proyek, deskripsi_proyek, tanggal_mulai, tanggal_berakhir, status_proyek });
      }
    );
  });
};


exports.updateProyek = (id_proyek, proyekData) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE Proyek SET ? WHERE id_proyek = ?', [proyekData, id_proyek], (err, result) => {
        if (err) reject(err);
        resolve(result.affectedRows > 0 ? { id_proyek, ...proyekData } : null);
      });
    });
  };
  
  exports.deleteProyek = (id_proyek) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM Proyek WHERE id_proyek = ?', [id_proyek], (err, result) => {
        if (err) reject(err);
        resolve(result.affectedRows > 0);
      });
    });
  };
